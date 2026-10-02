export class LoginToOHRM{
    #page;
    #userNameTxtBox;
    #passwordTxtBox;
    #loginBtn;
    #errorMessage;

    constructor(page){
        this.#page = page;
        //Read the controls / webelements on the page
        this.#userNameTxtBox = this.#page.locator("//input[@name='username']");
        this.#passwordTxtBox = this.#page.locator("//input[@name='password']");
        this.#loginBtn = this.#page.locator(".oxd-button");
        this.#errorMessage = this.#page.locator(".oxd-alert-content-text");
    }

    async launchOHRMApplication(){
        await this.#page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {setTimeout:10000});
    }

    async enterUserName(un){
        await this.#userNameTxtBox.fill(un);
    }

    async enterPassword(ps){
        await this.#passwordTxtBox.fill(ps);
    }

    async clickOnLoginBtn(){
        await this.#loginBtn.click();
    }


    async directLogin(un, ps){
        await this.#userNameTxtBox.fill(un);
        await this.#passwordTxtBox.fill(ps);
        await this.#loginBtn.click();
    }

    /*async getErrorMessage(){
        let message = await this.#errorMessage.innerText();
        console.log("Error Message: " + message);        
    }*/
   async getErrorMessage(){
        let message = await this.#errorMessage.innerText();
        return message;
    }

}