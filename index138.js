const mutants=['Professor X','Cyclops','Iceman',
'Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

const newMutants=mutants.map(function(mutant){
    return mutant.toString();
})
if(mutants.indexOf('Professor X')>-1 
&& mutants.indexOf('Logan')>-1
&& mutants.indexOf('Phoenix')>-1 
 && mutants.indexOf('Gambit')>-1){
    console.log(`<3`,mutants.toString());
    /*console.log(`<3`,'Professor X');
    console.log(`<3`,'Logan');
    console.log(`<3`,'Phoenix');
    console.log(`<3`,'Gambit');*/
}
console.log(newMutants.toString());

