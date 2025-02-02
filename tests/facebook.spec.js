import { test, expect} from '@playwright/test';
import exp from 'constants';
import { link } from 'fs';

test('facebook testing', async({ page }) => {
    await page.goto('https://www.facebook.com/');
    // await expect(page).toHaveTitle(/Facebook/);
    await page.getByRole('link', { name: 'Log In' }).click();
});

// test('facebook testing', async({ page }) => {
//     await page.goto('https://www.facebook.com/');
//     await expect(page).toHaveTitle(/Facebook/);
// });

// test('facebook login testing', async({ page }) => {
//     await page.goto('https://www.facebook.com/');
//     await page.locator('//a[text()="Log In"]').click();
//     await page.locator('//input[@name="email"]').click();
//     await page.locator('//input[@name="email"]').fill('Bb8Cm@example.com');
//     await page.locator('//input[@name="pass"]').click();
//     await page.locator('//input[@name="pass"]').fill('123456');
//     await page.locator('//button[@name="login"]').click();    
//     await expect(page).toHaveURL('https://www.facebook.com/');  
// });