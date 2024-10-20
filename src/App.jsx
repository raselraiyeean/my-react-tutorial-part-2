import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counter from './counter'
import Counter from './counter'
import Team from './team'
import Users from './users'

function App() {
  function handleClick() {
    alert('Button Clicked!');
  }
  const addToFive = (num) => {
    alert(num+5);
  }

  return (
    <>
      
      <h3> React Core Concepts-2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => addToFive(6)}>Add</button>
    
    </>
  )
}

export default App
