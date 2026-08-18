import {chromium, test, webkit} from "@playwright/test"

test("Test on MS Edge", async({})=>{
    let browser = await chromium.launch({headless:false, channel:'msedge'})
    let context1 = await browser.newContext();
    let page = await context1.newPage();

    await page.goto("https://www.saucedemo.com/")
    console.log("Title: " + await page.title());
    

    await page.waitForTimeout(5000);
})