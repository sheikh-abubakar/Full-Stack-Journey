let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

//mo start from 0 in js

// let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toString());


//01 for onths in this case
let myCreatedDate = new Date("2024-01-23")
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); //gives time in milliseconds

//console.log(myCreatedDate.getTime()); //gives time in milliseconds

//impotant for interview

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000)); //gives time in seconds
console.log(Math.floor(myTimeStamp/(1000*60))); //gives time in minutes

let newdate = new Date();

console.log(newdate.getDay())


//to customize locale string

newdate.toLocaleString('default',{
    weekday: "long"
})