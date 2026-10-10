import { CheckoutPage } from "./CheckoutPage";
import { InventoryPage } from "./InventoryPage";

export class CartPage{
    #page;
    #productName;
    #removeButton;
    #continueShoppingButton;
    #checkoutuButton

    constructor(page){
        this.#page = page;
        this.#productName = this.#page.locator(".inventory_item_name");
        this.#removeButton = this.#page.locator("#remove-sauce-labs-backpack");
        this.#continueShoppingButton = this.#page.locator("#continue-shopping");
        this.#checkoutuButton = this.#page.locator("#checkout")
    }

    async getProductName(){
        return await this.#productName.innerText();
    }

    async removeFromCart(){
        let pName = await this.#productName.innerText();
        await this.#removeButton.click();

        return pName;
    }

    async continueShopping() {
        this.#continueShoppingButton.click();

        return new InventoryPage(this.#page);
    }

    async checkout(){
        this.#checkoutuButton.click();

        return new CheckoutPage(this.#page);
    }
}