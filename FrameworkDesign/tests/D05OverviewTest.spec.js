import test from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import { InventoryPage } from "../Pages/InventoryPage";
import { CartPage } from "../Pages/CartPage";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { OverviewPage } from "../Pages/OverviewPage";

let loginPage;
let invPage;
let cartPage;
let checkoutPage;
let overviewPage;

test("Overview test", async({page})=>{
    loginPage = new LoginPage(page);
    invPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    overviewPage = new OverviewPage(page);

    await loginPage.goToApplication();
    await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.addToCart("Sauce Labs Backpack");
    await invPage.goToCartPage();
    checkoutPage = await cartPage.checkout();

    overviewPage = await checkoutPage.doCheckout("Vibhavari", "Yadav", "416001");

    await overviewPage.getSummary();
    await overviewPage.completeCheckoutProcess();

    await page.waitForTimeout(2000);
})