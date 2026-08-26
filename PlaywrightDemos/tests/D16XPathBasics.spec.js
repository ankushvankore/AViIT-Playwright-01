import {expect, test} from "@playwright/test"

test("Understanding XPath Basics", async ({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator("//html//body//div//div//div//div//div//div//form//div[1]//input").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();

    //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveURL(/inventory/);      //Partial match

    //Logout
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    //await page.locator("//a[@id='logout_sidebar_link']").click();
    await page.getByText('Logout').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/");

    await page.waitForTimeout(2000);
})