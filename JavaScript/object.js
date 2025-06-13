//object through constructor => singleton --->object.create

//object through Literal


// creatae symbol and use it as key

const mysym = Symbol("key1")

const User = {
    //can be keys(0/1/2..) or values(var)
    name : "abubakar",
    "full-name" : "Muhammad Aabubakar",//can only be accessed with bracket notation
    age : 21,
    location: "lahore",
    isloggedIn: false,
    [mysym] : "key2" //used square brackets to use symbol as key
}
//accessing object properties

console.log(User.name);

console.log(User["name"]);//more preferred way

console.log(User["full-name"])

console.log(User[mysym])

console.log(typeof [mysym])//object

console.log(typeof mysym)//symbol


//chnaage values

User.location = "punjab"

//to avoid changes
// console.log(User);

// Object.freeze(User)

//User.location = "karachi"




// User.greetings = function(){
//     console.log("hello");
    
// }

//refrece the same object in function

// User.greetings2 = function(){
//     console.log(`hello ${this.name}`);
    
// }

// console.log(User.greetings());
// console.log(User.greetings2());

/* singelton */

const User2 = new Object();

User2.id = "123abc"
User2.name = "Aabubakar"
User2.age = 21

//console.log(User2);


//join objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2} //nested object
//console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2) //merge objects
// console.log(obj3);

//spread

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(User));//return type will be array
// console.log(Object.values(User));//return type will be array
// console.log(Object.entries(User));//return type will be array


// console.log(User.hasOwnProperty("name"));//check if property exists


// Object Destructure and Json API

const course = {
    name:  "js",
    fee: 1000,
    instructor : "abubakar"
}

//better srcuture way

const {name} = course
//const {name: courseName} = course//can be renamed

console.log(name); //js
