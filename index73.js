/*var str="************";
while(str.length<13){
    str-="*";
    console.log(str,str.length);
}*/
let line=13;
let star="*************";
while(line>0){
    console.log(star);
    star=star.slice(0,star.length-1);
    line--;
}