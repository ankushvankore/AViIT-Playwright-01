import test from "@playwright/test"

test("Handling Static WebTable", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    
    await page.getByText("Dynamic Web Table").scrollIntoViewIfNeeded();

    console.log("-------------- Display all table headers--------------");
    //let allHeaders = await page.locator("//table[@id='taskTable']//thead//tr//th").allInnerTexts();
    let allHeaders = await page.locator("//tr[@id='headers']//th").allInnerTexts();
    for(let h of allHeaders){
        console.log(h);        
    }

    console.log("------------ Display data of Chrome Row--------------");
    let cIndex = 1;
    let allNameCol = await page.locator("//tbody[@id='rows']//tr//td[1]").allInnerTexts();
    for(let n of allNameCol){
        if(n.includes('Chrome')){
            break;
        }
        cIndex++;
    }
    //console.log(cIndex);
    
    let chromeRow = await page.locator("//tbody[@id='rows']//tr["+cIndex+"]//td").allInnerTexts();
    for(let c of chromeRow){
        console.log(c);        
    }   

    await page.waitForTimeout(2000);
})