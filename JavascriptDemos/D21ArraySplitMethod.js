/*
split() - will convert a string in to an array using a unique saperator
*/

let tools = 'Playwright,Selenium,Cypress,Tosca';
let toolsArray = tools.split(",");
console.log(toolsArray);
console.log(typeof toolsArray);

let singleTool = tools.split(',')[2];
console.log(singleTool);

let date = "August 2026";
let month = date.split(" ")[0];
let year = date.split(" ")[1];
console.log(year);
console.log(month);