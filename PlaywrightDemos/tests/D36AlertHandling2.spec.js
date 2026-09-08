import {test, expect } from "@playwright/test"

test("Handling simple alert in Playwright", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", (alt)=>{
        console.log("Type of alert: " + alt.type());
        console.log("Message on alert: " + alt.message());
        
        alt.accept();
    })

    await page.getByText("Click for JS Alert").click();

    console.log(await page.locator("#result").innerText());

    await page.waitForTimeout(2000);    
})

test("Handling Confirmation alert in Playwright", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", (alt)=>{
        console.log("Type of alert: " + alt.type());
        console.log("Message on Alert: " + alt.message());
        
        alt.dismiss();      //Will click on Cancel button
    })

    await page.getByText("Click for JS Confirm").click();
    console.log(await page.locator("#result").innerText());

    await page.waitForTimeout(2000);
})

test("Handling Prompt alert in Playwright", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", (alt)=>{
        console.log("Type of alert: " + alt.type());
        console.log("Message on Alert: " + alt.message());

        alt.accept("Welcome to Playwright Prompt Handling!!!")
    })
    await page.getByText("Click for JS Prompt").click();
    console.log(await page.locator("#result").innerText());

    await page.waitForTimeout(2000);
})

test.only("Handling all type of alerts in Playwright", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", (alt)=>{
        if(alt.type().includes("alert")){
            console.log("Type of alert: " + alt.type());
            console.log("Message on Alert: " + alt.message());

            alt.accept();
        }
        else if(alt.type().includes('confirm')){
            console.log("Type of alert: " + alt.type());
            console.log("Message on Alert: " + alt.message());

            alt.dismiss();
        }
        else if(alt.type().includes("prompt")){
            console.log("Type of alert: " + alt.type());
            console.log("Message on Alert: " + alt.message());

            alt.accept("Thank you for handling me :)");
        }
    })

    await page.getByText("Click for JS Alert").click();
    let message = await page.locator("#result").innerText();
    expect(message).toContain("You successfully clicked an alert");

    await page.getByText("Click for JS Confirm").click();
    message = await page.locator("#result").innerText();
    expect(message).toContain("You clicked: Cancel");

    await page.getByText("Click for JS Prompt").click();
    message = await page.locator("#result").innerText();
    expect(message).toContain("You entered: Thank you for handling me :)");

    await page.waitForTimeout(2000);
})