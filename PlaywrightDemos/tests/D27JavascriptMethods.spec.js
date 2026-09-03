import {test} from "@playwright/test"

test("Refresh the page", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");

    //await page.reload();
    await page.evaluate(()=>{
        window.history.go(0);   //Will reload the page
    })

    await page.waitForTimeout(2000);
})

test("Get the title of the page", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");

    //console.log("Title: " + await page.title());

    let title = await page.evaluate(()=>{
        return document.title;
    })
    console.log("Title: " + title);
    

    await page.waitForTimeout(2000);
})

test.only("Handlinh WebElements through JavaScript", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");

    //querySelector()  accepts only CssSelector
    await page.evaluate(()=>{
        document.querySelector("input[id='firstName']").value = 'Rishi';
        document.querySelector("input[id='gender-radio-1']").click();
    })

    await page.waitForTimeout(2000);
})