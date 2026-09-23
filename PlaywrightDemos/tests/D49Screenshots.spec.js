import {test} from "@playwright/test"

test("Capturing Screenshot", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    //Will capture the screenshot of the part of the page which is 
    //visible in browser
    await page.screenshot({path: "./Screenshots/AutomationTest.jpeg"});

    //Will capture the full page screenshot
    await page.screenshot({path: "./Screenshots/FullPageSS.jpeg", fullPage: true});

    //Screenshot of specific control
    //Will automatically scroll till the control
    await page.locator("#taskTable").screenshot({path: "./Screenshots/TaskTable.jpeg"});

    let sundayCB = page.locator("#sunday");
    await sundayCB.screenshot({path: "./Screenshots/BeforeCB.jpeg"});

    sundayCB.click();
    await sundayCB.screenshot({path: "./Screenshots/AfterCB.jpeg"});

    await page.waitForTimeout(2000);
})