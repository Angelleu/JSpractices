var biggerNumber =function(firstNumber,secondNumber){
    console.log(firstNumber,secondNumber);
    if(firstNumber>secondNumber){

        return 'Number '+ firstNumber +' is bigger than'+ secondNumber;
    }
    else if(firstNumber==secondNumber){
        return 'Both numbers are '+firstNumber;
    }else{
        console.log(`Error! please input numbers again.`);
    }
}
console.log(biggerNumber(6,6));
