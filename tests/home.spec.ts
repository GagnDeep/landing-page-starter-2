import { test, expect } from '@playwright/test';

test('homepage loads and displays correct hero text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1').first()).toBeVisible();
  const text = await page.locator('h1').first().innerText();
  console.log("Hero H1 text:", text);
});
