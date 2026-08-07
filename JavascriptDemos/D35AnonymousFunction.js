/*
Anonymous Function : This is the function which do not have any name.
Rather we are using Function Expression syntax to store and call such a function
*/

let fun1 = function(){
    console.log("This is anonymous function");    
}
fun1();
console.log("Type: " + typeof fun1);

/**
 * 
 * @param {number} no 
 */
let oddEven = function(no){
    if(no % 2 === 0){
        console.log("This is even no");        
    }
    else{
        console.log("This is Odd no");
    }
}
oddEven(77);