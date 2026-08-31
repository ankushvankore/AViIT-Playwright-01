import {test} from "@playwright/test"

test("XPath Axis", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("//h2[text()='Static Web Table']").scrollIntoViewIfNeeded();

    await page.locator("//td[text()='Learn JS']//ancestor::tr").highlight();
    await page.waitForTimeout(1000);
    await page.locator("//td[text()='Learn JS']//ancestor::tr").hideHighlight();

    await page.locator("//td[text()='Learn JS']//ancestor::tbody").highlight();
    await page.waitForTimeout(1000);
    await page.locator("//td[text()='Learn JS']//ancestor::tbody").hideHighlight();

    await page.locator("//table[@name='BookTable']/tbody//tr[5]//child::td").highlight();
    await page.waitForTimeout(1000);
    await page.locator("//table[@name='BookTable']/tbody//tr[5]//child::td").hideHighlight();

    /*let rowNo7Td = await page.locator("//table[@name='BookTable']//tr[7]//child::td").all();
    console.log("All td tags of 7th row of 1st table");
    
    for(let td of rowNo7Td){
        console.log(await td.innerText());        
    }*/
   let allTexts = await page.locator("//table[@name='BookTable']//tr[7]//child::td").allInnerTexts();
   for(let t of allTexts){
        console.log(t);    
   }



    await page.waitForTimeout(5000);
})

test.only("Undetstanding following, preceding and siblling methods", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");
    
    await page.getByText("Sign In").click();
    await page.locator("#email-id").fill("text@gmail.com");
    await page.locator("#password").fill("test@123");
    await page.locator("#submit-id").click();

    await page.locator("//td[text()='John']//following::tr").highlight();
    await page.waitForTimeout(2000);
    await page.locator("//td[text()='John']//following::tr").hideHighlight();

    await page.locator("//td[text()='John']//preceding::tr").highlight();
    await page.waitForTimeout(2000);
    await page.locator("//td[text()='John']//preceding::tr").hideHighlight();

    await page.locator("//td[text()='John']//following-sibling::td").highlight();
    await page.waitForTimeout(2000);
    await page.locator("//td[text()='John']//following-sibling::td").hideHighlight();

    await page.locator("//td[text()='aaron_butler']//preceding-sibling::td").highlight();
    await page.waitForTimeout(2000);
    await page.locator("//td[text()='aaron_butler']//preceding-sibling::td").hideHighlight();


    await page.waitForTimeout(3000);
})