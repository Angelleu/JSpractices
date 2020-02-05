/*Copy and paste the code from exercise 83
Refactor the code to use for instead of do/while*/


let star="*************";
for(let line=13;line>1;line--){
    
    star=star.slice(0,star.length-1);
    console.log(star,star.length);
   
    
} 
