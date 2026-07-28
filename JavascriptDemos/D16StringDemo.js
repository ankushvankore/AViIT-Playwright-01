/*
String - collection of characters - 1D array of characters
String is an Object JS
String is immutable

Ways to declare the string
let s1 = 'Hello';
let s2 = "Hi";
let s3 = `Welcome 
to JS` --> Template string
*/

console.log("------------ String Immutablity ------------");
let str1 = "Hello";
str1[1] = 'E';
console.log(str1);

console.log("---------------- find the length -------------");
let str2 = "Welcome to Javascript";
console.log("Length of String: " + str2.length);

console.log("--------------- toLowerCase() -----------------");
let str3 = "Hello Friends";
console.log("Lower case string: " + str3.toLowerCase());

console.log("------------ toUpperCase() ------------------");
console.log("Upper case String: " + str3.toUpperCase());

//trim() will remove the leading and trailing white spaces
console.log("-------------------- trim() -------------------------");
let str4 = "         Google         ";
console.log("str4: " + str4);
console.log("str4 with trim(): " + str4.trim());

console.log("--------------- charAt() --------------------");
let str5 = "Vibhaivari";
console.log("Character at 1 Index: " + str5.charAt(1));

console.log("------------------- indexOf() -----------------");
console.log("Index of i: " + str5.indexOf('i'));
//Will return the first occourance
console.log("Index of last i: " + str5.lastIndexOf('i'));
console.log("Index of 2nd i: " + str5.indexOf('i', 2));

