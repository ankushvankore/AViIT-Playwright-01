import {test} from "@playwright/test"

test("Handling disabled controls ", async({page})=>{
    await page.goto("https://formy-project.herokuapp.com/enabled");

    let txtBox = page.getByPlaceholder("Disabled input here...");
    console.log("Enabled: " + txtBox.isEnabled);
    console.log("Disabled: " + txtBox.isDisabled);
    
    //await txtBox.fill("Hello Friends!!!");

    await page.evaluate(()=>{
        document.querySelector("input[id='disabledInput']").value = 'Hello Friends!!!';
    })

    await page.waitForTimeout(3000);
})