export class StudentData{
    constructor(rollNo, stName){
        this.rollNo = rollNo;
        this.stName = stName;
    }

    displayData(){
        console.log("Student Name: " + this.stName);
        console.log("Roll No     : " + this.rollNo);
    }
}