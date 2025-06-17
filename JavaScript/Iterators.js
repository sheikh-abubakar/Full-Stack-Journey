// For Of loop

const arr = [1, 2, 3, 4]

for (const num of arr) {
   //console.log(num);
    
}

const greatings = "hello"

for (const str of greatings) {
   // console.log(`char is : ${str}`);
    
}

//Maps => object
//key value paires
//not iterables
const map = new Map()
map.set('PAK', "Pakistan")
map.set('TUR', "Turkey")

//console.log(map);


for (const key of map) {
    //console.log(key);
    
}
for (const [key,value] of map) {//de structuring
   // console.log(key, ':' , value);
}

const obj = {
    game1 : "NFS",
    'game2' : "GTA"
}
//objects are not iterable

const myobj = {
    js : 'jacascript',
    py: 'python'
}

//for in loop for objects

for (const key in myobj) {
  //console.log(key);
  
}
//for values

for (const key in myobj) {
 // console.log(`${key} is for ${myobj[key]}`);
  
}

//forin loop for arrays return keys as index


/*  ***For Each Loop*** */

const language = ["js", "ruby", "cpp", "py"]
//callback function odes not have name
language.forEach( function (val){
    //console.log(val);
    
} )

language.forEach( (val, index, arr) =>{
    console.log(val, index, arr);

} )