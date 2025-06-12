const name = "abubakar "

const repoCount = 10

console.log(name + "has " + repoCount + " repos"); //not good practse for concatinate

//we can use backticks for better readability in which we insert or values as a placeholder
//string interpulatiion
console.log(`My name is ${name} and I have ${repoCount} repos`); //template literals


//other way to declare str

const myname = new String ('abubakar')

console.log(myname[0]);
console.log(myname.__proto__); //gives prototype of the object

console.log(myname.length); //gives length of the string
console.log(myname.toUpperCase()); //converts to upper case
console.log(myname.charAt(2)); //converts to upper case
console.log(myname.indexOf('u')); //converts to upper case


//SLicing

const newStr = myname.substring(0,4) //4 is not include
console.log(newStr); //gives substring from 0 to 4
console.log(myname.slice(0,4)); //gives substring from 0 to 4
console.log(myname.slice(-4)); //gives last 4 characters
console.log(myname.slice(0, -4)); //gives substring from 0 to last 4 characters


//trim

const str = "   abubakar   "
console.log(str);
console.log(str.trim()); //removes spaces from start and end
console.log(str.trimStart()); //removes spaces from start


