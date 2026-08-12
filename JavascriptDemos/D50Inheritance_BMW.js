import { Car } from "./D49Inheritance_Car.js";

class BMW extends Car{
    autoStart(){
        console.log("BMW can auto start...");        
    }
}

let b1 = new BMW();
b1.applyBreak();
b1.start();
b1.stop();
b1.refuel();
b1.autoStart();

console.log("------------------------------------------------");

class Audi extends Car{
    autoGear(){
        console.log("Audi has Auto Gear....");        
    }
}

let a1 = new Audi();
a1.applyBreak();
a1.start();
a1.stop();
a1.refuel();
a1.autoGear();
//a1.autoStart();     //TypeError: a1.autoStart is not a function
