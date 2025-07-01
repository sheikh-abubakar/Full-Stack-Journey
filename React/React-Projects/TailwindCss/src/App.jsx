import {useState} from "react"

function App() {
  const [color, setColor] = useState("yellow")

  return (
 <div className = "w-full h-screen duration-200" style={{backgroundColor: color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 rounded-2xl">
 
      <button onClick={() => setColor("red")} className="px-4 " style={{backgroundColor: color}}>RED</button>
 
      <button onClick={() => setColor("pink")}> PINK</button>
 
    </div>
 
  </div>
 
 </div>
  )
}

export default App
