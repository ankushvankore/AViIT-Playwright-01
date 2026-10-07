import { CartPage } from "./CartPage";

export class InventoryPage{
    #page;
    #allProducts;
    #addToCartBtn;
    #cartBtn;

    constructor(page){
        this.#page = page;
        this.#allProducts = this.#page.locator(".inventory_item_name ");
        this.#addToCartBtn = this.#page.locator("//button[text()='Add to cart']");
        this.#cartBtn = this.#page.locator(".shopping_cart_link");
    }

    async getTotalNumberOfProducts(){
        await this.#page.waitForTimeout(2000);
        //let totalItems = await this.#allProducts.all().length;
        //return totalItems;

        let products = await this.#allProducts.all();
        //let totalItems = products.length;
        //return totalItems;
        return products.length;

        //return await this.#allProducts.all().length;        
    }

    async getAllProductDetails(){
        await this.#page.waitForTimeout(2000);
        let products = await this.#allProducts.all();

        for(let p of products){
            console.log(await p.innerText());            
        }
    }

    async addToCart(item){
        await this.#page.waitForTimeout(2000);
        let products = await this.#allProducts.all();

        for(let p of products){
            if((await p.innerText()).includes(item)){
                await p.click();
                break;
            }
        }
        console.log(item + " added in the cart!!");
        await this.#addToCartBtn.click();
    }

    async goToCartPage(){
        await this.#cartBtn.click();

        return new CartPage(this.#page);
    }

}