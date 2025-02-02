// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://192.168.1.68:3000/');
  
  const title = "Culture"
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(title);
});

test('get started ko link test', async ({ page }) => {

    await page.goto('http://192.168.1.68:3000/');
    await page.locator('//span[text()="Plan Your Trip"]').click();
    await expect(page).toHaveURL('http://192.168.1.68:3000/plan-your-trip');

});







