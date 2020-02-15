const iceCreamFlavors=['Dark chocolate','Milk chocolate',
'Cherry','Raspberry','Straeberry','Green tea','Pistachio','Blue Moon','Vanilla','Milk'];
const darkChocolate=iceCreamFlavors.shift();
const milkChocolate=iceCreamFlavors.shift();
console.log(iceCreamFlavors);
console.log(iceCreamFlavors.length);
console.log('Removed item:',darkChocolate);
console.log('Removed item:',milkChocolate);