//Arrow Function
//this refers current context

const user = {
    username : "abubakar",
    price : 999,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);//only work in object not only in stand alone function
        console.log(this);
        
    }
}
user.welcomeMessage()

console.log(this); //=>{}
//if above log run on broswer so global object window wil appear

//third way to declare function
//arrow function
// no need to type function keyword
const func = () => {
    let username = "abubakar"
    console.log(this);
    
}

//implicit return (do not use braces)

const sum = (a, b) =>  a + b // no need to write return

console.log(sum(2, 3)); //5
