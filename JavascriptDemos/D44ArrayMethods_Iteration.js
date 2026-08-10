/*
For iteration over array apart from for-of loop and for-in loop couple of 
more method / loop are provided
1. foreach() - it accepts callback function but break is not allowed inside the function
2. some() - it accepts callback function but break is not allowed inside the function
            but return true is allowed to terminate the function
*/

let days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

for(let d of days){
    console.log(d);
    
    if(d.includes('Thr')){
        console.log('Found!!!');
        break;
    }
}

console.log("---------------- for each loop --------------");
//foreach() method of array
/*
forEach() accepts callback function as a parameter
here (d)=>{} is a function and d is a parameter to this arrow function
break can not be added inside foreach function
*/
days.forEach((d)=>{
    console.log(d.toUpperCase());    
    
    if(d.includes('Wed')){
        break;          //SyntaxError: Illegal break statement
    }
})


console.log("------------- some() ---------------");
let browsers = ['Chrome', 'Edge', 'Firefox', 'Safari', 'Internet Explorer', 'Opera'];

browsers.some((br)=>{
    console.log(br);    
    
    if(br.includes('Internet Explorer')){
        //break;          //SyntaxError: Illegal break statement
        return true;
    }
})