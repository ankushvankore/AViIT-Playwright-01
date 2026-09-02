
/**
 * 
 * @param {import("@playwright/test").Locator} ddLocator 
 * @param {string} textToBeSelected 
 */
export async function selectByVisibleText(ddLocator, textToBeSelected){
    await ddLocator.selectOption(textToBeSelected);
}

/**
 * 
 * @param {import("@playwright/test").Locator} ddLocator 
 * @param {string} valueToBeSelected 
 */
export async function selectByValue(ddLocator, valueToBeSelected){
    //await ddLocator.selectOption(valueToBeSelected);
    await ddLocator.selectOption({value: valueToBeSelected});
}

/**
 * 
 * @param {import("@playwright/test").Locator} ddLocator 
 * @param {number} indexToBeSelected 
 */
export async function selectByIndex(ddLocator, indexToBeSelected) {
    await ddLocator.selectOption({index: indexToBeSelected});
}

export async function scrollThePage(page) {
    await page.evaluate(()=>{
        //window.scrollBy(0, 5000);
        window.scrollBy(0, window.document.body.scrollHeight);
        //window.document.body.scrollHeight - will find the height of window
    })
}