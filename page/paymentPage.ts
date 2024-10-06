import { Locator, Page } from '@playwright/test';

export default class PaymentPage {
	readonly page: Page;
	readonly placeOrderBtn: Locator;
	readonly orderPlacedMsg: Locator;

	constructor(page: Page, baseURL: string) {
		this.page = page;
		this.placeOrderBtn = page.locator('.btn').filter({ hasText: 'Pay and Confirm Order' });
		this.orderPlacedMsg = page.getByText('Order Placed!');
	}
}
