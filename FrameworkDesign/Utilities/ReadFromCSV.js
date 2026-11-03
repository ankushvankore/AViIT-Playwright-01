import Papa from "papaparse"
import fs from "fs"

export function readFromCSVData(){
    let file = fs.readFileSync("TestData/LoginData.csv", "utf-8");
    let testData = Papa.parse(file, {header: true, skipEmptyLines: true});

    return testData.data;
}