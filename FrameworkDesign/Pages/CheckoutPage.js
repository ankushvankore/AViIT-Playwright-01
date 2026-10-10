import { OverviewPage } from "./OverviewPage";

export class CheckoutPage{
    #page;
    #firstName;
    #lastName;
    #zipCode;
    #continueButton

    constructor(page){
        this.#page = page;
        this.#firstName = this.#page.locator("#first-name");
        this.#lastName = this.#page.locator("#last-name");
        this.#zipCode = this.#page.locator("#postal-code");
        this.#continueButton = this.#page.locator("#continue");
    }

    async doCheckout(fName, lName, zCode){
        await this.#firstName.fill(fName);
        await this.#lastName.fill(lName);
        await this.#zipCode.fill(zCode);
        await this.#continueButton.click();

        return new OverviewPage(this.#page);
    }
}