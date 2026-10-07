import {test} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { InventoryPage } from "../Pages/InventoryPage"

/*
test("Get product count test", async({page})=>{
    let loginPage = new LoginPage(page);
    let invPage = new InventoryPage(page);

    loginPage.goToApplication();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    let totalItems = await invPage.getTotalNumberOfProducts();
    console.log("Total products: " + totalItems);    

    await page.waitForTimeout(2000);
})

test("Get the product details", async({page})=>{
    let loginPage = new LoginPage(page);
    let invPage = new InventoryPage(page);

    loginPage.goToApplication();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.getAllProductDetails();

    await page.waitForTimeout(2000);
})

test("Test for add item to cart", async({page})=>{
    let loginPage = new LoginPage(page);
    let invPage = new InventoryPage(page);

    loginPage.goToApplication();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.getAllProductDetails();

    await invPage.addToCart("Sauce Labs Bolt T-Shirt");   

    await page.waitForTimeout(2000);
})
test("Open Cart Page", async({page})=>{
    let loginPage = new LoginPage(page);
    let invPage = new InventoryPage(page);

    loginPage.goToApplication();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
    await invPage.getAllProductDetails();

    await invPage.addToCart("Sauce Labs Bolt T-Shirt");   
    await invPage.goToCartPage();

    await page.waitForTimeout(5000);
})
*/

let loginPage;
let invPage;

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    invPage = new InventoryPage(page);

    loginPage.goToApplication();
    invPage = await loginPage.directLogin("standard_user", "secret_sauce");
})

test("Get product count test", async({page})=>{
    let totalItems = await invPage.getTotalNumberOfProducts();
    console.log("Total products: " + totalItems);    

    await page.waitForTimeout(2000);
})

test("Get the product details", async({page})=>{    
    await invPage.getAllProductDetails();

    await page.waitForTimeout(2000);
})

test("Test for add item to cart", async({page})=>{    
    await invPage.getAllProductDetails();

    await invPage.addToCart("Sauce Labs Bolt T-Shirt");   

    await page.waitForTimeout(2000);
})
test("Open Cart Page", async({page})=>{
    await invPage.getAllProductDetails();

    await invPage.addToCart("Sauce Labs Bolt T-Shirt");   
    await invPage.goToCartPage();

    await page.waitForTimeout(5000);
})