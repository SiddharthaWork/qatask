import { expect } from "@playwright/test";
import exp from "constants";

export class Register {
    constructor(page) {
        this.page = page;
        this.usernameInput = "#email";
        this.passwordInput = "#password";
        this.loginButton = "//button[@id='submit']";
        this.addbutton = "#add-contact";
        this.firstname = "#firstName";
        this.lastname = "#lastName";
        this.date = "#birthdate";
        this.phone = "#phone";
        this.email = "#email";
        this.streetaddress = '#street1';
        this.streetaddress2 = '#street2';
        this.city = '#city';
        this.state = '#stateProvince';
        this.postalcode = '#postalCode';
        this.country = '#country';
        this.submit = '#submit';
        this.validate = '//p[text()="Click on any contact to view the Contact Details"]'
    }

    async addContact(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async newContact() {
        await this.page.locator(this.addbutton).click();
        await this.page.locator(this.firstname).fill('John');
        await this.page.locator(this.lastname).fill('Doe');
        await this.page.locator(this.date).fill('2020-02-02');
        await this.page.locator(this.email).fill('jhon@doe.com');
        await this.page.locator(this.phone).fill('1234567890');
        await this.page.locator(this.streetaddress).fill('123 Main St');
        await this.page.locator(this.streetaddress2).fill('Apt 1');
        await this.page.locator(this.city).fill('New York');
        await this.page.locator(this.state).fill('NY');
        await this.page.locator(this.postalcode).fill('10001');
        await this.page.locator(this.country).fill('United States');
        await this.page.locator(this.submit).click();
    }
    async viewtest() {
        await this.page.locator(this.view).click();
        this.viewtest()
    }
}