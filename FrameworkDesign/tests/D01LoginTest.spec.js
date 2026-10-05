import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";

test("Login with valid credtionals", async({page})=>{
    let loginPage = new LoginPage(page);

    await loginPage.goToApplication();
    await loginPage.directLogin("standard_user", "secret_sauce");

    let title = await loginPage.getTitle();
    console.log("Title: " + title);

    expect(page).toHaveURL(/inventory/);
    
    await page.waitForTimeout(2000);
})

test("Login for blank credtionals", async({page})=>{
    let loginPage = new LoginPage(page);

    await loginPage.openApplication("https://www.saucedemo.com/");
    await loginPage.directLogin("", "");
    let message = await loginPage.getErrorMessage();
    expect(message).toContain("Epic sadface: Username is required");

    await page.waitForTimeout(2000);
})