import {expect, test} from "@playwright/test"

test("Undestanding Navigation Methods", async({page})=>{
    await page.goto("https://www.google.com");
    await page.waitForTimeout(2000);

    await page.goto("https://www.facebook.com");
    await page.waitForTimeout(2000);

    await page.goBack();  //Will navigate one level back 
    await expect(page).toHaveURL(/google/);
    await page.waitForTimeout(2000);

    await page.goForward(); //Will navigate one level forward
    await expect(page).toHaveURL(/facebook/);

    await page.reload();    //Will refresh the page

    await page.waitForTimeout(2000);
})