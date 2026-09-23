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

test("Checkbox Assertion", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    let sundayCB = page.locator("#sunday");
    await sundayCB.click();

    await expect(sundayCB).toBeChecked();

    let wednesdayCB = page.locator("#wednesday");
    await expect(wednesdayCB).not.toBeChecked();
    //await expect(wednesdayCB).toBeChecked();

    await page.waitForTimeout(2000);
})

test.only("Soft Assertion", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await expect.soft(page).toHaveURL("testautomationpractice.blogspot.com/?m=1");
    console.log("Assertion done...");

    let sundayCB = page.locator("#sunday");
    await sundayCB.click();

    await expect.soft(sundayCB).not.toBeChecked();

    await expect(page).toHaveScreenshot();

    /*
    First time screenshot will be captured and it will be stored and that is the reason
    test case will be fail. 
    Second time when you will execute the same test case, this time Playwright will
    capture the screenshot and it will be compared with earlier one
    */

    await page.waitForTimeout(2000);    
})