import React from 'react'
import { useState } from 'react';
const Debounce = () => {
    const [fire,setFire]=useState(0);

    const handleFire=()=>
        {
            setFire(prev=>prev+1);
        }

        const handleDebounceFn=(cb,delay)=>
        {
                let timerId;
                
                return function(...args)
                {
                    if(timerId)
                        {
                            clearTimeout(timerId);
                            timerId=null;
                        }
                    const context=this;
                    
                    timerId=setTimeout(()=>
                    {
                         cb.apply(context,args)
                    },delay)
                }
        }

        const deboundeFN=handleDebounceFn(handleFire,1000);
  return (
    <div className='gun-parent'>
    <div className='gun-holder' onClick={deboundeFN}></div>
    <div className='bullet'></div>
    <span>{fire}</span>
</div>
  )
}

export default Debounce