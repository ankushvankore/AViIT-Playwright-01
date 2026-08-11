/*
Abstraction - process of identifying key aspects of an entity and    
                ignoring the rest
            While creating any object we consider only those properties
            those are required for creating this object.
--------------------------------------------------------------------------
Encapsulation - Process of hiding the data of your object and you can access
                this data via a public interface ie. method

To hide any member just use #
To access such members always use getter and setter method
*/

class User{
    uId;
    uName;
    #password;

    constructor(id, nm){
        this.uId = id;
        this.uName = nm;
    }

    setPassword(p){
        this.#password = p;
    }

    getPassword(){
        return this.#password;
    }

    displayUser(){
        console.log("User ID  : " + this.uId);
        console.log("User Name: " + this.uName);

    }
}


let u1 = new User(897, 'Trupti');
u1.setPassword("test@123");
u1.displayUser();

console.log("-------------------");

console.log(u1.uId);
console.log(u1.uName);
console.log(u1.password);
console.log(u1.getPassword());


