import {test} from "@playwright/test"

test("Test on mobile browser", async({page})=>{
    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(2000);
})