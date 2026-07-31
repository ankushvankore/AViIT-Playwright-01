/*
Operations that can be performed on array
1. Insert element
2. Remove element
3. Modify element
4. Search element

Methods: 
1. push() - will add the element at the end of array, you can add multiple elements at a time
2. unshift() - Will add the element at the start of array (at 0th position)
3. pop() - Will remove and return the element at the end
4. shift() - Will remove and return the element at the 0th position
5. join() - Adds all the elements of an array into a string, separated by the specified separator string.
6. concat() - Will combine two arrays
7. reverse() - Will reverse an array
*/

console.log("--------------- Adding Element to Array -------------");
let colors = ['Red', 'Blue', 'White'];
console.log(colors);
colors.push('Yellow');

//push() - Appends new elements to the end of an array, and returns the new length of the array.
console.log("---------------- After adding Yellow------------");
console.log(colors);

let newLength = colors.push('Green', 'Off White');
console.log("------------- After adding 2 elements --------------");
console.log(colors);
console.log("New length of array: " + newLength);

console.log("---------------- Add element at Bigining --------------");
colors.unshift("Black");
console.log(colors);

console.log("---------------- Adding multiple elements at start ----------------");
colors.unshift("Pink", 'Orange');
console.log(colors);

console.log("------------ Removing element at end ---------------");
let removedColor = colors.pop();
console.log("Removed Color: " + removedColor);
console.log(colors);

let arr = [];
let ele = arr.pop();
console.log(ele);

console.log("------------- Removing element at start -------------");
removedColor = colors.shift();
console.log("Removed color: " + removedColor);
console.log(colors);

console.log("----------------- join() method -------------------");
let arr1 = ['Welcome', 'To', 'Javascript', 'Sessions'];
let s1 = arr1.join();
console.log(s1);

let s2 = arr1.join(" ");
console.log(s2);

console.log("--------------------- Coping Array using spread operator(...) ---------------");

let arr2 = [1, 2, 3];
let arr3 = [...arr2];
//Here arr2 will be copied in to arr3
console.log(arr3);

let arr4 = [4, 5, 6];
let arr5 = [...arr2, ...arr4];
console.log(arr5);

let arr6 = arr2.concat(arr4);
console.log(arr6);

console.log("------------------------ Reverse an Array -----------------");
arr6.reverse();
console.log(arr6);

console.log("------------- Reverse array using logic ---------------");
let numbers = [1, 2, 3, 4, 5, 6];
let reverseArray = [];

for(let i = numbers.length-1; i >= 0; i--){
    reverseArray[i] = numbers[numbers.length-1-i];
}
console.log(reverseArray);

let str = "Vibhavari";
let str1 = "";

for(let i = str.length-1; i >= 0; i--){
    str1 += str[i];
}
console.log(str1);
