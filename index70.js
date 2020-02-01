//Use while structure to only sum odd numbers between 0 and 1000

let i = 0;
let sum = 0;
while(i<1000){
    if(i%2!==0){
       console.log(`Odd number:${i}`);
       sum +=i;
    }
    i++; 
}console.log(`sum:${sum}`);
 
        
