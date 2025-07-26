import { useState } from 'react'
import Usesatehook from './hooks/Usesatehook'
import Useeffecthook from './hooks/Useeffecthook'

import './App.css'
import Useref from './hooks/Useref'
import Usememo from './hooks/Usememo'
import Usecallbackhook from './hooks/Usecallbackhook'
import Profile from './components/Profile'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Usesatehook/>
  //  <Useeffecthook/>
    // <Useref/>
    // <Usememo/>
    // <Usecallbackhook/>
    <>
      <Profile/>
      <Footer/>
    </>



      
      
    
  )
}

export default App
