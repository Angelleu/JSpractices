/*Copy and paste the code from exercise 73
Refactor the code to use do/while instead of while*/

let line=13;
let star="*************";
do{
    console.log(star,star.length);
    star=star.slice(0,star.length-1);
    line--;
}
while(line>0){
    
}