var rec= require('./rectangle.js');

function solveRect(l,b){

    if(l<=0 && b<0)
        console.log("Length and breadth can not be less than 0");

    else
        console.log("Perimeter = "+ rec.perimeter(l,b)+" and area is = "+ rec.area(l,b));
}

solveRect(2,4);