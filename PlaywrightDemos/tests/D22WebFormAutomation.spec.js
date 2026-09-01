import {test} from "@playwright/test"

test("Web form automation", async({page})=>{
    await page.goto("https://formy-project.herokuapp.com/form");

    let fName = page.locator("#first-name");
    console.log("Text box is Visible : " + await fName.isVisible());
    console.log("Text box is Editable: " + await fName.isEditable());
    console.log("Text box is Enable  : " + await fName.isEnabled());

    if(fName.isVisible && fName.isEditable && fName.isEnabled)
        fName.fill("Pooja");

    await page.locator("#last-name").fill("Dubay");
    await page.locator("#job-title").fill("Sr. Tester");
    
    //await page.locator("#radio-button-2").click();
    await page.locator("//input[@type='radio']").nth(1).click();

    await page.locator("//input[starts-with(@id, 'checkbox')]").nth(1).click();

    //Dropdown list
    let drpBox = page.locator("#select-menu");
    await drpBox.scrollIntoViewIfNeeded();
    await drpBox.selectOption("2-4");

    await page.locator("#datepicker").fill("09/01/2026");

    await page.getByText("Submit").click();

    await page.waitForTimeout(2000);
})