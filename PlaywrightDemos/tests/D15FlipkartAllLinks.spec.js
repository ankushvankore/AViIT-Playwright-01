import {test} from "@playwright/test"

test("Multiple controls via CssSelector", async ({page})=>{
    await page.goto("https://www.flipkart.com/");

    let allLinks = await page.locator("a[href]").all();
    console.log("Total Links: " + allLinks.length);

    for(let link of allLinks){
        console.log(await link.innerText());
    }

    let allImages = await page.locator("img[alt]").all();
    console.log("Total Images: " + allImages.length);    
    
    await page.waitForTimeout(2000);
})