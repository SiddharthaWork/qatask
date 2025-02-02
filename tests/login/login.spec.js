import {test, expect} from "@playwright/test";
import { LoginPage } from "../../pageObjects/login.po";


const testData = require('../../fixtures/loginFixture.json')

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test.describe('Login', () => {
    test('should login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(testData.validUser.username, testData.validUser.password);
        await loginPage.verifyLogin();
    });
});