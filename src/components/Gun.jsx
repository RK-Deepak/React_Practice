import React, { useState } from 'react'

const Gun = () => {

    const [fire,setFire]=useState(0);

    const handleFire=()=>
        {
            setFire(prev=>prev+1);
        }
    
  return (
    <div className='gun-parent'>
        <div className='gun-holder' onClick={handleFire}></div>
        <div className='bullet'></div>
        <span>{fire}</span>
    </div>
  )
}

export default Gun