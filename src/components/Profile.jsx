import React from 'react'
import Contact from './Contact'
import { useContext } from 'react';
import { Appcontext } from '../context/Appcontext';

const Profile = () => {
    const value= useContext(Appcontext);
    // const {name}= useContext(Appcontext);
  return (
    <div>
        <h1>Profile</h1>
        <Contact/>
        <h2>name:{value.name} </h2>
        {/* <h2>name:{name} </h2> */}

    </div>
  )
}

export default Profile