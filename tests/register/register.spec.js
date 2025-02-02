import {test, expect} from "@playwright/test";
import { Register } from "../../pageObjects/register.po";


const testData = require('../../fixtures/loginFixture.json')

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Login', () => {
    test('should login', async ({ page }) => {
        const loginPage = new Register(page);
        await loginPage.addContact(testData.validUser.username, testData.validUser.password);
        await loginPage.newContact();
    });
});