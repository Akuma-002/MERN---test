import React from 'react'
import { useState } from 'react';
const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        console.log("hello ", name)
        setName('')
      }}>
        <input onChange={(e)=>{setName(e.target.value)}} value={name} className="bg-amber-600 " type="text" placeholder='Enter your name ' />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App