import {test, expect} from "@playwright/test"
import Papa from "papaparse"
//papaparse library is used to read the data from .csv file
import fs from "fs"
//Library to read the data from any kind of file

//This is user defined function to read the data from csv file
function readFromCSV(){
    let file = fs.readFileSync("tests\\DataDrivenTestCases\\TestData\\LoginData_CSVFormat.csv", "utf-8");
    //Read / open the file to read the data

    let csvData = Papa.parse(file, {header: true, skipEmptyLines: true, dynamicTyping: false});
    //Will read the data in csv format
    //header: true --> will treat 1st row as header
    //skipEmptyLines: true --> Will skip any empty row if it present in the file
    //dynamicTyping: false --> Will avoid casting any data, will treat all data as string

    return csvData.data;
    //Will convert the data into JSON format and will return it
}

let testData = readFromCSV();

for(let td of testData){
    test("Data driven testing using CSV file" + td.Id, async({page})=>{
            await page.goto("https://www.saucedemo.com/");
    
            await page.locator("#user-name").fill(td.UserName);
            await page.locator("#password").fill(td.Password);
            await page.locator("#login-button").click();
    
            await expect(page).toHaveURL(/inventory/);
    
            await page.locator("#react-burger-menu-btn").click();
            await page.locator("#logout_sidebar_link").click();
    
            await page.waitForTimeout(2000);
    })
}