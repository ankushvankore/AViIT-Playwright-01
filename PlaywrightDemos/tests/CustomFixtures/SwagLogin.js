import {test as base} from "@playwright/test"

export let test = base.extend({
    //swagLogin will be treated as custom Fixture
    swagLogin: async({page}, use)=>{
        await page.goto("https://www.saucedemo.com/");

        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();

        await use(page);
        //use this page object in the .spec file
    },
    addToCart: async({page}, use)=>{

    }
})