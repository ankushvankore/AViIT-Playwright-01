import XLSX from "xlsx"
//npm install xlsx - to install the xlsx library to playwright
//Will import xlsx library

/*let wb = XLSX.readFile("tests\\DataDrivenTestCases\\TestData\\CreateUserData.xlsx");
//Read the workbook
let sheet = wb.Sheets['UserData'];

/*let data = sheet['A1'];
//console.log(data);
console.log(data.v);
console.log(data.t);
*/

//let jsonData = XLSX.utils.sheet_to_json(sheet);
//console.log(jsonData);


export function readDataFromExcelFile(){
    let wb = XLSX.readFile("tests\\DataDrivenTestCases\\TestData\\CreateUserData.xlsx");
    let sheet = wb.Sheets['UserData'];

    let jsonData = XLSX.utils.sheet_to_json(sheet);

    return jsonData;
}
