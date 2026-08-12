import {readFile} from "fs/promises"

/*for(let i = 1; i <= 10; i++){
    console.log("Hi....");    
}

console.log("Program ends!!!");
*/
/*
console.log("Program Starts!!!");

setTimeout(()=>{
    console.log("Welcome to Javascript!!!");    
}, 3000);

console.log("Program ends!!!");

let response = fetch("https://api.restful-api.dev/collections");
console.log("Response: " + response);
*/

async function getData(){
    let response = await fetch("https://api.restful-api.dev/collections");
    console.log(response);
}
//getData();

let fileData = async ()=>{
    let data = await readFile("D:/AViIT/Demos/Playwright_Batches/Playwright-01/JavascriptDemos/Demo.txt", "utf8");
    console.log(data);
}
fileData();