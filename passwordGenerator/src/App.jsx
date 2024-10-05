import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (allowNum) str += "0123456789"
    if (allowChar) str += "!@#$^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      }
      setPassword(pass)

  }, [length, allowNum, allowChar, setPassword])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert(`Copied to Clipboard: "${password}"`)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, allowNum, allowChar, passwordGenerator])

  return (
    <>
     <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-60 text-orange-500 bg-gray-700">
     <h1 className='text-3xl text-center text-white mb-3'>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden my-5">
      <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder="Password" readOnly ref={passwordRef}/>
      <button className='outline-none bg-blue-700 text-white px-3 py-o.5 shrink-0' onClick={copyToClipBoard}>Copy</button>
     </div>
     <div className="flex text-sm gap-x-2 my-3">
      <div className="flex items-center gap-x-1">
        <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={allowNum} id="numberInput" onChange={() => {setAllowNum((prev) => !prev)}} />
        <label htmlFor="numberInput">Include Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={allowChar} id="charInput" onChange={() => {setAllowChar((prev) => !prev)}} />
      <label htmlFor="charInput">Include Characters</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
