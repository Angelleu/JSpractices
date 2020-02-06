/*
let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix']
let Sorted_mutants = mutants.sort();
console.log('Sorted mutants', Sorted_mutants)
let Reverse_S_mutants = Sorted_mutants.reverse()
console.log('Reversed mutants', mutants)
//  console.log(Reverse_S_mutants)
 let Join_muntants = mutants.join('* ')
 console.log('Joined mutants', Join_muntants)
 */
const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'
]
console.log('original list:', mutants)
let sorted_array=mutants.sort();
console.log('Sorted list:', mutants)
let reversed_array = sorted_array.reverse();
console.log('Reversed list: ', mutants)
let joined_array = reversed_array.join(' * ');
console.log('joined list:', joined_array);