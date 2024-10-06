import { Locator, Page } from '@playwright/test';

export default class SignupPage {
	readonly page: Page;
	readonly password: Locator;
	readonly firstName: Locator;
	readonly lastName: Locator;
	readonly streetAddress: Locator;
	readonly state: Locator;
	readonly city: Locator;
	readonly zipCode: Locator;
	readonly mobileNum: Locator;
	readonly createAccountBtn: Locator;
	readonly continueBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.password = page.locator('[data-qa="password"]');
		this.firstName = page.locator('[data-qa="first_name"]');
		this.lastName = page.locator('[data-qa="last_name"]');
		this.streetAddress = page.locator('[data-qa="address"]');
		this.state = page.locator('[data-qa="state"]');
		this.city = page.locator('[data-qa="city"]');
		this.zipCode = page.locator('[data-qa="zipcode"]');
		this.mobileNum = page.locator('[data-qa="mobile_number"]');
		this.createAccountBtn = page.locator('[data-qa="create-account"]');
		this.continueBtn = page.locator('[data-qa="continue-button"]');
	}
}
