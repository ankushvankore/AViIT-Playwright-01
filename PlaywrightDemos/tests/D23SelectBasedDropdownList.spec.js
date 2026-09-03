/*
There are two types of dropdown lists
1. Select based - where the control is having <select> tag
2. Non Select based - where the control is not having <select> tag 
    normally it has <div> tag
*/
import {test} from "@playwright/test"

test("Handling select based dropdown list", async({page})=>{
    await page.goto("https://omayo.blogspot.com/");

    let drpList = page.locator("#drop1");
    //Select by the visible text
    //await drpList.selectOption("doc 3");
    
    //Select by value
    //await drpList.selectOption("mno");
    //await drpList.selectOption({value: 'mno'});

    //Select by index (zero based)
    await drpList.selectOption({index: 1});
    //console.log("Selected Option: " + await drpList.inputValue());
    let selectedOption = await drpList.locator('option:checked').textContent();
    console.log("Selected Option: " + selectedOption);
    

    let allOptions = await page.locator("#drop1>option").all();
    console.log("Total Options in dropdown list: " + allOptions.length);
    
    for(let a of allOptions)
        console.log(await a.innerText());        

    await page.waitForTimeout(2000);
})