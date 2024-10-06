import { Locator, Page } from '@playwright/test';

export default class HomaPage {
	readonly page: Page;
	readonly thirdProduct: Locator;
	readonly viewProductBtn: Locator;
	readonly cart: Locator;
	readonly logout: Locator;

	constructor(page: Page) {
		this.page = page;
		this.thirdProduct = page.locator('.single-products').nth(2);
		this.viewProductBtn = page.getByText('View Product').nth(2);
		this.cart = page.getByText('Cart').first();
		this.logout = page.getByText('Logout');
	}
}
