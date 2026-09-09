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
    await frame1.locator("//input[@name='mytext1']").fill("Test");

    await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']").fill("Frame2");

    let frame2 = await page.frameLocator("//frame[@src='frame_3.html']");
    frame2.locator("//input[@name='mytext3']").fill("Frame 3");

    let nestedFrame = await frame2.frameLocator("//iframe[contains(@src, 'https://docs.google.com/')]");
    await nestedFrame.locator("#i9").click();

    await nestedFrame.locator("#i21").click();    

    await page.waitForTimeout(5000);
})
//11-1.10