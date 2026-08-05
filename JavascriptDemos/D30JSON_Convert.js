/*
Javascript allows you convert any JS object to JSON object and vise versa
JSON is an interface to make this possible

Methods of JSON interface
1. stringify() : Converts a JavaScript (Object) value to a JavaScript Object Notation (JSON) string.
2. parse() : Converts a JavaScript Object Notation (JSON) string into an Javascript object.
*/

let browser = {
    bName: "Firefox",
    version: 140
}

console.log(browser);
console.log(typeof browser);

console.log("-----------------------------------");

let jsonObject = JSON.stringify(browser);
console.log(jsonObject);
console.log(typeof jsonObject);

console.log("----------------------------");

let myJsonObject = `{
    "id": "1",
    "name": "Google Pixel 6 Pro",
    "data": {
      "color": "Cloudy White",
      "capacity": "128 GB"
    }
  }`
console.log(myJsonObject);
console.log(typeof myJsonObject);

let jsObject = JSON.parse(myJsonObject);
console.log(jsObject);
console.log(typeof jsObject);

