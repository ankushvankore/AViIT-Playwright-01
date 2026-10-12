//import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import {test, expect} from "../Fixtures/BaseFixture.js";
 
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

//HTML Report - https://github.com/nhiendohao/playwright-html

//Login using custom fixture
test("Login test using Login fixture", async({page, loginFixture})=>{
    console.log("Trying to login using fixture");

    await page.waitForTimeout(2000);    
})

/*
Running Commands
You can add the shortcuts for your playwright test commands

add following shortcuts (as per need) in package.json file

"scripts": {
    "test": "npx playwright test --headed",
    "test:LoginPage" : "npx playwright test ./tests/D01LoginTest.spec.js --headed",
    "allure:generate" : "npx allure generate allure-results --clean -o allure-report",
    "allure:showReport" : "npx allure open allure-report"
  },

While execution call the command like as follows
npm run test
npm run test:LoginPage
npm run allure:generate
npm run allure:showReport
*/

