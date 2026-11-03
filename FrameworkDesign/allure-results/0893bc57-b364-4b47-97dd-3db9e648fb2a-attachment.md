# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D01LoginTest.spec.js >> Login for blank credtionals @smoke
- Location: tests\D01LoginTest.spec.js:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e15]
      - alert [ref=e19]:
        - button "Dismiss error" [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Username is required"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | //import {test, expect} from "@playwright/test"
  2  | import { LoginPage } from "../Pages/LoginPage";
  3  | import {test, expect} from "../Fixtures/BaseFixture.js";
  4  |  
  5  | test("Login with valid credtionals @smoke", async({page})=>{
  6  |     let loginPage = new LoginPage(page);
  7  | 
  8  |     await loginPage.goToApplication();
  9  |     await loginPage.directLogin("standard_user", "secret_sauce");
  10 | 
  11 |     let title = await loginPage.getTitle();
  12 |     console.log("Title: " + title);
  13 | 
  14 |     expect(page).toHaveURL(/inventory/);
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
> 27 |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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