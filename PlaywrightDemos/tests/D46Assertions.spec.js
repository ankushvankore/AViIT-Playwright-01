import {test, expect} from "@playwright/test"


/*
Assertion - is the vay of validation
Types:
    1. Hard Assertion - Will throw the error and stop the execution
    2. Soft Assertion - Will throw the error but will continue with execution
*/

test("Understanding Hard Assertion", async({page})=>{
    await page.goto("https://jqueryui.com/slider/");

    await expect(page).toHaveTitle("Slider | jQuery UI");
    console.log("Title match!!! Test case pass...");

    //Partial match
    await expect(page).toHaveTitle(/jQuery/);
    console.log("Partial Title match!!! Test case pass...");

    await expect(page).toHaveURL("https://jqueryui.com/slider/");
    console.log("URL match!!! Test case pass...");

    let textBox = page.getByPlaceholder("Search");

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    await expect(textBox).toBeEditable();

    if(await textBox.isVisible() &&  await textBox.isEnabled() && await textBox.isEditable()){
        textBox.fill("Searching something...")
    }

    await expect(textBox).toHaveValue("Searching something...");
   // await expect(textBox).toContainText('Searching something...');

    let text = await textBox.inputValue();
    expect (text).toContain("Searching something...")

    //Validation on Attribute of a control
    await expect(textBox).toHaveAttribute('aria-label', 'Search jQuery UI');
    
    //Validation on Css Values of control
    //For Css values check the Computed tab in DevTool
    await expect(textBox).toHaveCSS('border-top-style', 'solid');

    let allLinks = await page.locator("//div[@id='sidebar']//aside//ul//li//a").all();
    expect(allLinks).toHaveLength(37);

    await page.waitForTimeout(2000);
})