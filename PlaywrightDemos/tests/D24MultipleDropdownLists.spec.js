import {test} from "@playwright/test"
import { selectByVisibleText, selectByValue, selectByIndex } from "./MyUtility.js";

test("Handling multiple Dropdown lists", async({page})=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

    let dayDD = page.locator(".day");
    let monthDD = page.locator(".month");
    let yearDD = page.locator(".year");

    //Select Day
    //await dayDD.selectOption("02");
    //await dayDD.selectOption({value:'02'});
    //await dayDD.selectOption({index: 2});
    //await selectByVisibleText(dayDD, "02");
    await selectByVisibleText(page.locator(".day"), "02");

    //Select Month
    //await selectByValue(monthDD, "09");
    await selectByVisibleText(monthDD, "SEP");

    //Select Year
    //await selectByIndex(yearDD, 4);
    //await selectByValue(yearDD, "2010");
    await selectByVisibleText(yearDD, "2010");

    await page.waitForTimeout(2000);
})