const mutants=['Professor X'
    ,'Cyclops'
    ,'Iceman'
    ,'Angel'
    ,'Magneto'
    ,'Beast'
    ,'Phoenix'
    ,'Logan'
    ,'Gambit'];

const newArray=mutants.filter(function(mutant){
    return mutant!=='Magneto'
    && mutant!=='Iceman' && mutant!=='Gambit';
});
console.log(newArray);