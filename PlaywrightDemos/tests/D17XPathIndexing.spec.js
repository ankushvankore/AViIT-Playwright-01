import {expect, test} from "@playwright/test"

test("Multiple controls via CssSelector", async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    await page.locator("//input[@id='input-firstname' and @placeholder='First Name']").fill("Vibhavari");
    await page.locator("//input[@name='lastname' and @class='form-control']").fill("Yadav");

    //XPath Indexing
    await page.locator("(//input[@class='form-control'])[3]").fill("vibhavari4@gmail.com");

    //XPath indexing with position() function
    await page.locator("(//input[@class='form-control'])[position()=4]").fill("9898989898");
    await page.locator("(//input[@class='form-control'])[position()=5]").fill("vibha@123");
    await page.locator("(//input[@class='form-control'])[position()=6]").fill("vibha@123");

    //If the locator() method returns multiple controls and you are expecting the indexing
    //for these controls then Playwright provides 3 methods
    //first(), last(), nth()
    //await page.locator("//input[@type='radio']").last().click();
    //Will select No radio button
    await page.locator("//input[@type='radio']").nth(1).click();

    await page.locator("//input[@type='checkbox']").click();
    await page.locator("//input[@value='Continue']").click();

    await page.waitForSelector("//h1");
    //let message = page.locator("//h1").last();
    //await expect(message).toContainText("Your Account Has Been Created!");
    let textMessage = await page.locator("//h1").last().innerText();
    await expect(textMessage).toContain("Your Account Has Been Created!");

    await page.waitForTimeout(2000);
})