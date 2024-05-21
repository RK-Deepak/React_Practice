import React, { useCallback } from 'react'
import { useState,useMemo } from 'react';

const Throttle = () => {
    const [fire,setFire]=useState(0);

    const handleFire=()=>
        {
            setFire(prev=>prev+1);
        }

    

        const handleThrottleFn=(cb,delay)=>
        {
            let flag=true;
            
           return function(...args)
            {
               if(flag)
                   {
                       cb(...args);
                       flag=false;
                       console.log(flag)

                       setTimeout(()=>
                        {
                             flag=true;
                             console.log(flag)
                        },delay)
                   }
                  
               
            }

          
             
        }

const throttleFN=useCallback(handleThrottleFn(handleFire,3000),[])

  return (
    <div className='gun-parent'>
    <div className='gun-holder' onClick={throttleFN}></div>
    <div className='bullet'></div>
    <span>{fire}</span>
</div>
  )
}

export default Throttle


//we use usecallback because 
// You're absolutely correct. The issue arises from the fact that the handleThrottleFn function is defined inside the component body. This means that every time the component re-renders, a new instance of handleThrottleFn is created, which results in the throttleFN function being recreated on every render, leading to incorrect behavior.

// // To fix this, we need to ensure that handleThrottleFn is only created once, regardless of how many times the component re-renders. We can achieve this by moving the definition of handleThrottleFn outside of the component body, so it's only created once when the component is initially loaded.

