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

test.only("Handling multiple checkbox", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    
    let mondayCB = page.locator("#monday");
    await mondayCB.scrollIntoViewIfNeeded();

    let allCheckBoxes = await page.locator("//input[@type='checkbox' and @class='form-check-input']").all();

    //allCheckBoxes[0].click();
    //allCheckBoxes[allCheckBoxes.length-1].click();
    /*
    first() - Always returns the 1st control
    last() - Returns last element
    nth() - Returns locator to the n-th matching element. It's zero based, nth(0) 
    */
    let cboxes = await page.locator("//input[@type='checkbox' and @class='form-check-input']");
    await cboxes.first().click();
    await cboxes.last().check();
    await cboxes.nth(4).check();

    // for(let cb of allCheckBoxes)
    //     await cb.click();

    await page.waitForTimeout(5000);
})