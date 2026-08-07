/*
Arrow Function: is a kind of anonymous function where we are not suppose to 
use the keyword function, even sometimes {} & () can be skipped

let variable = ()=>{
    Body of the function;
}
*/
console.log("------------------ Simple Arrow Function ----------------");

let fun1 = ()=>{
    console.log("This is simple arrow function in JS!!!");
}
fun1();
console.log("Type: " + typeof fun1);

let fun2 = ()=>{console.log("This is another type of arrow function in  JS!!!");}
fun2();

console.log("------------------- Arrow function with parameters --------------");

/**
 * 
 * @param {string} bName 
 * @param {number} version 
 */

let fun3 = (bName, version)=>{
    console.log("Browser Name: " + bName);
    console.log("Browser Version: " + version);
}

fun3("Chrome", 140);

console.log("----------------- Arrow function without {} ---------------");
//If your function has only single line to execute, in that case you can skip {}
let fun4 = (no)=> console.log("Number is: " + no);
fun4(78);

console.log("--------------- Arrow function without {} & () ---------------");
//If your function has only single line to execute and single parameter to be passed, in this case
//you can skip () & {}

let fun5 = sName => console.log("Welcome, " + sName);
//fun var   para    body of function
fun5("Gaurav");

console.log("------------------- Arrow Function returning value ---------------");
let fun6 = (no)=>{
    if(no % 2 === 0)
        return true;
    else
        return false;
}
console.log("No 7 is Even: " + fun6(7));

console.log("--------------------- Arrow function returning a value without {} --------------");
let squre = (no) => no * no;

console.log("Squre of 6: " + squre(6));

console.log("--------------------- Arrow function returning a value without {} & () --------------");
let posNeg = no => no >= 0;

let result = posNeg(-9);
if(result)
    console.log("Number is +Ve");
else
    console.log("Number is -ve");
    
console.log("--------------------");
let fun7 = no => no % 2 === 0;
if(fun7(92))
    console.log("Number is Even");
else
    console.log("Numer id odd");
    
    