/*
1. map() - apply transformation
2. filter() - filter array
3. reduce() - reduce array element sum of elements, avg of elelemtns 
*/

//map()
console.log("-------------------------- map() -----------------");

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sqArray = numbers.map((no)=>{
    return no * no;
})
console.log(sqArray);

//Single line execution

let cubeArray = numbers.map(no => (no * no * no));
console.log(cubeArray);

console.log("----------------- filter() ---------------");


let footerLinks = ['Advt Google', 'Google How search works', 'Google Business', 'Privacy', 'Google Tearms', 'Settings'];

console.log(footerLinks);

let updatedLinks = footerLinks.filter((l)=>{
    return l.startsWith('Google');
})

//OR

let newLinks = footerLinks.filter(l => l.startsWith("Google"));

console.log(updatedLinks);
console.log(newLinks);

console.log("----------------------- reduce() ----------------");
let marks = [45, 56, 67, 78, 89];

let sum = marks.reduce((sum, n1) => sum + n1);
console.log(sum);
