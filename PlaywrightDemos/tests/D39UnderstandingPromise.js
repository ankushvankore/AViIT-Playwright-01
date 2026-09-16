//This concept is required for multiple window handling

/*
Promise
States
1. pending -- it is pending
2. resolve -- promise is fullfill -- handled by then()
3. reject -- promise is rejected -- handled by catch()
*/

let p1 = new Promise((resolve, reject)=>{
    console.log("Promise started...");
    let status = false;

    if(status){
        resolve("Promise resolved...")
    }
    else{
        reject("Promise rejected...")
    }
})

p1.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);    
})

console.log("-------------------- Only resolved promise -----------------");
let p2 = new Promise((resolve, reject)=>{
    resolve("2nd promise resolved...")
})

p2.then((res)=>{
    console.log(res);
    
})

console.log("---------------------------- Only rejected promise ---------------");

let p3 = new Promise((resolve, reject)=>{
    reject("3rd promise rejected...")
})

p3.then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
})

console.log("--------------------- Promise.all() --------------------");

let pr1 = new Promise((resolve, reject)=>{
    resolve("Pr1 resolved...")
})

let pr2 = new Promise((resolve, reject)=>{
    reject("Pr2 rejected...")
})

let pr3 = new Promise((resolve, reject)=>{
    reject("Pr3 rejected...")
})

await Promise.all([pr1, pr2, pr3]).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
})

console.log("--------------------- Promise.rece() ------------------");
await Promise.race([pr1, pr2, pr3]).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
})
