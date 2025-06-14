//Immediately Invoked Function Expressions IIFE
//some time global scope is not good for security might create issues

//syntax

(function fuct(name){
    console.log(`DB connected ${name}`);
    
})("mongo db");//use semicolon to end invoke

//cam use arrow function