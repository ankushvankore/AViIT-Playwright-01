import test from "@playwright/test"

test("Handling multiple windows", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Title of home page: " + await page.title());
    
    let [linkedPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href, 'link')]").click()
    ])

    console.log("Title of new page: " + await linkedPage.title());
    await page.waitForTimeout(2000);

    await page.bringToFront();
    await page.getByPlaceholder("Username").fill("admin");
    
    let [twiterPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[contains(@href, 'twi')]").click()
    ])

    console.log("Title of twitter page: " + await twiterPage.title());
    

    await page.waitForTimeout(5000);
})

test.only("Handling multiple windows using browser context", async({browser})=>{
    let context1 = await browser.newContext();
    let page = await context1.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let homePageTitle = await page.title()
    console.log("Title of home page: " + homePageTitle);

    await page.locator("//a[contains(@href, 'link')]").click();
    await page.locator("//a[contains(@href, 'facebook')]").click();
    await page.locator("//a[contains(@href, 'twitter')]").click();
    await page.locator("//a[contains(@href, 'youtube')]").click();

    await page.waitForTimeout(5000);

    let allPages = context1.pages();
    //will return all the tabs/windows those are open
    console.log("Total open pages: " + allPages.length);    

    for(let pg of allPages){
        console.log("Title: " + await pg.title());
        if(await pg.title() != homePageTitle){
            await page.waitForTimeout(1000);
            pg.close();
        }
    }
    
    await page.waitForTimeout(5000);
})