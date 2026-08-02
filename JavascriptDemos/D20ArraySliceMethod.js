/*
Slicing is the technique via which you can get the part / piece of array
syntax: slice(start_index, end_index);  Element at end_index will be excluded
*/

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
//            0     1       2       3     4      5      6
console.log(days);

console.log(days.slice(0, 1));
//Will give you elements at 0 position
console.log(days.slice(0, 2));
//Will give you elements starting from 0 position till 1 position (2-1)

console.log(days.slice(2, 6));
//Will give you elements starting from 2 position till 5 position (6-1)
console.log(days.slice(6, 2));
//[] - End index cannot be less that start index

console.log(days.slice(5, days.length));

console.log(days.slice(-3));
//Will give you last 3 elements

console.log(days.slice(2));
//Will give you all elements from index 2
