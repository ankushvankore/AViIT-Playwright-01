import {test} from "@playwright/test"

test("Identifying single control via CssSelector", async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");

    let link = page.locator("aside a:nth-child(7)");
    await link.highlight();

    console.log("Text on this link: " + await link.innerText());
    
    await page.waitForTimeout(2000);
})