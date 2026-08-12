/*
static Keyword
static keyword can apply to any variable or method
anything declared as static, means it is common for all the objects

for static members only single copy created per class, all objects will share the same copy
where as for non static members (Instance members) copy created per object

only static properties or methods can be called by classname
ClassName.method()

static members cannot be accessed via this reference, rather they needs to be asscessed 
via class name => ClassName.member

All static variables are stored in CMA (Common Memory Area)
*/
class Employee{
    empId;
    empName;
    static company;

    static setCompany(c){
        Employee.company = c;
    }

    constructor(id, nm){
        this.empId = id;
        this.empName = nm;
    }

    displayData(){
        console.log("Employee Id  : " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Company      : " + Employee.company);
        
    }
}
new Employee(111, 'Sarika');
//No Reference object - which will be deleted by Garbage Collector
let e1 = new Employee(123, "Rishi");
Employee.setCompany("HSBC");
e1.displayData();

console.log("------------------- 2nd Object -----------");

let e2 = new Employee(234, "Amita");
e2.displayData();

Employee.setCompany("HSBC Pvt. Ltd.");

console.log("------------- 3rd Object ------------------");
let e3 = new Employee(456, 'Bunty');
e3.displayData();

console.log("--------------- 1st Object -----------------");

e1.displayData();
