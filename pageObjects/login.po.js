import test from "@playwright/test";
import { error } from "console";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "#email";
        this.passwordInput = "#password";
        this.loginButton = "//button[@id='submit']";
        this.logoutButton = "//button[@id='logout']";
        this.loginValidataion = '//h1[text()="Contact List"]';

        this.alertMessage = "//span[@id='error']";
        this.view = "//td[contains(text(),'John Doe')])[1]";
    }

    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyLogin() {
        const LoginValidation = await this.page.locator(this.loginValidataion).textContent();
        console.log(LoginValidation);
        expect(LoginValidation).toContain("Login");
    }
 



}