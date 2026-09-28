/*
Data Driven Testing-
Executing single test with multiple data set for multiple times

Ways:
1. Using Array
2. Using JSON Object
3. Using CSV file
4. Using .xlsx (Excel) file
*/

import {test, expect} from "@playwright/test"

let testData = [
    {'ID': 'TC01', 'userName': 'standard_user', 'password': 'secret_sauce'},
    {'ID': 'TC02', 'userName': 'performance_glitch_user', 'password': 'secret_sauce'},
    {'ID': 'TC03', 'userName': 'visual_user', 'password': 'secret_sauce'},
]

for(let td of testData){
    test("Data driven testing using Array" + td.ID, async({page})=>{
        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill(td.userName);
        await page.locator("#password").fill(td.password);
        await page.locator("#login-button").click();

        await expect(page).toHaveURL(/inventory/);

        await page.locator("#react-burger-menu-btn").click();
        await page.locator("#logout_sidebar_link").click();

        await page.waitForTimeout(2000);
    })
}