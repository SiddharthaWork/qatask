import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/');

    // Use the correct XPath with double quotes outside and single quotes inside
    const textbox = page.locator("//textarea[@id='APjFqb']"); // Correct XPath selector

    await textbox.click();
    await textbox.fill('something');

    // Adding a wait time (although this is not generally recommended; try to use other wait methods if possible)
    await page.waitForTimeout(8000);
});
