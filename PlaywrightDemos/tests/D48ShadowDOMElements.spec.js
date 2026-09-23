import test from "@playwright/test"

test("Handling Shadow DOM Elements", async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");

    await page.locator("#kils").scrollIntoViewIfNeeded();
    await page.locator("#kils").fill("Shri Charani");

    await page.locator("#pizza").fill("Mix Veg Pizza");

    await page.waitForTimeout(2000);
})

test.only("Handling Shodow DOM inside frame", async({page})=>{
    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");

    let frame1 = page.frameLocator("#pact1");
    await frame1.locator("#jex").fill("Smriti Mandhana")

    await page.waitForTimeout(2000);
})