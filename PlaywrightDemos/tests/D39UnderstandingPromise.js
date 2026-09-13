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