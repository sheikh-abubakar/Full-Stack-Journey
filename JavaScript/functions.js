
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
