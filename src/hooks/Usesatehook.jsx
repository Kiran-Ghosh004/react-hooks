import React, { useState } from 'react'

const Usesatehook = () => {

    // const [count, setCount] = useState(0)
    // const handlechange = () => {
    //     setCount(count + 1)
    // }
   const [color,setcolor]=useState('red');
   const changecolor=()=>{
    setcolor(color==='red'?'blue':'red');
    console.log(setcolor);
   }


  return (
    // <div>
    //     in have been clicked {count} times
    //     <button onClick={handlechange}>click</button>
    // </div>
    <div>
        <h1>
            my favorite color is {color}!
        </h1>
        <button onClick={changecolor}>blue</button>
    </div>
  )
}

export default Usesatehook