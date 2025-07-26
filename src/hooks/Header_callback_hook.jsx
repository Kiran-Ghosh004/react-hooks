import React from 'react'

const Header_callback_hook = () => {
    console.log("header rendered");
    
  return (
    <div>
        <h2>Header</h2>
    </div>
  )
}

export default React.memo(Header_callback_hook)