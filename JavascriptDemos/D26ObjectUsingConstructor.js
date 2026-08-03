class StudentData{
    rollNo;
    sName;
    address;
    marks;
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



