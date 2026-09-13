import test from "@playwright/test";

test("Frame automation", async({page})=>{
    await page.goto("https://selectorshub.com/iframe-scenario/");

    //Handle 1st frame
    //frame1--> text box
    let frame1 = page.frameLocator("(//iframe[@id='pact1'])[1]");
    await frame1.locator("#inp_val").fill("Selenium WebDriver");

    //frame1-->frame2 --> text box
    let frame2 = frame1.frameLocator("(//iframe[@src='https://selectorshub.com/input-box/'])[1]");
    await frame2.locator("#jex").fill("Playwright");

    //frame1-->frame2-->frame3-->text box
    frame2.frameLocator("(//iframe[@src='https://selectorshub.com/input-box-copy/'])[1]").locator("#glaf").fill("Cypress");

    await page.waitForTimeout(4000);
})