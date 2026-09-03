import test from "@playwright/test";


test("Refresh the page", async({page})=>{
    await page.goto("https://www.letskodeit.com/practice");

    //Click the button to hide the text box
    await page.locator("#hide-textbox").click();

    await page.evaluate(()=>{
        document.querySelector("input[id='displayed-text']").value='Hello All!!!';
    })

    await page.waitForTimeout(1000);
    await page.locator("#show-textbox").click();

    await page.waitForTimeout(2000);
})