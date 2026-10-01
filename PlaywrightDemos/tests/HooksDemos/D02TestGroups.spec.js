//We can combine multiple tests in a group

//IMP: mark fullyParallel: false in playwright.config.js file

import test from "@playwright/test";

//test.describe will treat the tests inside this method as a group
test.describe("This is suite for Smoke Test", async()=>{
    test("Home page test", async({page})=>{
        console.log("This is home page test");        
    })

    test("Login test", async({page})=>{
        console.log("This is login test");        
    })
})

test.describe("This is suite for regression tests", async()=>{
    test("Search test", async({page})=>{
        console.log("This is search product test");        
    })

    test("Checkout test", async({page})=>{
        console.log("This is checkout test");        
    })
})