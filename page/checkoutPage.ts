import { Locator, Page } from '@playwright/test';

export default class CheckoutPage {
	readonly page: Page;
	readonly placeOrderBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.placeOrderBtn = page.locator('.btn').filter({ hasText: 'Place Order' });
	}
}
