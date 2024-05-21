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