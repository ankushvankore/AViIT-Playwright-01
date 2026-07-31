/*
Display / Iterate Array
1. for loop
2. for-of loop
    a. It is forword only loop
    b. It is read-only loop
3. for-in loop -
    a. will give you the index of element from array
    b. will give you key from object
*/

let browsers = ['Chrome', 'Safari', 'Firefox', 'Edge', 'Iternet Explore', 'Opera', 'Brave'];
console.log(browsers);

console.log("-------------- normal for loop ---------------");

for(let i = 0; i < browsers.length; i++){
    console.log(browsers[i]);
}
console.log("-------------- Reverse order of array -------------");

for(let i = browsers.length -1; i >= 0; i--){
    console.log(browsers[i]);    
}

console.log("-------------- for-of loop ------------------");
/*
syntax:
for(let variable of array){
    statements;
}
*/

for(let b of browsers){
    b = b.toUpperCase();
    console.log(b);    
}

console.log(browsers);

console.log("--------------------- for-in loop --------------------");
for(let b in browsers){
    console.log("For index: " + b + " value: " + browsers[b]);    
}
