import { chromium } from '@playwright/test'
import assert from 'node:assert/strict'

const origin = process.env.TRICRAFT_ORIGIN || 'http://127.0.0.1:5317'
const readOnly = process.env.TRICRAFT_READ_ONLY === '1'
const width = Number(process.env.TRICRAFT_WIDTH || 320)
const browser = await chromium.launch(process.env.TRICRAFT_BROWSER_CHANNEL ? { channel: process.env.TRICRAFT_BROWSER_CHANNEL } : {})
try {
  const page = await browser.newPage({ viewport: { width, height: 740 }, reducedMotion: 'reduce' })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  let mode = 'failure', calls = 0, release
  await page.route('https://formspree.io/**', async route => {
    assert.equal(route.request().method(), 'POST')
    assert.ok(route.request().postData().includes('Synthetic reviewer'))
    calls++
    if (mode === 'pending') await new Promise(resolve => { release = resolve })
    if (mode === 'network') return route.abort('failed')
    return route.fulfill({ status: mode === 'failure' ? 422 : 200, contentType: 'application/json', body: '{}' })
  })
  await page.goto(origin, { waitUntil: 'networkidle' })
  for (const id of ['services', 'about', 'gallery', 'faq', 'contact']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded()
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${id} overflows`)
  }
  if (!readOnly) {
    await page.getByRole('button', { name: 'Open menu' }).click()
    await page.getByRole('dialog', { name: 'Site menu' }).waitFor()
    await page.locator('dialog:modal').waitFor()
    await page.keyboard.press('Shift+Tab')
    await page.keyboard.press('Shift+Tab')
    assert.ok(await page.evaluate(() => !!document.activeElement.closest('dialog')))
    await page.keyboard.press('Escape')
    await page.getByRole('dialog').waitFor({ state: 'detached' })
    assert.equal(await page.getByRole('button', { name: 'Open menu' }).evaluate(el => el === document.activeElement), true)
    const photo = page.locator('#gallery button').first()
    await photo.focus()
    await page.keyboard.press('Enter')
    await page.getByRole('dialog', { name: 'Project photos' }).waitFor()
    await page.getByRole('button', { name: 'Next image' }).click()
    await page.keyboard.press('Escape')
    await page.getByRole('dialog').waitFor({ state: 'detached' })
    assert.ok(await photo.evaluate(el => el === document.activeElement))
  }
  const faq = page.locator('#faq button').first()
  await faq.focus()
  const before = await faq.getAttribute('aria-expanded')
  await page.keyboard.press('Enter')
  assert.notEqual(await faq.getAttribute('aria-expanded'), before)
  if (!readOnly) {
    await page.getByLabel('Name', { exact: true }).fill('Synthetic reviewer')
    await page.getByLabel('Phone', { exact: true }).fill('7175550100')
    await page.getByLabel('Service Needed').selectOption('plumbing')
    await page.getByLabel('Tell Us About Your Project').fill('Synthetic offline fixture, no provider delivery.')
    await page.getByRole('button', { name: 'Send Request', exact: true }).click()
    await page.locator('#contact').getByRole('alert').waitFor()
    assert.equal(await page.getByLabel('Name', { exact: true }).inputValue(), 'Synthetic reviewer')
    mode = 'network'
    await page.getByRole('button', { name: 'Send Request', exact: true }).click()
    await page.locator('#contact').getByRole('alert').filter({ hasText: 'could not confirm' }).waitFor()
    assert.equal(await page.getByLabel('Phone', { exact: true }).inputValue(), '7175550100')
    mode = 'pending'
    await page.getByRole('button', { name: 'Send Request', exact: true }).click()
    await page.getByRole('button', { name: 'Sending...' }).waitFor()
    assert.ok(await page.getByRole('button', { name: 'Sending...' }).isDisabled())
    assert.equal(calls, 3)
    while (!release) await new Promise(resolve => setTimeout(resolve, 10))
    release()
    await page.getByRole('status').filter({ hasText: 'Request Sent!' }).waitFor()
    await page.getByRole('button', { name: 'Send another request' }).click()
    assert.equal(await page.getByLabel('Name', { exact: true }).inputValue(), '')
    assert.equal(calls, 3)
  }
  const notFound = await page.goto(`${origin}/missing-customer-fixture`)
  assert.equal(notFound.status(), 404)
  assert.ok(await page.getByRole('heading', { name: /404|not found/i }).count())
  assert.deepEqual(errors, [])
  console.log(JSON.stringify({ origin, readOnly, width, reducedMotion: true, fixtureRequests: calls, providerDeliveries: 0, result: 'passed' }))
} finally {
  await browser.close()
}
