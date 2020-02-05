/* Copy and paste the code from exercise 84
Refactor the code to use for instead of do/while*/

var str="";
for(str="";str.length<15;str+="*"){
    if(str.length%2!==0){
            console.log(str,str.length);
        }
}