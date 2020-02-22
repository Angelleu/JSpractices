const arithmetic ={
    add:function(number1,number2){
         if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
    console.log("Please enter only numbers")
    return number1+number2;
     
}
    },
    subtract:function(number1,number2){
        if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
            console.log("Please enter only numbers")
        return number1-number2;
        }
    },
    multiply:function(number1,number2){
        if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
            console.log("Please enter only numbers")
        return number1*number2;
        }
    },
    divide:function(number1,number2){
        if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
            console.log("Please enter only numbers")
        return number1/number2;
        }
    },
    remainder:function(number1,number2){
        if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
        console.log("Please enter only numbers")
        return number1%number2;
        }
    }
    
}

console.log(arithmetic.add('2',10));
console.log(arithmetic.subtract('10',5));
console.log(arithmetic.multiply(3,100));
console.log(arithmetic.divide(40,2));
console.log(arithmetic.remainder(20,2));