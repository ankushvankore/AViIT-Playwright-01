//Import the playwright library
import {test} from "@playwright/test";

/*
Fixtures in Playwright (Environment details)
1. browser: will execute script on original browser instance (Chrome)
2. browser context: multiple browsers for multiple users
3. page: for single tab / browser 
4. request: API testing
*/

//Test starts here
test("Launching Google", async({page})=>{
    await page.goto("https://www.google.com");
    
    let appTitle = await page.title();
    console.log("Title: " + appTitle);
    
    let pageUrl = page.url();
    console.log("URL: " + pageUrl);
    
    await page.waitForTimeout(2000);
})