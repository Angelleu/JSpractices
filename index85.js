/*Copy and paste the code from exercise 75
Refactor the code to use do/while instead of while*/

let f=0;
let f1=-1;
let f2=1;
var i=1;
do{f=f1+f2;
    f1=f2;
    f2=f;
    i++;
    console.log(f);
}
while(i<=10){
    
}