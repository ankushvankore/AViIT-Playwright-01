/*
Recursive function / Recursion: Calling the function itself
*/

function trial() {
    console.log("Welcome to Function");   
    //trial(); 
}

trial();

function greet() {
    console.log("This is greet function!!!");    
}

function demo(){
    console.log("This is demo function!!!");
    greet();
}

demo();

let no = 1;

function increment() {
    no++;
    console.log(no);
    if(no <= 5){
        increment();
    }
}

increment();