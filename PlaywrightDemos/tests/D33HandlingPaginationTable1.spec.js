import test from "@playwright/test"

test("Handling Dynamic WebTable", async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");

    let nextButton = page.locator(".next");
    let pages = 1;
    while(await nextButton.isEnabled()){
        await nextButton.click();
        pages++;
        await page.waitForTimeout(500);

        let rowIndex = 1;
        let allRows = await page.locator("//tbody[@class='row-striping row-hover']//tr//td[5]").all();
        for(let r of allRows){
            if((await r.innerText()).includes("Ukraine"))
            {
                await page.locator("//tbody[@class='row-striping row-hover']//tr["+rowIndex+"]//td[5]").highlight();
                await page.locator("//tbody[@class='row-striping row-hover']//tr["+rowIndex+"]//td[1]//input").click();
                await page.waitForTimeout(2000);
                await page.locator("//tbody[@class='row-striping row-hover']//tr["+rowIndex+"]//td[5]").hideHighlight();
                break;
            }
            rowIndex++;
        }
    }
    console.log("Total pages: " + pages);
    

    await page.waitForTimeout(2000);
})