var rect= require('./rectangle.js');

function solveRect(l,b){

   rect(l,b,(err, rectangle)=>{
       if(err){
           console.log("ERROR: ", err.message)
       }
       else{
        console.log("The area of the rectangle is "+ rectangle.area());
        console.log("The perimeter of the rectangle is "+ rectangle.perimeter());
        }
 });

    console.log("This statement is after 2 min delay");
}      

solveRect(2,4);