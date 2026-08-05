/*
Class - is a template for creating similler objects
Constructor - Special member function which get called after object is created
this - refers the current object / reference
*/
class StudentData{
    
    constructor(rn, sn, address, marks){
        this.rollNo = rn;
        this.sName = sn;
        this.address = address;
        this.marks = marks;
    }
}

let s1 = new StudentData(101, 'Vibhavari', 'Kolhapur', 90.6);
console.log(typeof s1);
console.log(s1);

console.log("Roll No: " + s1.rollNo);
console.log("Student Name: " + s1.sName);
console.log("Address: " + s1.address);
console.log("Marks: " + s1.marks);

let s2 = new StudentData(111, 'Gaurav', 'Indore', 88.9);
console.log(s2);



