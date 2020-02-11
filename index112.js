const showNumber=function(start,end){
    if(!Number.isInteger(start) || !Number.isInteger(end)) {
        console.log("Please enter only numbers")
        return 
    }
    
    if (start>end){
        for(let i=start; i>=end ;i--){
                console.log(i);
            }
    }else if(start<end){
        for(let i=start; i<=end ;i++){
            console.log(i);
        }
    }else if(start===end){
        console.log(`The numbers are the same.`);
    }
}
showNumber(0,50);
console.log("--------------------")
showNumber(50,0);
console.log("--------------------")
showNumber(100,100);
console.log("--------------------")
showNumber("100",300);
