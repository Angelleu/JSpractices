// Part1
const mutants=['Professor X','Cyclops',
'Iceman','Angel','Beast','Phoenix','Logan','Gambits'];

for(var i=0;i<mutants.length;i++){
    if(mutants.indexOf('Magneto')>-1){
        break;
    }else{console.log(mutants[i]);}
}

// Part2

console.log('Magneto is at :', mutants.indexOf('Magneto'), 'in the array');

for(var j=0;j<mutants.length;j++){
    console.log(mutants[j]);
}

