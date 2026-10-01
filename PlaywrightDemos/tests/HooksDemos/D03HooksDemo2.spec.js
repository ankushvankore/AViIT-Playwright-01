import test from "@playwright/test";

//IMP: mark fullyParallel: true

//serial: Declares a group of tests that should always be run serially. 
// If one of the tests fails, all subsequent tests are skipped. 
// All tests in a group are retried together.

test.describe.serial(()=>{
    test.beforeAll("this is beforeAll", async()=>{
        console.log("This is before all hook");        
    })

    test.beforeEach("This is beforeach hook", async()=>{
        console.log("This is beforeEach hook");        
    })

    test.afterAll("this is afterAll", async()=>{
        console.log("This is After all hook");        
    })

    test("Login test", async({page})=>{
        console.log("This is login test");        
    })

    test("Logout test", async({page})=>{
        console.log("This is logout test");        
    })
})