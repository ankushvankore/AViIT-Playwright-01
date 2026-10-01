/*
Hooks:
Hooks are special methods in Playwright that allow us to perform
setup and cleanup activities at different stages of test execution.

1. beforeAll: This is the method that will get exeucted only once before
                1st test case
2. afterAll: This is the method that will get exeucted only once after
                last test case
3. beforeEach: This is the method that will get executed before every test case
4. afterEach: This is the method that will get executed after every test case
*/

import test from "@playwright/test"

test.beforeAll("Before All Hook", async()=>{
    console.log("This is beforeAll hook");    
})

test.beforeEach("Before each hook", async()=>{
    console.log("This is beforeEach hook");    
})

test.afterEach("After each hook", async()=>{
    console.log("This is afterEach hook");    
})

test.afterAll("After All Hook", async()=>{
    console.log("This is afterAll hook");    
})



test("Login test", async({page})=>{
    console.log("This is login test case...");    
})

test("Search test", async({page})=>{
    console.log("This is search test case...");    
})

/*
Sequence of execution will be
beforeAll -> beforeEach -> Login Test -> afterEach -> beforeEach -> Search Test -> afterEach -> afterAll
*/