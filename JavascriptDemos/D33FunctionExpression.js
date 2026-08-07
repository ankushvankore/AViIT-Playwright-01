/*
Function Expression
JS allows to store function inside any variable
Such a function is called as Function Expression
Such functions can be called only via the variable
Type of such variables will be function
*/
console.log("--------------- Function Expression Syntax ----------------");

let test1 = function displayData(browser, version){
    console.log("Browser Name: " + browser);
    console.log("Version     : " + version);    
}

//displayData("Chrome", 138);       ReferenceError: displayData is not defined
//test1("Firefox", 140);
console.log("Type: " + typeof test1);

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 */

let test2 = function findMax(n1, n2) {
    if(n1 > n2){
        return n1;
    }
    else{
        return n2;
    }
}
//findMax(10, 20);
console.log("Max: " + test2(6, 8));