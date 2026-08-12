/*
super keyword - used to access properties of base class in derived class
------------------------------------
Method Overriding - Run time polymorphism
These are the methods with same name and same signature in different classes 
which are in relationship (Interitance)
*/
class Employee{
    empId;
    empName;
    constructor(id, nm){
        this.empId = id;
        this.empName = nm;
    }
    displayData(){
        console.log("Employee Name: " + this.empName);
        console.log("Employee Id  : " + this.empId);    
    }
}

class Manager extends Employee{
    insentive;
    constructor(id, nm, ins){
        super(id, nm);      //This will call base class constructor
        this.insentive = ins;
    }

    displayData(){
        super.displayData();        //This will call base class method
        console.log("Insentive   : " + this.insentive);

    }
}

let m1 = new Manager(123, 'Gaurav', 50000);
m1.displayData();

let e1 = new Employee(111, 'Sagar');
e1.displayData();