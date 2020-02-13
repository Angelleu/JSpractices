const ingredients=['Pork','Pomato','Chicken','Lettuce','Beef','Carrots','Cucumber'];

const vegetarian = []
for(var ingredient of ingredients) {
    if(['Tomato','Lettuce', 'Carrots','Cucumber'].includes(ingredient)) {
        vegetarian.push(ingredient)
    }
}

console.log(ingredients);
console.log(vegetarian);