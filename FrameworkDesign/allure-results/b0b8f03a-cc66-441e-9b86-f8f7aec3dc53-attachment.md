# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: D01LoginTest.spec.js >> Login for blank credtionals
- Location: tests\D01LoginTest.spec.js:19:5

# Error details

```
TypeError: (0 , _BaseFixture.expect) is not a function
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
  5  | test("Login with valid credtionals", async({page})=>{
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
  19 | test("Login for blank credtionals", async({page})=>{
  20 |     let loginPage = new LoginPage(page);
  21 | 
  22 |     await loginPage.openApplication("https://www.saucedemo.com/");
  23 |     await loginPage.directLogin("", "");
  24 |     let message = await loginPage.getErrorMessage();
> 25 |     expect(message).toContain("Epic sadface: Username is required");
     |           ^ TypeError: (0 , _BaseFixture.expect) is not a function
  26 | 
  27 |     await page.waitForTimeout(2000);
  28 | })
  29 | 
  30 | //HTML Report - https://github.com/nhiendohao/playwright-html
  31 | 
  32 | //Login using custom fixture
  33 | test("Login test using Login fixture", async({page, loginFixture})=>{
  34 |     console.log("Trying to login using fixture");
  35 | 
  36 |     await page.waitForTimeout(2000);    
  37 | })
  38 | 
  39 | 
```