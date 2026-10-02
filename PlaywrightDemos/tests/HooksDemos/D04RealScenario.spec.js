import test from "@playwright/test";

test.describe.serial(("Real Scenario for serial"), async()=>{

    test.beforeEach("Login scenario", async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        await page.getByPlaceholder("Username").fill("admin");
        await page.getByPlaceholder("Password").fill("admin123");

        await page.locator(".oxd-button--medium").click();
    })

   test("Login test", async({page})=>{
        console.log("Running login test");        
        // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        // await page.getByPlaceholder("Username").fill("admin");
        // await page.getByPlaceholder("Password").fill("admin123");

        // await page.locator(".oxd-button--medium").click();

        // await page.locator("//span[text()='Admin']").click();
    })

    test("Get Employee List", async({page})=>{
        // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        // await page.getByPlaceholder("Username").fill("admin");
        // await page.getByPlaceholder("Password").fill("admin123");

        // await page.locator(".oxd-button--medium").click();

        await page.locator("//span[text()='Admin']").click();
        await page.waitForTimeout(3000);
        let employeeList = await page.locator("//div[@class='oxd-table-body']//div//div//div[2]").allInnerTexts();

        for(let emp of employeeList){
            console.log(emp);            
        }
    })

    test("Logout test", async({page})=>{
        // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        // await page.getByPlaceholder("Username").fill("admin");
        // await page.getByPlaceholder("Password").fill("admin123");

        // await page.locator(".oxd-button--medium").click();

        await page.locator("//p[@class='oxd-userdropdown-name']").click();
        await page.locator("//a[text()='Logout']").click();
    })
})