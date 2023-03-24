import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://repaircms-ultimate-2023.herokuapp.com/')

  // keep browser open
  await page.pause()
})
