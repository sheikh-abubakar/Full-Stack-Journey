//filter returns value


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArr = numArr.filter( (num) => num > 4)//it wil return imicitly due to paranethisis
// console.log(newArr);

// wiith culry braces yo have o resturn explixitly with scope


//map => auto returns

// const newArr = numArr.map( (num) => num + 10)
// console.log(newArr);


//chaining => using multiple methods on same array

const newArr = numArr.map( (num) => num + 10)//it will pass its value to next map
                .map((num) => num+1)
console.log(newArr);

//Reduce


const nums = [1, 2, 3]


const result = nums.reduce( function(acc, curr) {
    console.log(`accumulator is : ${acc} and current value is : ${curr}`);
    return acc + curr    
}, 0)//0 is initial value of accumulator
//acc + curr will pass to acc for nextiteration

console.log(result);
