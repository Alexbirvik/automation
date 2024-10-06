import { Locator, Page } from '@playwright/test';

export default class LoginSignupPage {
	readonly page: Page;
	readonly signupName: Locator;
	readonly signupEmail: Locator;
	readonly signupBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.signupName = page.locator('[data-qa="signup-name"]');
		this.signupEmail = page.locator('[data-qa="signup-email"]');
		this.signupBtn = page.locator('[data-qa="signup-button"]');
	}
}
