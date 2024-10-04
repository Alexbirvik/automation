import { Locator, Page } from '@playwright/test';

export default class ShopPage {
	readonly page: Page;
	readonly cart: Locator;
	readonly proceedToCheckoutBtn: Locator;

	constructor(page: Page, baseURL: string) {
		this.page = page;
		this.cart = page.getByText('Cart').first();
		this.proceedToCheckoutBtn = page.locator('.btn').filter({ hasText: 'Proceed To Checkout' });
	}
}
