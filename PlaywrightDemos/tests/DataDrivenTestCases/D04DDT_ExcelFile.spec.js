import {test, expect} from "@playwright/test"
import XLSX from "xlsx"
import { readDataFromExcelFile } from "./TestData/ReadDataFromExcel"

let testData = readDataFromExcelFile();

for(let td of testData){
    test("Data driven testing using Excel File" + td.Id, async({page})=>{
        await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

        await page.locator("(//input[contains(@name, 'name')])[1]").fill(td.FullName);
        await page.locator("//input[contains(@id, 'login')]").fill(td.RediffId);

        //check availablity
        await page.locator("//input[contains(@name,'btnch')]").click();

        await page.locator("#newpasswd").fill(td.Password);
        await page.locator("#newpasswd1").fill(td.Password);

        //BirthDate
        await page.locator(".day").selectOption({label:td.DOB_Day});
        await page.locator(".month").selectOption({label:td.DOB_Month});
        await page.locator(".year").selectOption({label:td.DOB_Year});

        //Gender
        if(td.Gender.includes("Female")){
            page.locator("//input[@value='f']").click();
        }
        else{
            page.locator("//input[@value='m']").click();
        }

        await page.waitForTimeout(2000);
    })
}
