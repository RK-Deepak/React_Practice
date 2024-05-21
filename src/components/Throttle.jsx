import React, { useCallback } from 'react'
import { useState,useMemo } from 'react';

const Throttle = () => {
    const [fire,setFire]=useState(0);

    const handleFire=()=>
        {
            setFire(prev=>prev+1);
        }

    
//    1 way-u can do like this
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

//2 way u can do ;ike this
   // const handleThrottleFn=(cb,delay)=>
        // {
        //     let lastExecutionTIme=0;
            
        //    return function(...args)
        //     {
        //        let currentExecutionTime=Date.now();

              
               
        //         if(currentExecutionTime-lastExecutionTIme>=delay)
        //             {
        //                 cb(...args);
        //                 lastExecutionTIme=currentExecutionTime;
        //             }
               
                  
               
        //     }

          
             
        // }

        // anyway of the below u can use
        // 1.useCallback will call handleThrottleFn
         const throttleFN=useCallback(handleThrottleFn(handleFire,3000),[])
//         During the initial render, useCallback invokes the provided function and memoizes its result.
// The memoized function becomes the value of useCallback and is stored in the variable.
// On subsequent re-renders, useCallback returns the memoized function stored in the variable, avoiding the need to recreate the function unless the dependencies array changes.
//         2.useMemo will call arrow fn which return handleThrottleFn 

// // const throttleFN=useMemo(()=>handleThrottleFn(handleFire,3000),[])
// Here's the sequence of events:

// During the initial render, useMemo invokes the provided function, () => handleThrottleFn(handleFire, 3000).
// Inside this function, handleThrottleFn(handleFire, 3000) is called, which returns a throttled function based on handleFire and 3000.
// This throttled function becomes the value of useMemo and is stored in throttleFN.
// On subsequent re-renders, useMemo will return the memoized value stored in throttleFN, ensuring that handleThrottleFn is not called again unless the dependencies array ([]) changes.
// This approach is useful when 

//const throttleFN=useCallback(()=>handleThrottleFn(handleFire,3000),[])---so donot use it;
// t will memoize the outer function, which is an arrow function wrapping the call to handleThrottleFn(). It won't memoize the inner function returned by handleThrottleFn().

// In this case, if you want to memoize the inner function returned by handleThrottleFn(), you should include handleThrottleFn itself as a dependency in the dependency array of useCallback. This ensures that a new version of the memoized callback is created only when handleThrottleFn changes.

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

