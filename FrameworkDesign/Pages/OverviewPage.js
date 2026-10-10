export class OverviewPage{
    #page;
    #summary;
    #finishButton;
    #successMessage;

    constructor(page){
        this.#page = page;
        this.#summary = this.#page.locator(".summary_info div[class^='summ']");
        this.#finishButton = this.#page.locator("#finish");
        this.#successMessage = this.#page.locator(".complete-header");
    }

    async getSummary(){
        let details = await this.#summary.all();

        for(let d of details){
            console.log(await d.innerText());            
        }
    }

    async completeCheckoutProcess(){
        await this.#finishButton.click();

        console.log("Message is: " + await this.#successMessage.innerText());        
    }
}