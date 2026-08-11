import { Vehicle } from "./D48InheritanceDemo.js";

class Car extends Vehicle{
    start(){
        console.log("Car can start...");
    }

    refuel(){
        console.log("Car can refuel...");
    }

    stop(){
        console.log("Car can stop...");
    }
}

let v1 = new Vehicle();
v1.applyBreak();
//v1.start();     //TypeError: v1.start is not a function

let c1 = new Car();
c1.applyBreak();
c1.start();
c1.refuel();
c1.stop();
