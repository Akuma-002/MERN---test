import React, { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Display } from './Components/Display'
const App = () => {
  const [user, setUser] = useState('Sahil')
  return (
    <>
      <Display/>
      <button className='btn' onClick={()=>{
        setUser("Sk")
      }} onDoubleClick={()=>{
        setUser("Sahil")
      }}>Click</button>
    </>
  )
}

export default App