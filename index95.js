/*Copy and paste the code from exercise 85
Refactor the code to use for instead of do/while*/

let f=0;
let f1=-1;
let f2=1;
var i=1;
for(i=1;i<=10;i++){
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f);
}
