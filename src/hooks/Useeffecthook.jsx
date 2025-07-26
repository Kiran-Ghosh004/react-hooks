import React from 'react'
import { useEffect ,useState} from 'react'

const Useeffecthook = () => {

    const [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
          setCount(count=> count + 1);
        }, 2000);
    },[])

  return (
    <div>
        <h1>i have rendered {count} times</h1>
        
    </div>
  )
}

export default Useeffecthook