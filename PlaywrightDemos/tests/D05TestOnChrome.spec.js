import {chromium, test} from "@playwright/test"

test("Test on Chrome", async({})=>{
    let browser = await chromium.launch({headless: false, channel:'chrome'});
    let context1 = await browser.newContext();
    let page = await context1.newPage();

    await page.goto("https://www.amazon.in");

    await page.waitForTimeout(2000);
})