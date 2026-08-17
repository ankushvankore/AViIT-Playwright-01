import {expect, test} from "@playwright/test"

/*
Assertion is the validation for your test case
Types:
1. Hard Assertion
2. Soft Assertion
*/

test("Understanding Basic Assertion", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    let title = await page.title();

    console.log("Title: " + title);
    await expect(page).toHaveTitle("wag Labs");
    //Partial title assertion
    await expect(page).toHaveTitle(/Swag/);

    //Validation against variable title
    await expect(title).toEqual("Swag Labs");
    
    //Validation on URL
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await page.waitForTimeout(2000);
})