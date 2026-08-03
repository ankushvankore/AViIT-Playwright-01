/*
includes() method will check that whether the element is present in array or not
Return type: boolean
*/

let number = [11, 22, 33, 44, 55, 66];
let noPresent = number.includes(33);
console.log("33 Present: " + noPresent);

console.log("99 Present: " + number.includes(99));
