import {test, expect} from "@playwright/test"
import testData from "./TestData/JSONData.json"

for(let td of testData){
    test("Data driven testing using JSON" + td.ID, async({page})=>{
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