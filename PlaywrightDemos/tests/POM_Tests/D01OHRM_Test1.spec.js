import test from "@playwright/test";
import { LoginToOHRM } from "../Pages/Login";

test("OHRM Login test with invalid credtionals1", async({page})=>{
    let l1 = new LoginToOHRM(page);

    await l1.launchOHRMApplication();
    await l1.enterUserName("admin");
    await l1.enterPassword("admin");
    await l1.clickOnLoginBtn();

    //await l1.getErrorMessage();
    let message = await l1.getErrorMessage();
    console.log("Error message: " + message);
    

    await page.waitForTimeout(2000);
})

test("OHRM Login test with invalid credtionals 2", async({page})=>{
    let l1 = new LoginToOHRM(page);

    await l1.launchOHRMApplication();
    // await l1.enterUserName("admin");
    // await l1.enterPassword("admin");
    // await l1.clickOnLoginBtn();

    await l1.directLogin('admin', 'admin');

    //await l1.getErrorMessage();
    let message = await l1.getErrorMessage();
    console.log("Error message: " + message);
    

    await page.waitForTimeout(2000);
})