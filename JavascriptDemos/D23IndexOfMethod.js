/*
indexOf() from array will return the index of any element from array
Returns the index of the first occurrence of a value in an array, 
or -1 if it is not present.
*/

let days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
let index = days.indexOf('Thr');
console.log("Index of 'Thr': " + index);

let index2 = days.indexOf("Friday");
console.log("Index of 'Friday': " + index2);    //-1 

console.log("---------------------------------------------");

let students = ['Gaurav', 'Amita', 'Trisha', 'Amita', 'Pooja', 'Banty', 'Vibhavari'];
console.log("Index of 'Trisha': " + students.indexOf('Trisha'));
let index3 = students.indexOf("Amita");
//Will find the first occurance
console.log("Index of 'Amita': " + index3);

console.log("----------------- Find 2nd Occurance ----------------");
//Find the index from index 1 (Means 2nd position)
//let nextIndex = students.indexOf("Amita", 1);
let nextIndex = students.indexOf("Amita", students.indexOf("Amita") + 1);
console.log("2nd Occurance: " + nextIndex);
