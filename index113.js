const getShapePerimeter=function(base,height){
    if((base+height)*2>100){
        console.log('The perimeter is too big');
        return 
    }else {
        console.log('The perimeter is fine');
    }
    if(base===height){
    return console.log(base*4,"is the shape perimeter");
    }else if (base!==height){
        return console.log(base*2+height*2,"is the shape of perimeter");
    }
}
getShapePerimeter(100,5);
console.log("-------------------")
getShapePerimeter(50,4);
console.log("-------------------")
getShapePerimeter(55,60);
console.log("-------------------")
getShapePerimeter(5,5);
console.log("-------------------")