/*
There are 3 branching statements in JS
1. break - will terminate the loop
2. continue - will skip the remaining statements from loop and will 
    continue from the next iteration
3. return - used to terminate and return a single value from the function
*/

console.log("---------------- continue ----------------");
for(let i = 1; i <= 20; i++){
    if(i % 5 === 0){
        continue;
    }
    else{
        console.log(i);
    }    
}

console.log("-------------- break ---------------");
for(let i = 1; i <= 20; i++){
    if(i % 5 === 0){
        break;
    }
    else{
        console.log(i);        
    }
}

console.log("------------------ Check for prime no --------------");
let no = 23, i;
for(i = 2; i <= no; i++){
    if(no % i === 0){
        break;
    }
}
if(no === i){
    console.log("This is prime no!!!");
}
else{
    console.log("This is not a prime no!!!");    
}