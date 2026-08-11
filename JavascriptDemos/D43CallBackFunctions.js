/*
Call back function / Higher order function
----------------------------------------------
We any function is passed as a parameter to another function, then
this is called as Call Back Function / Higher Order Function
*/

function getName(uName) {
    console.log("Welcome to Javascript, " + uName);
}

/**
 * 
 * @param {function} callBackFun 
 * @param {*} uName 
 */

function sayHello(callBackFun, uName) {
    callBackFun(uName);
}

sayHello(getName, "Vibhavari");

console.log("---------------------------");

function addition(n1, n2) {
    console.log("Addition: " + (n1 + n2));
}

function subtraction(n1, n2) {
    console.log("Subtraction: " + (n1 - n2));
}

function multiplication(n1, n2) {
    console.log("Multiplication: " + (n1 * n2));
}

function division(n1, n2) {
    console.log("Division: " + (n1 / n2));
}

function calculate(fun, n1, n2) {
    fun(n1, n2);
}

calculate(multiplication, 5, 6);