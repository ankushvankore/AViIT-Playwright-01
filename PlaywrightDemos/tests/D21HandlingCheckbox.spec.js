import {expect, test} from "@playwright/test"

test("Handling checkbox", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let mondayCB = page.locator("#monday");
    await mondayCB.scrollIntoViewIfNeeded();

    await expect(mondayCB).not.toBeChecked();
    //await mondayCB.click();
    await mondayCB.check();

    await page.waitForTimeout(2000);

    await expect(mondayCB).toBeChecked();
    //await mondayCB.click();
    await mondayCB.uncheck();

    await page.waitForTimeout(2000);
})