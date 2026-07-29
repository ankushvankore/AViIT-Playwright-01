/*
Array - Collection of multiple elements of any data type.
    size is not fixed
    Every array in JS is treated as an Object

In JS array can be declared in 3 ways
1. Literal way
2. Using constructor
3. Array.of() method

Specific element from array can be accessed via 
+ve
zero based
int number ie. INDEX
*/

console.log("---------------- Empty Array ----------------");
let arr = [];
console.log(typeof arr);
console.log(arr);
console.log("Elements in array: " + arr.length);

console.log("-------------- Array Literal Way -------------------");
let numbers = [10, 20, 30, 40, 50];
console.log("Size: " + numbers.length);
console.log("2nd element: " + numbers[1]);
console.log(numbers[5]); //undefined

console.log("--------------------- Array of different data types ----------------");
let empData = [101, "Gaurav", "Indore", 30, 60000]
console.log("Size: " + empData.length);
console.log("City: " + empData[2]);
console.log(empData[8]);

console.log("-------------- Array Constructor -------------------");
let cities = new Array["Kolhapur", "Pune", "Jaipur", "Delhi", "Puri", "Kolkatta"];
console.log("Size: " + cities.length);
console.log(cities[3]);

console.log("------------ Array of numbers ------------------");
let arr1 = new Array(11, 22, 33, 44, 55);
console.log("Size: " + arr1.length);
console.log(arr1[3]);

console.log("------------ Array declaration with size -----------------");
let arr2 = new Array(5);
console.log("Size: " + arr2.length);
console.log(arr2);

console.log("----------------------- Array Declaration with Array.of() --------------");
let arr3 = Array.of(1, 2, 3, 4, 5, 4)
console.log("Size: " + arr3.length);
console.log(arr3);

