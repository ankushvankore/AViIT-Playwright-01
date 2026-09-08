import test from "@playwright/test"

test("Handling Dynamic WebTable", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    
    await page.getByText("Dynamic Web Table").scrollIntoViewIfNeeded();

    console.log("-------------- Display all table headers--------------");
    //let allHeaders = await page.locator("//table[@id='taskTable']//thead//tr//th").allInnerTexts();
    let allHeaders = await page.locator("//tr[@id='headers']//th").allInnerTexts();
    for(let h of allHeaders){
        console.log(h);        
    }

    console.log("------------ Display data of Chrome Row--------------");
    let rIndex = 1;
    let allNameCol = await page.locator("//tbody[@id='rows']//tr//td[1]").allInnerTexts();
    for(let n of allNameCol){
        if(n.includes('Firefox')){
            break;
        }
        rIndex++;
    }
    console.log("Row Index: " + rIndex);
    
    let chromeRow = await page.locator("//tbody[@id='rows']//tr["+rIndex+"]//td").allInnerTexts();
    for(let c of chromeRow){
        console.log(c);        
    }   

    console.log("------------- Display data of CPU Column ----------------");
    //let cIndex = allHeaders.indexOf("CPU (%)") + 1; 
    let cIndex = 1;
    for(let c of allHeaders){
        if(c.includes("Memory")){
            break;
        }
        cIndex++;
    }
    console.log("Column Index: " + cIndex);
    let column = await page.locator("//tbody[@id='rows']//tr//td["+cIndex+"]").allInnerTexts();
    for(let c of column)
        console.log(c);


    let actCpuForChrome = await page.locator("//tbody[@id='rows']//tr["+rIndex+"]//td["+cIndex+"]").innerText();
    let expCpuForChrome = await page.locator("(//div[@id='displayValues']//p//strong)[1]").innerText();
    console.log("Actual Value: " + actCpuForChrome);
    console.log("Expected Value: " + expCpuForChrome);
    
    if(actCpuForChrome.includes(expCpuForChrome)){
        console.log("Both values are matching!!! Test case pass");
    }
    else{
        console.log("Both values are not matching!!! Test case fail");
        
    }

    await page.waitForTimeout(5000);
})