import {test} from "@playwright/test"

test("Validate footer links on flipkart", async({page})=>{
    await page.goto("https://www.flipkart.com/");

    /*let allLinks = await page.locator("//footer[@class='wzLzb3']//following::a").all();
    console.log("Total links at footer: " + allLinks.length);
    
    for(let a of allLinks){
        console.log(await a.innerText());
    }*/

    let allLinks = await page.locator("//footer//following::a").allInnerTexts();
    console.log("Total links are: " + allLinks.length);
    for(let l of allLinks){
        console.log(l);
    }

    await page.waitForTimeout(2000);
})