import {test} from "@playwright/test"

test("Handling non select based dropdown list", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");

    let drpBox = page.locator("(//div[@class='css-1wy0on6'])[1]");
    await drpBox.scrollIntoViewIfNeeded();
    await drpBox.click();

    await page.locator("#react-select-3-option-1").click();

    await page.waitForTimeout(5000);
})