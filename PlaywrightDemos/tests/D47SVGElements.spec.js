import test from "@playwright/test"

/*
SVG controls
SVG stands for Scalar Vector Graph
To handle / locate such elements only XPath can be used
Syntax:
//*[local-name()='svg' and @attribute='value']
*/

test("Handling SVG Elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    
    let svg1 = page.locator("(//*[local-name()='svg' and @width='30'])[1]");
    await svg1.scrollIntoViewIfNeeded();
    await svg1.highlight();
    await page.waitForTimeout(2000);
    await svg1.hideHighlight();

    let svg2 = page.locator("(//*[local-name()='svg' and @width='30'])[2]");
    await svg2.scrollIntoViewIfNeeded();
    await svg2.highlight();
    await page.waitForTimeout(2000);
    await svg2.hideHighlight();

    let svg3 = page.locator("(//*[local-name()='svg' and @width='30'])[3]");
    await svg3.scrollIntoViewIfNeeded();
    await svg3.highlight();
    await page.waitForTimeout(2000);
    await svg3.hideHighlight();

    await page.waitForTimeout(2000);
})