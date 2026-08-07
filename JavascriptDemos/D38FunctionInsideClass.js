/*
JS Allows developers to create a function inside any class
Rule: You should not use function keyword
*/

class StudentData{
    //Class level variables / members of class
    rollNo;
    stName;
    constructor(rn, nm){
        this.rollNo = rn;
        this.stName = nm;
    }
    displayData() {
        console.log("Student Roll No: " + this.rollNo);
        console.log("Student name   : " + this.stName);
    }
}

let s1 = new StudentData(123, "Rishi");
s1.displayData();

//console.log(s1.rollNo);
//console.log(s1.stName);


new StudentData(876, "Vaibhavi");
//No reference object, such objects are deleted by GC