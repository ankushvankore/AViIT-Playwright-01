import {test} from "@playwright/test"

test("Locating multiple controls using CssSelector", async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    //let allLinks = await page.locator("aside[id='column-right']>div>a").all();
    //let allLinks = await page.locator("aside[id='column-right'] div a").all();
    let allLinks = await page.locator("aside[id='column-right'] a").all();
    console.log("Total links: " + allLinks.length);

    for(let link of allLinks){
        //await link.highlight();
        console.log(await link.innerText() + ' href=> ' + await link.getAttribute('href'));
        //await page.waitForTimeout(500);
    }

    let addressBook = page.locator("aside[id='column-right']>div>a:nth-child(5)");
    console.log("5th Link: " + await addressBook.innerText());
    await addressBook.highlight();
    

    await page.waitForTimeout(2000);    
})