/*
Object Interchage - Copy one object into another
let n1 = 10;
let n2 = 20;
n1 = n2;
*/


let browser1 = {
    bName: 'Chrome',
    version: 120
}

let browser2 = {
    bName: 'Edge',
    version: 130
}

let browser3 = {
    bName: "Firefox",
    version: 140
}

console.log(browser1);
console.log(browser2);
console.log(browser3);

console.log("----------------------------");

browser1 = browser2;
console.log(browser1);
console.log(browser2);
console.log(browser3);

console.log("------------------------------");

browser1 = browser3;
console.log(browser1);
console.log(browser2);
console.log(browser3);
