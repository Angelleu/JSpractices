const mutants=['Professor X','Cyclops',
'Iceman','Angel','Beast','Phoenix','Logan',/*'Gambits'*/];

console.log(mutants.indexOf('Gambits'));

if(mutants.indexOf('Professor X')>-1 && mutants.indexOf('Logan')>-1){
    console.log(`We love X-Men`);
}
if(mutants.indexOf('Gambits')===-1){
    console.log(`X-Men sucks`);
}