import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Footer = () => {
    const {phone}=useContext(Appcontext);
  return (
    <div>
        <h1>footer</h1>
        <h2>phone:{phone} </h2>
    </div>
  )
}

export default Footer