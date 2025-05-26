import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data);
  }
  return (
    <div>
      <button onClick={getData} className='rounded bg-green-500 text-white'>Get Data</button>
      {data.map((e, idx)=>{
        return(
          <>
          <div key={idx}>
            <h1>Name - {e.author}</h1>
            <img src={e.download_url} alt="Photo" />
          </div>
          </>
        )
      })}
    </div>
  )
}
export default App