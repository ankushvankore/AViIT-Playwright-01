/*
Nested if - when there is sitution to check multiple condtions depending on each other
then you can use nested if-else
Syntax:
if(condition){
    Statement/s;
}
else{
    if(condition){
        statements;
    }
    else{
        if(condition){
            statement/s;
        }
        else{
            statement/s;
        }
    }
}
*/
let marks = 88;
if(marks >= 85){
    console.log("Grade: A");    
}
else{
    if(marks >= 60){
        console.log("Grade: B");        
    }
    else{
        if(marks >= 35){
            console.log("Grade: C");            
        }
        else{
            console.log("You are fail!!!");            
        }
    }
}