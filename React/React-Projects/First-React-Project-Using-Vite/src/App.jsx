import MyApp from './func.jsx';
import React, {useState} from 'react';
function App() {
  const user = "abubakar"
//in curly bracses we can write only evaluated js expression
  return (
    <> 
    <h1>hello World {user}</h1>
    <MyApp /> 
    </>
    
  )
}

function Counter(){

  let [count, setCount] = useState(0)
  
  const counter = ()=>{
    setCount(++count)
  }
  
  const resetCounter = () =>{
    setCount(0)
  }
  return (
    <>
    <h2>counter: {count}</h2>
    <button onClick={counter}>increment</button>
    <button onClick={resetCounter}>Reset</button>

    </>
  )
}

export default Counter
