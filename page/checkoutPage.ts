import { Locator, Page } from '@playwright/test';

export default class ShopPage {
	readonly page: Page;
	readonly placeOrderBtn: Locator;

	constructor(page: Page, baseURL: string) {
		this.page = page;
		this.placeOrderBtn = page.locator('.btn').filter({ hasText: 'Place Order' });
	}
}
