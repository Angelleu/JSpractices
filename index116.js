const getHexaColor=function(webColor){
    switch(webColor){
        case 'white':
        return '#FFFFF';
        break;
        case 'black':
        return '#00000';
        break;
        case 'blue':
        return '#0b24fb';
        break;
        case 'green':
        return '#0e7e12';
        break;
        case 'yellow':
        return '#fffd38';
        break;
        case 'pink':
        return '#fec1cc';
        break;

    }
}
console.log(getHexaColor('white'));
console.log(getHexaColor('black'));
console.log(getHexaColor('blue'));
console.log(getHexaColor('green'));
console.log(getHexaColor('yellow'));
console.log(getHexaColor('pink'));   