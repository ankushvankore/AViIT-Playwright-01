import {test} from "@playwright/test"

test("Multiple controls via CssSelector", async ({page})=>{
    await page.goto("https://google.com");

    await page.getByTitle("Search").fill("Shriyana Patil");
    await page.waitForSelector("ul[jsname='bw4e9b']>li>div");

    let allOptions = await page.locator("ul[jsname='bw4e9b']>li>div").all();

    for(let op of allOptions){
        console.log(await op.innerText());
    }

    await page.waitForTimeout(2000);
})