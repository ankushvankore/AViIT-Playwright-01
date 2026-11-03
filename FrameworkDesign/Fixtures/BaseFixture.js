import {test as base, expect} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { readFromJSONFile } from "../Utilities/ReadJSON";
import { readFromCSVData } from "../Utilities/ReadFromCSV";
import path from "path";

export const test = base.extend({
    loginFixture: async({page}, use)=>{
        let loginPage = new LoginPage(page);
        await loginPage.goToApplication();
        await loginPage.directLogin("standard_user", "secret_sauce");

        await use(loginPage);
    },
    loginWithJSON: async({page}, use)=>{
        let loginData = readFromJSONFile();

        let loginPage = new LoginPage(page);
        await loginPage.goToApplication();
        await loginPage.directLogin(loginData.UserName, loginData.Password);

        await use (loginPage);
    },
    loginWithCSV: async({page}, use)=>{
        let loginData = readFromCSVData();

        let loginPage = new LoginPage(page);
        await loginPage.goToApplication();
        await loginPage.directLogin(loginData[0].Username, loginData[0].Password);

        await use(loginPage);
    },

    page:async({page}, use, testInfo)=>{
        await use(page);
        //This code will get executed after every test
        console.log("This is test!!!");
        
        if(testInfo.status == testInfo.expectedStatus){
            console.log("Test case fail");
            
            let ssFailTest = await page.screenshot({path: `Screenshots/${testInfo.title}.png`});
            await testInfo.attach('screenshot', {body:ssFailTest, contentType: 'image/png'});
            //This will attach the screenshot to report as well
            //to get the report call 'npx playwright show-report' command via terminal
        }
    }

})

export{expect};