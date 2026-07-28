/*
Conditional statements - allows developers to check any condition and take the action
depending on the condition
JS supports 5 types of conditional statements
1. if statement
2. if-else statement
3. nested if statement
4. ladder if statement
5. switch-case statement

---------------

Simple if statement
Syntax:
if(condition / expression){
    statement/s;
}
*/

let cYear = 2027;
if(cYear === 2026){
    console.log("Current year is correct!!!");    
}

let href = "https://www.google.com";
if(href != null){
    console.log("Link is active");    
}

let balance = 1000;
if(balance < 2000){
    console.log("Account balance is low!!!");
    
}