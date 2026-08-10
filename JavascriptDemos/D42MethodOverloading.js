/*
Polymorphism -
Where one method / message can be reused in multiple ways
One method => Different execution

Purpose:
Method Reusiblity

Examples
1. Login
    a. login with un & ps
    b. login with un, ps & otp
    c. login with google account
2. Payment gateway
    a. via upi
    b. cash
    c. credit card
    d. debit card

Method overloading:
    These are methods with same name and different signature
    Signature:
    1. No of parameters
    2. Data type of parameters
    3. Sequence of parameters

JS is interpreted language where every decision will be taken during execution.
Compilation phase is not availabe in JS thats why JS dosent support for method overloading
*/

/*function display(){
    console.log("Display function!!!");
}
function display(no){
    console.log("Second Display function!!!");
}
display();*/

class TestLogin{
    login(){
        console.log("This is plain login method!!!");        
    }
    login(un, ps){
        console.log("Login using user name: " + un + " and password: " + ps);        
    }
    login(un, ps, otp){
        console.log("Login using user name: " + un + " and password: " + ps, " OTP: " + otp);        
    }

    //JS Will always call "LATEST UPDATED Method"
}

let t1 = new TestLogin();
t1.login();
t1.login("test", "test123");

function tryLogin(){
    //arguments - is actualy array that holds information about all the arguments (parameters)
    if(arguments.length === 0){
        console.log("Default Login");        
    }
    else if(arguments.length === 2){
        console.log("Login using username and password");
        console.log("User Name: " + arguments[0]);
        console.log("Password : " + arguments[1]);
    }
    else if(arguments.length === 3){
        console.log("Login using username, password and OTP");
        console.log("User Name: " + arguments[0]);
        console.log("Password : " + arguments[1]);
        console.log("OTP      : " + arguments[2]);
    }
}

tryLogin();
console.log("----------------------");
tryLogin("test", "test123");
console.log("--------------------------");
tryLogin("admin", "admin123", 1234);