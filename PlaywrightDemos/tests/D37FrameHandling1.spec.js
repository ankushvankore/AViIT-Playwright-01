import {test, expect } from "@playwright/test"

/*
IFrame / Frame - this is the parts of any web page. like cupboards at the home
Developer uses this to separate the parts of page.

For handling IFrame / Frame, first you need to locate the frame (using frameLocator()) and then
with the help of frame object you can locate any control inside the frame
*/

test("Frame automation", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    let frame1 = page.frameLocator("//frame[@src='frame_1.html']");
    await frame1.locator("//input[@name='mytext1']").fill("This is Frame 1");

    await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']").pressSequentially("This is second frame!!!", {delay: 100})

    let frame3 = page.frameLocator("//frame[@src='frame_3.html']");
    frame3.locator("//input[@name='mytext3']").fill("Welcome to Playwright Frame Handling");

    let nestedFrame = frame3.frameLocator("//iframe[contains(@src, 'https://docs.google.com/')]");
    await nestedFrame.locator("#i9").click();

    await nestedFrame.locator("#i21").click();    

    await page.waitForTimeout(5000);
})

test.only("Handling frame", async({page})=>{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_input_disabled");

    let f1 = page.frameLocator("#iframeResult");
    await f1.locator("#fname").pressSequentially("Playwright!!!", {delay: 100});


    await page.waitForTimeout(3000);
})