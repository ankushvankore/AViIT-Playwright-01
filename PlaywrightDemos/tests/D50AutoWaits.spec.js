import {test, expect} from "@playwright/test"

/*
AutoWaits in playwright
1. Page level wait
2. Event level wait
3. Control / element level wait
*/

test("Understanding Auto Waits in Playwright", async({page})=>{
    //Page level wait
    //test.setTimeout(10000);
    //page.setDefaultTimeout(10000);

    await page.goto("https://automationplayground.com/crm/login.html");

    let mailId = page.locator("#email-id");
    await mailId.fill("test@gmail.com");

    //let password = page.locator("#password123");
    //await password.fill("123");
    
    //Element level wait

    let password = page.locator("#password");
    await password.waitFor({timeout:5000});
    password.fill("password");

    await page.locator("#submit-id").click();

    await page.waitForURL(/customers/); //Wait for 30 seconds
    await expect(page).toHaveURL(/customers/);

    //Event level wait

    //await page.waitForURL(/products/);        //Will wait for 30 seconds by default
    await page.waitForURL(/products/, {timeout:2000});  //Will wait only for 2 seconds

    await page.waitForTimeout(2000);
})