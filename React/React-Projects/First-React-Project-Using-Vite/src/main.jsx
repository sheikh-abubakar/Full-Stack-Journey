import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import React from 'react'
import ReactDom from 'react-dom/client'
import Counter from './App.jsx'


//creating custom element

// const reactElement = React.createElement(
//   'a',
//   {href : 'https://google.com', target: '_blank'},
//   'click me to open'
// )
// {} it will treat its text as a variable
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Counter />
  </StrictMode>,
)
