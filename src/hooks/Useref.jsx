import React, { useEffect, useState,useRef } from 'react'


const Useref = () => {

    // const [value, setValue] = useState(0)
    // const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     setCount(prev=> prev+1)
    // },[])

    const count=useRef(0);
    const inputelem=useRef()
    inputelem.current.style.border="none";
    const btnclicked=()=>{
        console.log(inputelem.current.value);
        inputelem.current.style.background==="red"? inputelem.current.style.background="green":inputelem.current.style.background="red"
        
    }
    // useEffect(()=>{
    //     count.current = count.current + 1
        
    // });
    

  return (
    <div>
        {/* <button onClick={()=>{setValue(prev=> prev-1)}}>-1</button>
        <h1>{value}</h1>
        <button onClick={()=>{setValue(prev=> prev+1)}}>+1</button>
        <h1>render count: {count.current}</h1> */}

        <input type="text"  ref={inputelem}/>
        <button onClick={btnclicked}>clik me</button>
    </div>
  )
}

export default Useref