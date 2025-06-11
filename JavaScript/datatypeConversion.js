let score = "33" //try with string . alphanumeric, boolean, undefined, null etc

console.log(typeof score)
console.log(typeof (score))

let valueInNum = Number(score)

console.log(typeof (valueInNum))

console.log(valueInNum);

//"33" => 33
//"33abc" => NaN(not a number)
//true => 1


let isLogged = 1

let InBoolean = Boolean(isLogged)

console.log(typeof InBoolean);

console.log(InBoolean);

//"" => false


/* *****operations******  */


let val = 3
let negVal = -val
console.log(negVal);

//(2**3) => 2 to the power 3

let str1 = "hello"
let str2 = " abubakar"
let str3 = str1 + str2

console.log(str3);

//if string comes first then it will treat stribgs all parameters
//if strig comes on last then it will do opeartions on fisrt then the rest

// you are advised not to perform such conversions
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);
console.log(+"");




