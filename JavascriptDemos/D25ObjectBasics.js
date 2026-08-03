/*
Object - is key-value pair collection in Javascript
Every key in object is by default of type string

Ways to create object
1. Object Literal Way
2. Using Class (ES6)
3. Using constructor function
4. Prototype based object
*/
console.log("-------------- Object Literal ------------------");
let person = {};    //This will create your object
console.log(person);
console.log("Type: " + typeof person);

let user = {
    fName: 'Banty',
    lName: 'Nayak',
    age: 30,
    isActive: true
};

console.log(user);
console.log("Type: " + typeof user);

console.log("------------------ Accessing Elements ---------------");
/*
Elements can be accessed via
1. using . (dot) operator
2. using [] operator 
*/

console.log("User First Name: " + user.fName);
console.log("User Last Name : " + user.lName);
console.log("User's age     : " + user.age);
console.log("Is user active : " + user['isActive']);
console.log("Is user present: " + user.isPresent);  //undefined


console.log("-------------- Modify the Object ----------------");
user.isPresent = true;
user.city = "Kolkata";

console.log(user);

console.log("------------ Deleting the property -------------");
delete user.isPresent;
console.log(user);

console.log("----------------------- Iteration via for-in loop -----------------");

for(let key in user){
    console.log(key + " => " + user[key]);
}

console.log("---------- null reference ------------");
let student = {
    rollNo: 9,
    sName: 'Pooja'
};
console.log(student);

student = null;
console.log(student.sName); //TypeError: Cannot read properties of null (reading 'sName')
