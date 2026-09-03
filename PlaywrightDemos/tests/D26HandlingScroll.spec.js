import {test} from "@playwright/test"
import { scrollThePage } from "./MyUtility.js";

test("Handling non select based dropdown list", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");

    //page.evaluate() - is the method of Playwright which is used to execute
    //                  any method of javascript
    /*await page.evaluate(()=>{
        //window.scrollBy(0, 5000);
        window.scrollBy(0, window.document.body.scrollHeight);
        //window.document.body.scrollHeight - will find the height of window
    })*/
   await scrollThePage(page);

    await page.waitForTimeout(2000);
})