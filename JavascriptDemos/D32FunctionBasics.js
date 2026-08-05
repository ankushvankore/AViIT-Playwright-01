/*
Function: Is a block of statements that can be executed for multiple times.
Advantages:
1. Easy for maintance
2. Resusibligy
3. Modulirity

Types of Functions:
1. Built-in-functions - log(), split(), splice(), push()
2. User defined functions - addition(), calArea() 

Ways to write the function in JS
1. Function Declaration (Older technique)
2. Function Expression
    2.1. Annonymous Function (Function without name)
    2.2. Arrow Function

Parts of Function
1. Function Body
2. Function Call

Syntax for fun Decl
function name(arguments){
    body of function;
}
*/

console.log("------------------ Function Decleration ---------------");
//Arguments / Parameters - The value/s those are passed to the function for procession
console.log("---------------- Simple function without any argument -----------");

//Function body
function sayHello(){
    console.log("Hello friends, Welcome to JS function topoc!!!");
    console.log("This is the function where I am not passing any argument..");        
}

//Function call
sayHello();

console.log("------------------- Function with Arguments -----------------");
function calculateAreaOfCircle(redius){
    area = 3.142 * redius * redius;
    console.log("Area of Circle: " + area);    
}

calculateAreaOfCircle(5);

function calculateAddition(n1, n2){
    sum = n1 + n2;
    console.log("Sum: " + sum);
    //console.log("Sum: " + (n1 + n2));
}

calculateAddition(8, 7);
calculateAddition(90);

//This way you can inform the user about type of argument
//This is called as JSDoc (Javascript Documentation)
/**
 * 
 * @param {number} no 
 */

function calculateSqure(no){
    console.log(`Squre of ${no} is: ` + (no * no));
}

calculateSqure(7);
calculateSqure("Hi");

console.log("------------------ Function returning a value -------------");

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 */

function calculateMultiplication(n1, n2){
    //let ans = n1 * n2;
    //return ans;

    return n1 * n2;
}
/*
return statement will
1. return a the control back to the calling function
2. you may have multiple return statements but a 
    function can return a single value to the calling function
3. will terminate a function
*/

/*
If you need to use the returned value somewhere in the program then store it in a variable
Otherwise you can directly show it in the console.log() - means using the value only once
*/

let mul = calculateMultiplication(7, 8);
console.log("Multiplication: " + mul);

console.log("Multiplication: " + calculateMultiplication(5, 6));

console.log("------------- Function returning a value without passing any argument --------");


function greetings() {
    return "Welcome, Banty!!!"
}

let v = greetings();
console.log(v);

console.log(greetings());

console.log("------------------------------------------");

/**
 * 
 * @param {string} bName 
 */

function launchBrowser(bName){
    switch(bName.toLowerCase()){
        case 'chrome':
            console.log("Launching the TC in Chrome!!!");
            return true;
        case 'edge':
            console.log("Launching the TC in Edge!!!");
            return true;
        case 'firefox':
            console.log("Launching the TC in Firefox!!!");
            return true;
        case 'safari':
            console.log("Launching the TC in Safari!!!");
            return true;
        default:
            console.log("Invalid browser");
            return false;
    }
}

if(launchBrowser("ChroME")){
    console.log("Enter url: ");
}