/*
How data is placed in memory and how can we access it we catagorized datatypes mainly in two forms

1)Primitive(call by value)
7 types:
string, number, boolean, null, undefined, symbol, BigInt

2)Non-Primitive(by Reference)
Array, Object, functions

*/

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id === anotherId)// it means is akways give different values for symbol

//Arrays

const heroes = ["shaktiman", "qauide azam"]

//objects

let my obj = {
    name: "abubakar",
    age: 21
}

//function

const myFunc = function(){}