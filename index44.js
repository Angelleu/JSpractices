//Solution 1
const text ='HELLO';
const result1 = text.charAt(4);
const result2 = text.charAt(3);
const result3 = text.charAt(2);
const result4 = text.charAt(1);
const result5 = text.charAt(0);
const finalResult =result1.concat(result2,result3,result4,result5);
console.log(`the final result is: ${finalResult.toLowerCase()}`);


//Solution 2
/*const text = "HELLO"; //5 letters --->you can change text into any other text.
var result = ""; //memoization (temp)
var i; //Initialization
for (i = text.length -1; i >=0; i--) {
    console.log("Acumulator: ", i)
    console.log(`Text value when ${i}: ${text[i]}`)
    result +=text[i] //Concatenate as we iterate
}
console.log("the final result is: ",result.toLowerCase());*/

//Solution 3
/*const text1 = "HELLO"; // 5 letters
var text2 = text1.split(''); //manipulating text1
console.log(`Text1: ${text1} is of type ${typeof text1} - Text2 ${text2} is of type ${typeof text2}`);
var result2 = text2.reverse(); //reverting the temporary value
console.log(`Result2 ${result2} is of type ${typeof result2}`);
var result3 = result2.join('') //manipulating the reverted value
console.log("the final result is: ",result3.toLowerCase(), typeof result3, typeof result3.toLowerCase());*/
