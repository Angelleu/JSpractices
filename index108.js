const sort=function(number1,number2,number3,highToLow){
    let arr =[number1,number2,number3]
    arr.sort((a,b) => highToLow ? b-a: a-b);
    return arr;
}
console.log(sort(10,8,25));
console.log(sort(10,8,25,true));