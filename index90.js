/*Copy and paste the code from exercise 80
Refactor the code to use for instead of do/while*/

let sum = 0;
for(let i =0; i<1000;i++){
    if(i%2!==0){
       console.log(`Odd number:${i}`);
       sum +=i;
    }   
    
}console.log(`sum:${sum}`);


 