import {test} from "../CustomFixtures/SwagLogin.js";

test("Login to Swag application", async({swagLogin})=>{
    let page = swagLogin;

    //await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("//div[text()='Sauce Labs Backpack']").click();

    await page.waitForTimeout(2000);
})