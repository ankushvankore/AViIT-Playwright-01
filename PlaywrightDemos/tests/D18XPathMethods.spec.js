import {test} from "@playwright/test"

test("Understanding XPath methods", async ({page})=>{
    await page.goto("https://www.echotrak.com/Login.aspx?ReturnUrl=%2f");

    //Locates the control whose text in EchoTrak sign-in
    //text() - locats the control using the text on the control
    await page.locator("//h4[text()='EchoTrak sign-in']").highlight();
    //normalize-space() - will locate a control using text property of the control
    //but it ignores the white spaces before and after the text
    await page.locator("//a[normalize-space()='Need Login Assistance?']").highlight();


    await page.waitForTimeout(3000);
})

test("understand normalize-space()", async({page})=>{
    await page.goto("https://www.amazon.in/");

    //normalize-space() - will locate a control using text property of the control
    //but it ignores the white spaces before and after the text
    await page.locator("//span[normalize-space()='Account & Lists']").click();

    await page.waitForTimeout(5000);
})

test.only("understand contains()", async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    //contains() method can be used when the attribute value / text on control is dynamic
    await page.locator("(//input[contains(@name, 'name')])[position()=1]").fill("Bunty Nayak")
    //contains() – locates the control using any one attribute or text. 
    // This method especially used when the attribute or text is dynamic.
    await page.locator("//input[contains(@name, 'login')]").pressSequentially('buntynayak', {delay:100});
    await page.locator("(//*[contains(normalize-space(), '@rediffmail.com')])[8]").highlight();
    await page.waitForTimeout(2000);
})