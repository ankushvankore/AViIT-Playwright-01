/*
if-else
Syntax:
if(Condition/Expression){
    statements/s;
}
else{
    statement/s;
}
*/

let href = "https://www.google.com";

if(href != null){
    console.log("Link is active!!!");    
}
else{
    console.log("Link is not active!!!");    
}

let no = -9;
if(no >= 0){
    //console.log(no + " is +ve!!!");
    console.log(`${no} is +ve!!!`);    
}
else{
    //console.log(no + " is -ve!!!");
    console.log(`${no} is -ve!!!`);        
}

//Assignment - Check whether the number is odd or even

let no1 = 894;
if(no1 % 2 === 0){
    //console.log(no + " is +ve!!!");
    console.log(`${no1} is Even!!!`);    
}
else{
    //console.log(no + " is -ve!!!");
    console.log(`${no1} is Odd!!!`);        
}

//Assignment - There are two values 1 is purchase amount and 2nd is selling amount
// using these two values calculate the profit or loss