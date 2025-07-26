import React from 'react'
import {useMemo,useState} from 'react'


const Usememo = () => {
    const[number, setNumber] = useState(0)
    const[counter, setCounter] = useState(0)

    function cubeNum(num){
        console.log("calculatiion done")
        return Math.pow(num,3);

    }


    const result=useMemo(()=>{
        return cubeNum(number)
    },[number]);

   

  return (
    <div>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value) }
        }/>
            
        
        <h1>cube of the number : {result}</h1>
        <button onClick={()=>
            {
                setCounter(counter+1)
               
            }
        }>counter++</button>
        <h1>counter: {counter}</h1>
    </div>
  )
}

export default Usememo