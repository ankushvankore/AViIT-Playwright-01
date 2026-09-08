import test from "@playwright/test"

test("Handling Calender", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    await page.locator("#datepicker").click();

    /*for(let i = 1; i <= 7; i++){
        await page.locator(".ui-icon-circle-triangle-e").click();
    }
    await page.locator("//a[text()=1 and contains(@class, 'ui-state-default')]").click();
    */

    let day = '1';
    let month = 'Dec';

    while(!(await page.locator(".ui-datepicker-month").innerText()).includes(month)){
        await page.locator(".ui-icon-circle-triangle-e").click();
    }
    await page.locator("//a[text()='"+day+"' and contains(@class, 'ui-state-default')]").click();

    await page.waitForTimeout(5000);
})