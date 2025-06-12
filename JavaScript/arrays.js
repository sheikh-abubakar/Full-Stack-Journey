//js arrays are resizable
//mixed datatypes
//they are not assosiative array arrays elements can nnot excess using arbitrary strings
//0 base index
//js made bydefault shallow copy

const myArr = [0, 1, 2, 3, 4]

const myArr2 = ["apple", "mago"]

const myArr3 = new Array(1, 2, 3)


//Array Methods
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

//shift, unshift

//to check key value

console.log(myArr.includes(2)); // boolean type
console.log(myArr.indexOf(2)); 
console.log(myArr.indexOf(7)); // -1 if not found	 

//join binds the array and convert it into str

const newArr = myArr.join()
console.log(newArr); // "0,1,2,3,4"
console.log(typeof newArr); // string


/* splice & slice 
important

slice just returns a copy of the array and do not include last end point
splice changes the original array and returns the removed elements
*/


console.log("Arr1: ", myArr);

const slicedArr = myArr.slice(1, 3)
console.log("Arr2: ", slicedArr);

const splicedArr = myArr.splice(1,3)
console.log("Arr3: ", myArr);
console.log("Arr4: ", splicedArr);


//concat
//spread ...(more professional)

const StrArr1 = ["a", "b", "c"]
const StrArr2 = ["d", "e", "f"]

const newStrArr = [...StrArr1, ...StrArr2]
console.log(newStrArr);

//flat =>return a single array for nested arrays

console.log(Array.isArray("Abubakar"));//false

console.log(Array.from("Abubakar"));


//of => returna set of element as an array
//Array.of()