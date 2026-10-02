import {test} from "../CustomFixtures/OHRMLogin.js"

test("Orange HRM login using custom fixture", async({page, loginToOHRM})=>{

})

test("Get Employee list using cusome fixture", async({page, loginToOHRM})=>{
    page = loginToOHRM;

    await page.locator("//span[text()='Admin']").click();
    await page.waitForTimeout(3000);
    let employeeList = await page.locator("//div[@class='oxd-table-body']//div//div//div[2]").allInnerTexts();

    for(let emp of employeeList){
        console.log(emp);            
    }

    await page.waitForTimeout(2000);
})