import fs from "fs"

export function readFromJSONFile(){
    let file = fs.readFileSync("TestData/LoginData.json", "utf-8");
    let jsonData = JSON.parse(file);

    return jsonData;
}