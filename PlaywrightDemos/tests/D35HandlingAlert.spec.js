import test from "@playwright/test"

/*
What is an alert?
Alert is like a popup on the top of browser
If alert is present, you are not allowed to perform any action on the page
Alert is not inspectable
Alert do not have (X) button

Types of alert
1. Normal alert - Having only Ok button
2. Confirmation alert - Having Ok and Cancel button
3. Prompt alert - Allows to enter the data on alert


Types of alert
1. Normal alert - Having only Ok button
2. Confirmation alert - Having Ok and Cancel button
3. Prompt alert - Allows to enter the data on alert

Playwright automatically handles an alert
If you want to handle it via code then you can write a event called as page.on

In Playwright whenever you are handling an alert write the page.on event before 
an alert is occured 
*/

test("Handling alert in Playwright", async({page})=>{
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    await page.locator("#login1").fill("Rishi");
    await page.locator(".signin-btn").click();

    await page.waitForTimeout(2000);
})

test.only("Handling alert Manually in Playwright", async({page})=>{
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    await page.locator("#login1").fill("Rishi");
    
    page.on("dialog", (alt)=>{
        console.log("Type of alert: " + alt.type());
        console.log("Message on alert: " + alt.message());

        alt.accept();   //Will click on Ok button
    })
    
    await page.locator(".signin-btn").click();

    await page.waitForTimeout(2000);
})