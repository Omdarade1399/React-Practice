import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)
  
  const addValue = () => {
    if(counter >= 0 && counter <= 19){
    setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter <= 20 && counter >= 1){
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>My New App</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
