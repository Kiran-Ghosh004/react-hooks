import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Contact = () => {
    const {number}= useContext(Appcontext);
  return (
    <div>
        <h1>contact</h1>
        <h2>phone:{number} </h2>
    </div>

  )
}

export default Contact