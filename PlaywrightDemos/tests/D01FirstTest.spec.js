//Import the test
import {test} from "@playwright/test"

test("First Simple Test", ()=>{
    console.log("This is my first test");    
})

test("Second test", ()=>{
    console.log("This is my second test case!!!");  
})

/*
for executing tests you need to call following command on terminal
npx playwright test tests/<name of file>.spec.js
*/