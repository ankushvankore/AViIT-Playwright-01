import {test as base} from "@playwright/test"
//base is alice for test

export let test = base.extend({
    loginToOHRM: async({page}, use)=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        await page.getByPlaceholder("Username").fill("admin");
        await page.getByPlaceholder("Password").fill("admin123");
        await page.locator(".oxd-button--medium").click();

        use(page);
    }
})