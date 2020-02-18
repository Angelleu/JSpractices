const tripExpenses=[3500,40000,8000];
const budget=tripExpenses.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
});

console.log(`hotel: ${tripExpenses[tripExpenses.length-3]}, 
trip: ${tripExpenses[tripExpenses.length-2]}, 
meals: ${tripExpenses[tripExpenses.length-1]}`);
console.log(`Total trip bugdet ${budget}`);