import { Locator, Page } from '@playwright/test';

export default class ShopPage {
	readonly page: Page;
	readonly product: Locator;
	readonly addBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.product = page.locator('#quantity');
		this.addBtn = page.getByText('Add to cart');
	}

	async getRandomNumber() {
		await Math.floor(Math.random() * 20) + 1;
	}
}
