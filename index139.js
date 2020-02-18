const numbers=[];
for(var i=0;i<=1000;i++){
    numbers.push(i)
}
const firstEvenNumber=numbers.filter(function(i){
        return i%2===0; 
   
}); console.log(firstEvenNumber.slice(0,20));

const lastOddNumber=numbers.filter(function(i){
    return i%2!==0;
});
console.log(lastOddNumber.slice(-10));