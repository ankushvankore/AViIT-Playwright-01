/*
To check the status of any test case we are having s special object ie. testInfo
It is like Listners in TestNG
*/

import test from "@playwright/test"
test("Test case for test info object", async({page}, testInfo)=>{
    await page.goto("https://www.letskodeit.com/practice");

    console.log("Status         : " + testInfo.status);
    console.log("Title          : " + testInfo.title);
    console.log("Duration       : " + testInfo.duration);
    console.log("Expected Status: " + testInfo.expectedStatus);    
})