/*Show the following output using while:

*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************

*/


/*
for (var i = 7; i >= 1; i--) {
    var str = "";
    for (var j = i; j <= 7; j++) {
    str += "*";
       }
   console.log(str);
  }
*/
var str="";
while(str.length<15){
    
    str += "*";
    console.log(str,str.length);
}
/*
let str='';
while (str.length < 15){
    str = str + '*'
    console.log(str)
}
*/


