/*
While loop
Entry oriented loops (Check the condition first)

Syntax:
initilization;
while(condition){
    statement/s;
    increment/decrement;
}

*/
console.log("-------------------- While Loop -------------");
let i = 1;
while(i <= 10){
    console.log("Welcome to JS!!!");  
    i++;  
}

i = 1;
let sum = 0;
while(i <= 10){
    sum = sum + i;
    i++;
}
console.log("Sum: "+ sum);

console.log("----------------- Sum of Digits ----------------");
let no = 7564, addition = 0;

while(no > 0){
    let rem = no % 10;
    no = Math.floor(no / 10);
    addition = addition + rem;
}

console.log("Addition of digits: " + addition);

console.log("--------------- Sum of digits usign String saperation -------------");

let no1 = 6325, res = 0;
let strNo = String(no1);
let index = strNo.length - 1;

while(index >= 0){
    let n = strNo.charAt(index);
    res = res + Number(n);
    index--;
}

console.log("Additon is: " + res);
