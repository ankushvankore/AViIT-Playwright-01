/*
Object immutablity means we can strict user to modify an object
Ways
1. freeze() : Prevents the modification of existing property attributes and values, 
    and prevents the addition of new properties.
2. seal() : Modifications of properties are allowed but adding or removing any property
    is not allowed
*/

let product = {
    pName: 'Vivo V28',
    price: 25000
}

console.log(product);

Object.freeze(product);
//Trying to change the value of a property
console.log("------------ Change the value of any property ---------");

product.pName = 'IPhone';   
console.log(product);
console.log("---------- Add a Property to object -----------");

product.version = 25;
console.log(product);

console.log("---------- Delete the property -----------");
delete product.price;
console.log(product);

console.log("----------------------------------------");
let browser = {
    bName: "Chrome",
    version: 150
}

console.log(browser);

Object.seal(browser);

console.log("----------- Modify Property ------------");
browser.bName = "Firefox";
console.log(browser);

console.log("--------------- Add property -----------");
browser.isIncognito = true;
console.log(browser);

console.log("------------- Delete the property ------------");
delete browser.version;
console.log(browser);
