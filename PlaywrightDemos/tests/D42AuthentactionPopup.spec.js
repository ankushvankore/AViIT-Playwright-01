import test from "@playwright/test";

test("Handling Authentaction Popup", async({page})=>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/");

    /*
    Here you need to add the login credtionals in the url itself
    after https:// and after adding credtionals put @
    like https://admin:admin@

    Always remember that
    this technique will work only if the user name and password does'nt contain 
    any special character or number (ex. admin@123)
    */
    console.log("Title of home page: " + await page.title());

    await page.waitForTimeout(2000);
})

test.only("Handling Authentaction Popup with special characters", async({browser})=>{
    let context1 = await browser.newContext({httpCredentials: 
        {
            username: "admin",
            password: "admin123"
        }
    });
    let page = await context1.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");

    //this demo may not work because, the application expects admin & admin as 
    //a login credtionals

    await page.waitForTimeout(2000);
})
