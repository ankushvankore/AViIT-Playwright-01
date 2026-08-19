import { expect, test } from "@playwright/test";

test("Built-in Locators - getByRole", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    let signInLink = page.getByRole("link", {name:'Sign In'});//name-Innertext
    await signInLink.click();   //Will click on the control

    await expect(page).toHaveTitle(/Login/);
    await expect(page).toHaveURL(/login/)

    await page.waitForTimeout(2000);
})

test("Built in locators - getByText", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    let signInLink = page.getByText("Sign In");
    await signInLink.click();

    await expect(page).toHaveURL(/login/);

    await page.waitForTimeout(2000);
})

test("Built in locators - getByPlaceHolder", async({page})=>{
    await page.goto("https://automationplayground.com/crm/");

    let signInLink = page.getByText("Sign In");
    await signInLink.click();

    await expect(page).toHaveURL(/login/);

    let userName = page.getByPlaceholder("Enter email");
    await userName.fill("test123@gmail.com"); //fill() - will enter the text in text box
    await page.getByPlaceholder("Password").fill("password");

    await page.waitForTimeout(2000);
})

test("Built in locators - getByLabel", async({page})=>{
    /*
    if any one of the control is inside the Label tag, then use getByLabel to read such conteol
    <Label>
        <input  type="" name=""/>
        Remember Me
    </Label>
    */
    await page.goto("https://automationplayground.com/crm/");

    let signInLink = page.getByText("Sign In");
    await signInLink.click();

    await expect(page).toHaveURL(/login/);

    await page.getByPlaceholder("Enter email").fill("test123@gmail.com"); //fill() - will enter the text in text box
    await page.getByPlaceholder("Password").fill("password");

    await page.getByLabel('Remember me').click();

    await page.waitForTimeout(2000);
})

test("Built in locators - getByAltText", async ({page})=>{
    await page.goto("https://www.echotrak.com/Login.aspx?ReturnUrl=%2f");

    //If the control is having < alt >attribute then such control can be located using
    //the getByAltText() pass the text in alt attrubte as parameter
    await page.waitForTimeout(1000);
    await page.getByAltText('EchoTrak').highlight();

    await page.waitForTimeout(5000);
})

test("Built-in Locators - getByTestID", async({page})=>{
    await page.goto("https://vinothqaacademy.com/demo-site-create-account/");

    //If any control is having data-testid attribute then such a control can be located using
    //getByTestId locator

    let userName = page.getByTestId("input-firstName");
    await userName.fill("test123");
    
    await page.waitForTimeout(2000);
})

test.only("Built-in Locators - getByTitle", async({page})=>{
    await page.goto("https:google.com");

    //If any control is having title attribute then such a control can be located using
    //getByTitile locator

    let userName = page.getByTitle("Search");
    //await userName.fill("Shriyanka Patil");
    userName.pressSequentially('Shriyanka Patil', {delay:100});
    
    await page.waitForTimeout(5000);
})





