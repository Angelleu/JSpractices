let message ='3.14 it\'s a great number but 42 it\'s the answer to life.'
let pi = parseFloat(message);
console.log(pi);
let answerToLife = parseInt(message.substr(29,30));
console.log(answerToLife);
let result = pi+answerToLife;
console.log(`pi:${pi} \nanswerToLife:${answerToLife}`);
console.log(result.toString(),'is the result of adding pi and answerToLife');

//different way
//using split method to make message into an Array.
//
//message = message.split(' ');
//console.log(message);
//const pi = parseFloat(message[0]);
//console.log(pi);
//let answerToLife = parseInt (message[6]);
//console.log(answerToLife);