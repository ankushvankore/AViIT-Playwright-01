import test from "@playwright/test"

test("Handling Static WebTable", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    await page.getByText("Static Web Table").scrollIntoViewIfNeeded();

    /*
    Scenaros:
    1. get total no of rows
    2. get total no of columns
    3. get specific row
    4. get specific column
    4. get all data
    */

    let allRows = await page.locator("//table[@name='BookTable']//tbody//tr").all();
    console.log("Total Rows: " + allRows.length);

    let allColumns = await page.locator("//table[@name='BookTable']//tbody//tr//th").allInnerTexts();
    console.log("Total columns: " + allColumns.length);
    
    for(let c of allColumns)
        console.log(c);
    
    //get single row
    let singleRow = await page.locator("//table[@name='BookTable']//tbody//tr[5]//td").allInnerTexts();
    console.log(singleRow);

    //OR
    let singleRow1 = await page.locator("//table[@name='BookTable']//tbody//tr[5]");
    console.log(await singleRow1.textContent());
    
    //Display all book name
    let allBooks = await page.locator("//table[@name='BookTable']//tbody//tr//td[1]").allInnerTexts();
    console.log(allBooks);
    
    let totalPrice = 0;
    let price = await page.locator("//table[@name='BookTable']//tr//td[4]").allInnerTexts();
    for(let p of price){
        totalPrice = totalPrice + Number(p);
    }
    console.log("Total Price: " + totalPrice);
    
    //get the price of Master In Selenium book

    let rowIndex = 1;
    for(let b of allBooks){
        if(b.includes("Learn Selenium")){
            break;
        }
        rowIndex++;
    }
    console.log("Row Index: " + rowIndex);
    //let priceOfBook = await page.locator("//table[@name='BookTable']//tbody//tr["+(rowIndex+1)+"]//td[4]").innerText();
    let priceOfBook = await page.locator(`//table[@name='BookTable']//tbody//tr[${rowIndex+1}]//td[4]`).innerText();
    console.log("Price of book: " + priceOfBook);
    
    await page.waitForTimeout(2000);
})