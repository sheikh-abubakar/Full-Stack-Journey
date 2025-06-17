// If Condition, else if, else

//== or ===

// 2=="2" // => true
// 2 === "2"//=> false

//nested Condition

// const balanace = 1000

// if(balanace < 500 ){
//     console.log("Low Balance");
// }
// else if (balanace < 750) {
    
// }
// else if (condition) {
    

//Switch Statement

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//falsy values
//false, 0, "", null, undefined, NaN
//truthy values
//"0", "false", " ", [], {}, function(){}, Infinity, -Infinity


//check object

// const obj = {}

// if (Object.keys(obj).length === 0) {
//     console.log("Object is empty");
    
// }


// Object keys are the property names of an object.
// Object values are the data stored in those properties.

//false == 0 =>true
//false == '' =>true
//0 == '' =>true

//Nullish Coalescing Operator (??) : null undefine
//sometimes we need two responses to handle special cases

let val1, val2
val1 = 5 ?? 20
val2 = null ?? 20//same for undefined

console.log(val1);
console.log(val2);

// //Ternary Operator`
// condition ?true : false
