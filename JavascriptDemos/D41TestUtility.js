import {pi, calculateArea, addition, multiplication} from "./D40MathsUtility.js"
import { StudentData } from "./StudentUtility.js";
// ./ --> Current folder

console.log("PI: " + pi);


console.log("Area: " + calculateArea(5));
addition(10, 20);
multiplication(5, 7);

let s1 = new StudentData(101, "Rishi");
s1.displayData();