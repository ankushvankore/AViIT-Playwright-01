import test from "@playwright/test"

test("Handling right click action", async({page})=>{
    /*
    1. Right click on the button
    2. Display all menus
    3. Click on any one menu option
    4. Handle an alert
    */

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    page.on('dialog', async(alt)=>{
        console.log("Type of alert: " + alt.type());
        console.log("Message on alert: " + alt.message());
        
        await alt.accept();
    })

    await page.getByText("right click me").click({button:'right'});
    let allMenus = await page.locator("//ul[@class='context-menu-list context-menu-root']//li//span").all();
    for(let menu of allMenus){
        //console.log(menu);        
        if((await menu.innerText()).includes("Delete")){
            menu.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})

test("Handling double click actions", async({page})=>{
    /*
    1. Double click on the button
    2. Handle an alert
    */

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    page.on('dialog', async(alt)=>{
        console.log("Type of alert: " + alt.type());
        console.log("Message on alert: " + alt.message());
        
        await alt.accept();
    })

    await page.getByText("Double-Click Me To See Alert").dblclick();

    await page.waitForTimeout(2000);
})

/*
Playwright can automaticaly capture the screenshot and video as well
to enable this just add 2 lines in playwright.config.js file after

    trace: 'on-first-retry',

    Add following two lines

    video: 'on',
    screenshot: 'on'

    to view the screenshot you can check the playwright-report folder
    and for video you can call npx playwright show-report command on terminal

    or even you can see both these items in the folder. open this folder in 
    file explorer.
*/

test("Hover the mouse action.", async({page})=>{
    await page.goto("https://www.naukri.com/");

    await page.locator("//span[text()='Jobs']").hover();
    let allLinks = await page.locator("//div[contains(@class, 'nI-gNb-dropdown__c3 nI-gNb-dropdown')]//ul//li//a").allInnerTexts();
    console.log("Total Links: " + allLinks.length);
    for(let link of allLinks)
        console.log(link);       
    

    await page.waitForTimeout(2000);
})

test("Handling drag and drop action", async({page})=>{
    await page.goto("https://jqueryui.com/droppable/");

    let frame = page.frameLocator(".demo-frame");
    let source = frame.locator("#draggable");
    let target = frame.locator("#droppable");

    await source.dragTo(target);
    //page.dragAndDrop()
    //avoid using page.dragAndDrop() method because this method accepts
    //two parameters as a string and we are supposed to perform actions 
    //on locators (controls) not on the string
    await page.waitForTimeout(3000);
})

test("Copy-paste operation via keyboard", async({page})=>{
    await page.goto("https://automationplayground.com/crm/login.html");

    //await page.locator("#email-id").pressSequentially("test@gmail.com", {delay:500});
    let userId = "test@gmail.com";
    let userTextBox = page.locator("#email-id");

    await userTextBox.focus();
    page.keyboard.insertText(userId);

    userTextBox.press('ControlOrMeta+A');
    userTextBox.press('ControlOrMeta+C');

    page.locator("#password").press('ControlOrMeta+V')

    await page.waitForTimeout(2000);
})

test("Handling keyboard actions - tab", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");

    await page.locator("#name").focus();
    await page.locator("#name").pressSequentially("Pooja", {delay:100});

    await page.keyboard.press('Tab');
    await page.keyboard.type("Dubay");

    await page.keyboard.press('Tab');
    await page.keyboard.type('9898989898');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Indore');

    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');

    for(let i = 1; i <= 4; i++){
        await page.keyboard.press('Tab');
    }
    await page.keyboard.press('Space');

    /*
    Playwright allows to press following keys as well
    F1 - F12, Digit0- Digit9, KeyA- KeyZ, Backquote, Minus, 
    Equal, Backslash, Backspace, Tab, Delete, Escape, ArrowDown, 
    End, Enter, Home, Insert, PageDown, PageUp, ArrowRight, ArrowUp
    */
    await page.waitForTimeout(3000);
})

test("Handling keyboard actions - Enter", async({page})=>{
    await page.goto("https://www.google.com");

    await page.locator("#ti6dpd").focus();
    await page.keyboard.type("Playwright");
    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);
})

test.only("Slider Automation", async({page})=>{
    await page.goto("https://jqueryui.com/slider/");

    let frame = page.frameLocator(".demo-frame");
    let sliderStrip = frame.locator("#slider");
    let sliderArea = frame.locator(".ui-slider-handle");

    await sliderArea.dragTo(sliderStrip, {targetPosition:{
        x: 200,
        y: 0
    }})

    await page.waitForTimeout(4000);
})