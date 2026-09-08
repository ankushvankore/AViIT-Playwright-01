import test from "@playwright/test"

test("Handling Dynamic WebTable", async({page})=>{
    /*
    Operation
    1. Show total no of pages
    2. Show total no of rows on each page
    3. Show total no of rows from all pages
    4. Select all checkboxes
    5. Select any specific checkbox
    6. Navigate throght all the pages
    */
    
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    
    await page.getByText("Pagination Web Table").scrollIntoViewIfNeeded();

    console.log("--------------- Find total no of pages -----------");
    let pages = await page.locator("#pagination a").all();
    console.log("Total no of pages: " + pages.length);

    console.log("------------- Navigate through all pages -----------------");
    let totalRows = 0;
    for(let p of pages){
        await p.click();
        await page.waitForTimeout(1000);

        //Find no of rows on this page
        let rows = await page.locator("//table[@id='productTable']//tbody//tr").all();
        console.log("Total no of rows on page no: " + await p.innerText()+ ": " + rows.length);
        totalRows = totalRows + rows.length;

        //Select the checkboxes on each page
        let allCheckBoxes = await page.locator("//table[@id='productTable']//tbody//tr//td[4]//input").all();
        for(let c of allCheckBoxes){
            await c.check();
        }
    }    
    console.log("Total no of rows: " + totalRows);
    
    //Select any specific checkbox
    for(let p of pages){
        await p.click();
        
        let rowIndex = 1;
        let productName = await page.locator("//table[@id='productTable']//tbody//tr//td[2]").allInnerTexts();
        for(let pn of productName){
            if(pn.includes("Gaming")){
                await page.locator("//table[@id='productTable']//tbody//tr["+rowIndex+"]//td[4]/input").click();
                break;
            }
            rowIndex++;
        }
    await page.waitForTimeout(2000);
    }

    await page.waitForTimeout(2000);
})