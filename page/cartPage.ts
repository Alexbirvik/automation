import { Locator, Page } from '@playwright/test';

export default class CartPage {
	readonly page: Page;
	readonly cart: Locator;
	readonly proceedToCheckoutBtn: Locator;
	readonly registerLoginBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.cart = page.locator('a:has-text("Cart")');
		this.proceedToCheckoutBtn = page.locator('.btn').filter({ hasText: 'Proceed To Checkout' });;
		this.registerLoginBtn = page.locator('a:has-text("Register / Login")')
	}
}
