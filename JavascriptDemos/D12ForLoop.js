/*
Loops are used to repeate some statements

JS supports 5 types of loops
1. for
2. while
3. do-while
4. for-of used in arrays or objects
5. for-in used in arrays or objects
*/

/*
for loop
Syntax
for(initilization; condition; increment / decrement){
    statement/s
}
*/

console.log("------------- print 1 to 10 numbers -----------");

for(let i = 1; i <= 10; i++){
    console.log(i);    
}

console.log("------------- print 10 to 1 --------------");
for(let i = 10; i >= 1; i--){
    console.log(i);    
}

console.log("------------- print 1 to 10 Odd number --------------");
for(let i = 1; i <= 10; i += 2){
    console.log(i);    
}

console.log("------------- print 1 to 10 Even number --------------");
for(let i = 1; i <= 10; i++){
    if(i %2 === 0){
        console.log(i);n
        
    }
}

console.log("------------- print som of 1 to 10 numbers --------------");
let sum = 0, n = 1;
for(n = 1; n <= 10; n++){
    sum = sum + n;
}
console.log("Sum: " + sum);
