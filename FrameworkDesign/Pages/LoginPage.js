import { InventoryPage } from "./InventoryPage";

export class LoginPage{
    #page;
    #userName;
    #password;
    #loginBtn;
    #errorMessage;

    constructor(page){
        this.#page = page;
        this.#userName = this.#page.locator("#user-name");
        this.#password = this.#page.locator("#password");
        this.#loginBtn = this.#page.locator("#login-button");
        this.#errorMessage = this.#page.locator("//h3[@data-test='error']");
    }

    async goToApplication(){
        await this.#page.goto("https://www.saucedemo.com/");
    }

    async openApplication(url){
        await this.#page.goto(url);
    }

    async directLogin(un, ps){
        await this.#userName.fill(un);
        await this.#password.fill(ps);
        await this.#loginBtn.click();

        return new InventoryPage(this.#page);
    }

    async getTitle(){
        return await this.#page.title();
    }

    async getErrorMessage(){
        let message = await this.#errorMessage.innerText();
        console.log("Error Message: " + message);        
        return message;
    }
}