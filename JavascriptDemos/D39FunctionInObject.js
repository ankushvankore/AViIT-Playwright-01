let person = {
    pName: "Amita",
    salary: 20000,
    addess: 'Mumbai',

    printData: function(){
        console.log("Name: " + this.pName);
        console.log("Salary: " + this.salary);
        console.log("Address: " + this.addess);        
    },

    calculateSalary: function(){
        console.log("Net Salary: " + (this.salary + 5000));
        
    },
}

person.printData();
person.calculateSalary();