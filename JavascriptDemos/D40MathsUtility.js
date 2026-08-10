/*
Utility - is the reusable code like variables, functions, classes, objects that can 
used in multiple programs (.js files)

For this add export keyword before declaration of variable, function, class etc
add import {object} from "filename.js" in the file in which you want use these objects
*/

export const pi = 3.142;

/**
 * 
 * @param {number} rd 
 * @returns 
 */

export let calculateArea = function (rd) {
    return pi * rd * rd;
}

/**
 *                    
 * @param {number} no1 
 * @param {number} no2 
 */

let addition = function(no1, no2){
    console.log("Addition: " + (no1 + no2));
}       

/*
console.log("Area: " + calculateArea(5));
addition(10, 20);
multiplication(5, 7);

let s1 = new StudentData(101, "Rishi");
s1.displayData();*/