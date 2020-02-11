const revert=function(text){
    let test = ''
    for (let i = text.length -1; i >=0; i--) {
        //console.log("Acumulator: ", i)
        //console.log(`Text value when ${i}: ${text[i]}`)
        test+=text[i]//Concatenate as we iterate
    }
    console.log(test);
    
}
revert('hello');
revert('happy');
revert('Angel');

const revertWithJSFunctions = (text) => text.split('').reverse().join('')
console.log(revertWithJSFunctions('hello'));
console.log(revertWithJSFunctions('happy'));
console.log(revertWithJSFunctions('Angel'));


