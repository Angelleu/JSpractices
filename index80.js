/*Copy and paste the code from exercise 70
Refactor the code to use do/while instead of while*/

let i = 0;
let sum = 0;
do{
    if(i%2!==0){
       console.log(`Odd number:${i}`);
       sum +=i;
    }
    i++; 
}
while(i<1000){
    console.log(`sum:${sum}`);
}