import { test, expect, Page } from '@playwright/test';
import Homepage from '../page/homePage';
import ProductPage from '../page/productPage';
import CartPage from '../page/cartPage';
import LoginSignupPage from '../page/loginSignupPage';
import SignupPage from '../page/signupPage';
import CheckoutPage from '../page/checkoutPage';
import { faker } from '@faker-js/faker';

// Tests implemented as a flow that is why it has a serial mode 
test.describe.serial(`Buy product flow`, async () => {
	let page: Page;
	let homepage: Homepage;
	let productpage: ProductPage;
	let cartpage: CartPage;
	let loginsignuppage: LoginSignupPage;
	let signuppage: SignupPage;
	let checkoutpage: CheckoutPage;

	test.beforeAll(async ({ browser, baseURL: string }) => {
		const context = await browser.newContext({});
		page = await context.newPage();
		homepage = new Homepage(page);
		cartpage = new CartPage(page);
		productpage = new ProductPage(page);
		loginsignuppage = new LoginSignupPage(page);
		signuppage = new SignupPage(page);
		checkoutpage = new CheckoutPage(page);
	});

	test.afterAll(async () => await page.close());

	// The following tests are stages of the flow devided mostly by different pages of an app
	test(`Homepage products section`, async ({}) => {
		await page.goto('/')
		await page.waitForLoadState('load');
		expect(homepage.thirdProduct).toBeVisible();
		await homepage.viewProductBtn.click();
    	await page.waitForURL('**/product_details/3'); 
	});

	test(`Product page`, async ({}) => {
    	expect(productpage.quantity).toBeVisible();
    	await productpage.quantity.fill(productpage.getRandomNumber());
		// to check getRandomNumber function
		// console.log(productpage.getRandomNumber());
		await productpage.addBtn.click();
		const response = await page.waitForResponse(response => response.url().includes('/add_to_cart/3?quantity=') && response.status() === 200);
		expect(response.ok()).toBeTruthy();
		expect(productpage.addedMsg).toBeVisible();
		expect(productpage.viewCartBtn).toHaveAttribute('href', '/view_cart');
		await productpage.viewCartBtn.click();
		await page.waitForURL('**/view_cart');
	});

	test(`Cart page`, async ({}) => {
    	await cartpage.proceedToCheckoutBtn.click();
		expect(cartpage.registerLoginBtn).toHaveAttribute('href', '/login');
		await cartpage.registerLoginBtn.click();
		await page.waitForURL('**/login'); 
	});

	test(`Login/Signup page`, async ({}) => {
    	await loginsignuppage.signupName.fill(faker.internet.userName());
    	await loginsignuppage.signupEmail.fill(faker.internet.email());
		await loginsignuppage.signupBtn.click();
		await page.waitForURL('**/signup'); 
	});

	test(`Signup page`, async ({}) => {
    	await signuppage.password.fill(faker.internet.password());
    	await signuppage.firstName.fill(faker.person.firstName());
    	await signuppage.lastName.fill(faker.person.lastName());
    	await signuppage.streetAddress.fill(faker.location.streetAddress());
		await signuppage.city.fill(faker.location.city());
		await signuppage.state.fill(faker.location.state());
		await signuppage.zipCode.fill(faker.location.zipCode());
		await signuppage.mobileNum.fill(faker.phone.number());
		await signuppage.createAccountBtn.click();
		await page.waitForURL('**/account_created');
		await signuppage.continueBtn.click();
	});

	test(`Cart/Checkout pages loggedin`, async ({}) => {
    	await homepage.cart.click();
		await page.waitForURL('**/view_cart');
		await cartpage.proceedToCheckoutBtn.click();
		await page.waitForURL('**/checkout');
		await checkoutpage.placeOrderBtn.click();
		await page.waitForURL('**/payment');
	});

	test(`Log out`, async ({}) => {
    	await homepage.logout.click();
		await page.waitForURL('**/login');
	});
	
});
