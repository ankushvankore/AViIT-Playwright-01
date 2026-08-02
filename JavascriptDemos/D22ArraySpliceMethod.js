/*
splice() is used to insert or remove the elements anywhere in an array
syntax: splice(start_index, no_of_elements_to_deleted, elements_to_be_insert)
*/

let fruits = ['Apple', 'Banana', 'Grapes', 'Mango', 'Orange'];
//Index         0        1           2        3        4

let deletedFruit = fruits.splice(2, 1);
//Will remove 1 element starting from index 2 ie. Grapes
console.log(deletedFruit);
console.log(fruits);

//[ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits.splice(1, 2);
//Will remove 2 elements starting from index 1 ie. Banana & Mango
console.log(fruits);

//[ 'Apple', 'Orange' ]
console.log("-------------- Insert Elements after Apple --------------");
fruits.splice(1, 0, 'Gawa');
//Will insert element after Apple will remove nothing
console.log(fruits);

//[ 'Apple', 'Gawa', 'Orange' ]
console.log("------------- Insert 2 elements after Gawa ----------");
fruits.splice(2, 0, 'Jackfruit', 'Kiwi');
console.log(fruits);

//[ 'Apple', 'Gawa', 'Jackfruit', 'Kiwi', 'Orange' ]
//     0        1         2          3       4
//     -5       -4       -3         -2      -1

console.log("------------- Remove last 1 element --------------");

fruits.splice(-1, 1);
//Start from -1 and delete 1 element
console.log(fruits);
//[ 'Apple', 'Gawa', 'Jackfruit', 'Kiwi' ]
//   -4        -3      -2           -1

console.log("------------- Remove last 2 element --------------");

fruits.splice(-3, 2);
console.log(fruits);
//[ 'Apple', 'Kiwi' ]

fruits.splice(1, 0, 'Jackfruit', 'Orange', 'Strobary');
console.log(fruits);

//[ 'Apple', 'Jackfruit', 'Orange', 'Strobary', 'Kiwi' ]
//Replace Orange with Pineaple
console.log("------------- Replace Orange with Pineapple ---------");
fruits.splice(2, 1, "Pineapple");
//Will remove one element at position 2 and will add Pinapple at the same position
console.log(fruits);
