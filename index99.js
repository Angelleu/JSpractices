let times=1;

for(let number=0;number<1000;number++){
    if(times>20){
        break;
    }
    else if(number%2==0){
        console.log(number);
        times++;
    }
}