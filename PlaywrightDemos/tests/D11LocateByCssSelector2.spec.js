import {test} from "@playwright/test"

test("Locate by CssSelector", async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("test@gmail.com");
    await page.locator("#password").fill("test@123");
    //await page.locator("#login-button").click();
    //await page.locator("input[class='submit-button btn_action']").click();
    //await page.locator(".submit-button").click();
    await page.locator(".submit-button.btn_action").click();

/*

    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    await page.locator("input[name^='name']").fill("Amita");
    await page.locator("input[id^='login']").fill("amita");
    await page.locator("input[placeholder$='r password']").fill("amita@123");
    await page.locator("input[placeholder*='type']").fill("amita@123");
*/
    await page.waitForTimeout(2000);
})