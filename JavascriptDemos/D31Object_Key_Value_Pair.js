let browser = {
    bName: "Firefox",
    version: 140,
    incognito: true,
    allowsMultiple: true
}

console.log(browser);
for(let b in browser){
    console.log(b);    
}

//Returns the names of the enumerable string properties and methods of an object.
let allKeys = Object.keys(browser);
console.log(allKeys);

//Returns an array of values of the enumerable own properties of an object
let allValues = Object.values(browser);
console.log(allValues);

//Returns an array of key/values of the enumerable own properties of an object
let keyEntries = Object.entries(browser);
console.log(keyEntries);
