import { Locator, Page } from '@playwright/test';

export default class ProductPage {
	readonly page: Page;
	readonly quantity: Locator;
	readonly addBtn: Locator;
	readonly addedMsg: Locator;
	readonly viewCartBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.quantity = page.locator('#quantity');
		this.addBtn = page.getByText('Add to cart');
		this.addedMsg = page.locator('.modal-content:has-text("Added!")');
		this.viewCartBtn = page.locator('a:has-text("View Cart")'); 
	}

	getRandomNumber() {
		const randomNum = Math.floor(Math.random() * 20) + 1;
		return randomNum.toString();
	}
}
