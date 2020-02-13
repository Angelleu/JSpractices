const grades=[1,2,3,4,5,6,7,8,9,10];
const result=[];
for(var grade of grades){
    if([1,3,5,10].includes(grade)){
        result.push(grade);
    }
}
console.log(result);

