import React, { useCallback, useState } from 'react'
import Header_callback_hook from './Header_callback_hook'


const Usecallbackhook = () => {

    const [count, setCount] =useState(0)

    const newFn=useCallback(()=>{

    },[setCount])
  return (
    <div>
        <Header_callback_hook newFn={newFn}/>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(prev=>(prev+1))
        }}>click</button>

    </div>
  )
}

export default Usecallbackhook