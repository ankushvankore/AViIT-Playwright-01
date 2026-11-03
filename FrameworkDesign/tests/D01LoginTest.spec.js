//import {test, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import {test, expect} from "../Fixtures/BaseFixture.js";
 
test("Login with valid credtionals @smoke", async({page})=>{
    let loginPage = new LoginPage(page);

    await loginPage.goToApplication();
    await loginPage.directLogin("standard_user", "secret_sauce");

    let title = await loginPage.getTitle();
    console.log("Title: " + title);

    expect(page).toHaveURL(/inventory/);
    
    await page.waitForTimeout(2000);
})

test("Login for blank credtionals @smoke", async({page})=>{
    let loginPage = new LoginPage(page);

    await loginPage.openApplication("https://www.saucedemo.com/");
    await loginPage.directLogin("", "");
    let message = await loginPage.getErrorMessage();
    expect(message).toContain("Epic sadface: Username is required");

    await page.waitForTimeout(2000);
})

//HTML Report - https://github.com/nhiendohao/playwright-html

//Login using custom fixture
test("Login test using Login fixture @sanity", async({page, loginFixture})=>{
    console.log("Trying to login using fixture");

    await page.waitForTimeout(2000);    
})

/*
Running Commands
You can add the shortcuts for your playwright test commands

add following shortcuts (as per need) in package.json file

"scripts": {
    "allTests": "npx playwright test --headed",
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

test("Login using JSON file fixture @sanity @smoke", async({page, loginWithJSON})=>{
    console.log("Login using JSON File");
    
    await page.waitForTimeout(2000);
})

test("Login using CSV file fixture @fixtureTest", async({page, loginWithCSV})=>{
    console.log("Login using CSV file...");
    
    await page.waitForTimeout(2000);
})

/*
Tags in Playwright
It is like the tags in Cucumber
Tags allows to execute or skip single or multiple tests
You can apply multiple tags to every test
Every tag starts with @
Tags needs to be specified inside the title only
for execution call npx playwright test .\\tests\\D01LoginTest.spec.js --headed --grep "@sanity"
for multiple tests --grep "@smoke|@sanity"
for skip the single test --grep-invert "@smoke"
*/

/*
Multi environment tests
You can execute your tests on multiple environments
for this copy the entire code from playwright.config.js file
create a new file like playwright.congig.dev.js
paste the code and change the enveronment setup like browser etc

while execution call the commamd as
npx playwright test .\\tests\\D01LoginTest.spec.js --headed  --config=playwright.config.dev.js

even you can add the shortcut for this inside package.json file
*/
