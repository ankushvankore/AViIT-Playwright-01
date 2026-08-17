import {test} from "@playwright/test"

test("Understand browser fixture", async ({browser})=>{
    let context1 = await browser.newContext();
    let page = await context1.newPage();

    await page.goto("https://www.google.com");

    await page.waitForTimeout(2000);

    let page2 = await context1.newPage();
    await page.goto("https://playwright.dev/");

    await page.waitForTimeout(2000);
})

test("Browser fixture in other way", async({browser})=>{
    let page = await browser.newPage();
    await page.goto("https://playwright.dev/");

    await page.waitForTimeout(2000);
})

test("Context fixture", async ({context})=>{
    let page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.waitForTimeout(2000);
})

test.only("Understand page fixture", async({page})=>{
    await page.goto("https://www.amazon.in")
    console.log("Title: " + await page.title());
})



