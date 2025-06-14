
function func(){
    console.log("hello");
    console.log("world");
    
}


//func();

function addTwoNum(num1, num2){
    console.log(num1 + num2);
    
}

// addTwoNum(2,3)
// const result = addTwoNum(2,3);
// console.log(result); //undefined because function does not return anything

function addTwoNum(num1, num2){
    let result = num1 + num2;
    return result; //returning the result
    
}


const result = addTwoNum(2,3);
console.log(result);


function login(username){
    if(username === undefined){
        console.log("username is required");
        return        
    }
    else{
        return `${username} logged in successfully`;
    }
    
}

console.log(login());


//rest operator

function calValue(...num1){
    return num1
}

console.log(calValue(200, 300, 400));

const user = {
    name : "abubakar",
    price : 200
}

function handleObjects(Object){
    console.log(`username is ${Object.name} and price is ${Object.price}`);
    
}

handleObjects(user)

//another way

handleObjects({
    name : "Ali",
    price: 200
})

//similarly you can pass array in a function

//expression function

 sum1(5) //can access

function sum1(num){
    return num+1
}


sum(5) // can not access
const sum = function(num){
    return num+1
}

sum(3)