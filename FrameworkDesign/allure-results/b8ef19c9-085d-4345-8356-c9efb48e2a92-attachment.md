# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D01LoginTest.spec.js >> Login with valid credtionals @smoke
- Location: tests\D01LoginTest.spec.js:5:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"
  - Test ended.

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": standard_user123
    - textbox "Password": secret_sauce123
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | //import {test, expect} from "@playwright/test"
  2  | import { LoginPage } from "../Pages/LoginPage";
  3  | import {test, expect} from "../Fixtures/BaseFixture.js";
  4  |  
  5  | test.only("Login with valid credtionals @smoke", async({page})=>{
  6  |     let loginPage = new LoginPage(page);
  7  | 
  8  |     await loginPage.goToApplication();
  9  |     await loginPage.directLogin("standard_user123", "secret_sauce123");
  10 | 
  11 |     let title = await loginPage.getTitle();
  12 |     console.log("Title: " + title);
  13 | 
> 14 |     expect(page).toHaveURL(/inventory/);
     |                  ^ Error: expect(page).toHaveURL(expected) failed
  15 |     
  16 |     await page.waitForTimeout(2000);
  17 | })
  18 | 
  19 | test("Login for blank credtionals @smoke", async({page})=>{
  20 |     let loginPage = new LoginPage(page);
  21 | 
  22 |     await loginPage.openApplication("https://www.saucedemo.com/");
  23 |     await loginPage.directLogin("", "");
  24 |     let message = await loginPage.getErrorMessage();
  25 |     expect(message).toContain("Epic sadface: Username is required");
  26 | 
  27 |     await page.waitForTimeout(2000);
  28 | })
  29 | 
  30 | //HTML Report - https://github.com/nhiendohao/playwright-html
  31 | 
  32 | //Login using custom fixture
  33 | test("Login test using Login fixture @sanity", async({page, loginFixture})=>{
  34 |     console.log("Trying to login using fixture");
  35 | 
  36 |     await page.waitForTimeout(2000);    
  37 | })
  38 | 
  39 | /*
  40 | Running Commands
  41 | You can add the shortcuts for your playwright test commands
  42 | 
  43 | add following shortcuts (as per need) in package.json file
  44 | 
  45 | "scripts": {
  46 |     "allTests": "npx playwright test --headed",
  47 |     "test:LoginPage" : "npx playwright test ./tests/D01LoginTest.spec.js --headed",
  48 |     "allure:generate" : "npx allure generate allure-results --clean -o allure-report",
  49 |     "allure:showReport" : "npx allure open allure-report"
  50 |   },
  51 | 
  52 | While execution call the command like as follows
  53 | npm run test
  54 | npm run test:LoginPage
  55 | npm run allure:generate
  56 | npm run allure:showReport
  57 | */
  58 | 
  59 | test("Login using JSON file fixture @sanity @smoke", async({page, loginWithJSON})=>{
  60 |     console.log("Login using JSON File");
  61 |     
  62 |     await page.waitForTimeout(2000);
  63 | })
  64 | 
  65 | test("Login using CSV file fixture @fixtureTest", async({page, loginWithCSV})=>{
  66 |     console.log("Login using CSV file...");
  67 |     
  68 |     await page.waitForTimeout(2000);
  69 | })
  70 | 
  71 | /*
  72 | Tags in Playwright
  73 | It is like the tags in Cucumber
  74 | Tags allows to execute or skip single or multiple tests
  75 | You can apply multiple tags to every test
  76 | Every tag starts with @
  77 | Tags needs to be specified inside the title only
  78 | for execution call npx playwright test .\\tests\\D01LoginTest.spec.js --headed --grep "@sanity"
  79 | for multiple tests --grep "@smoke|@sanity"
  80 | for skip the single test --grep-invert "@smoke"
  81 | */
  82 | 
```