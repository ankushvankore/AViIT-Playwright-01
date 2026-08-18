import { expect, test } from "@playwright/test";

test("Built-in Locators - getByRole", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    let signInLink = page.getByRole("link", {name:'Sign In'});//name-Innertext
    await signInLink.click();

    await expect(page).toHaveTitle(/Login/);
    await expect(page).toHaveURL(/login/)

    await page.waitForTimeout(2000);
})

test.only("Built in locators - getByText", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    let signInLink = page.getByText("Sign In");
    await signInLink.click();

    await expect(page).toHaveURL(/login/);

    await page.waitForTimeout(2000);
})