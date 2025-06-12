// const score = 100
// console.log(score);

// const num = new Number(100)// clealry confirsm type cast
// console.log(num);

// console.log(num.toString().length);
// console.log(num.toFixed(2)); //upto two decimal places 

// const secondNum = 123.8976
// console.log(secondNum.toPrecision(3));

// const num3 = 100000
// console.log(num3.toLocaleString('en-IN'));

//Maths 
//its library included by default

//console.log(Math);


console.log(Math.abs(-4));
console.log(Math.round(4.6)); //rounds to nearest integer


//ciel , floor, trunc min, max etc

//random 

console.log(Math.random()); //gives random number between 0 and 1


const min = 10
const max = 15

console.log(Math.floor(Math.random()*(max-min+1)+min)); //gives random number between min and max
