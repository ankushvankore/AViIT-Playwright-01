import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { InventoryPage } from "../Pages/InventoryPage"
import { CartPage } from "../Pages/CartPage"

let loginPage;
let invPage;
let cartPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    invPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goToApplication();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.addToCart("Sauce Labs Backpack");
})

test("Get product Name", async({page})=>{
    cartPage = await invPage.goToCartPage();
    let pName = await cartPage.getProductName();

    console.log("Product in cart: " + pName);
    
    await page.waitForTimeout(2000);
})

test("Remove product from cart", async({page})=>{
    cartPage = await invPage.goToCartPage();
    let pName = await cartPage.removeFromCart();

    console.log("Removed product from cart: " + pName);
    
    await page.waitForTimeout(2000);
})

test("Continue shopping test", async({page})=>{
    cartPage = await invPage.goToCartPage();
    
    await cartPage.continueShopping();
    await invPage.addToCart("Sauce Labs Bike Light");

    await invPage.goToCartPage();

    await page.waitForTimeout(4000);
})

test("Checkout test", async({page})=>{
    cartPage = await invPage.goToCartPage();
    cartPage.checkout();

    await page.waitForTimeout(4000);
})