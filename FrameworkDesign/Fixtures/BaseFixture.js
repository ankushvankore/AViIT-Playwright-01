import {test as base, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"

export const test = base.extend({
    loginFixture: async({page}, use)=>{
        let loginPage = new LoginPage(page);
        await loginPage.goToApplication();
        await loginPage.directLogin("standard_user", "secret_sauce");

        await use(loginPage);
    }
})

export{expect};