/*
Ladder if-else
Syntax:
if(condition){
    statement/s;
}
else if(condition){
    statement/s;
}
else if(condition){
    statement/s
}
*/
let n1 = 188, n2 = 256, n3 = 89;

if(n1 > n2 && n1 > n3){
    console.log(`${n1} is Maxumum!!!`);    
}
else if(n2 > n1 && n2 > n3){
    console.log(`${n2} is Maxumum!!!`);    
}
else{
    console.log(`${n3} is Maxumum!!!`);    
}

/*
Assignment
Check the purchase amount and calulate the discount and net amount
PA                  Dis
< 1000              2%
>= 1000 & <3000     5%
>= 3000 & < 5000    10%
>= 5000             15%
*/