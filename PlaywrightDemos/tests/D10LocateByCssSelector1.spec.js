import {test} from "@playwright/test"

test("Locating control using cssSelector", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("input[placeholder='Enter Name']").fill("Rishi Mishra");
    await page.locator("input[class='form-control'][id='email']").fill("rishi@gmail.com");
    await page.locator("input[id='phone']").fill("9898989898");
    await page.locator("textarea#textarea").fill("Indore");

    let maleRadio = page.locator("#male");
    await maleRadio.scrollIntoViewIfNeeded();
    maleRadio.click();
    await page.locator("#monday").click();

    await page.waitForTimeout(2000);
})