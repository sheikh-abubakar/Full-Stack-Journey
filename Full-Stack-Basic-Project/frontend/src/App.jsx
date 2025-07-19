import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.error('Error fetching jokes:', error)
    })
  })

  return (
    <>
      <h1>Full Stack</h1>
      <p>jokes: {jokes.length}</p>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
