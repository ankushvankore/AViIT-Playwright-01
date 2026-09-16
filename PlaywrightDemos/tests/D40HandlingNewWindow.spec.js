import test from "@playwright/test"

test("Handling new window", async({page})=>{
    await page.goto("https://www.naukri.com/");

    let [newTab] = await Promise.all([
        page.waitForEvent('popup'),

        //Click on Remote button on the page
        page.locator("//span[@title='Remote']").click()
    ])
    await page.waitForTimeout(5000);
    console.log("Title of new page: " + await newTab.title());
    await newTab.locator("(//i[@class='ni-icon-unchecked'])[1]").click();
    await page.waitForTimeout(3000);
    await newTab.close();

    await page.locator("//a[text()='Login']").click();

    await page.waitForTimeout(2000);
})