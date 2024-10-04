import { Locator, Page } from '@playwright/test';

export default class HomaPage {
	readonly page: Page;
	readonly product: Locator;
	readonly viewProductBtn: Locator;
	readonly cart: Locator;
	readonly logout: Locator;

	constructor(page: Page, baseURL: string) {
		this.page = page;
		this.product = page.locator('.single-products');
		this.viewProductBtn = page.getByText('View Product');
		this.cart = page.getByText('Cart').first();
		this.logout = page.getByText('Logout');
	}
}
