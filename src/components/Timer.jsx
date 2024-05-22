import React, { useState } from 'react'

const Timer = () => {
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [hours,sethours]=useState(0);
    const [timerId,settimerId]=useState(null);

  function handleReset()
  {
    setMinutes(0);
    setSeconds(0);
    sethours(0);
    if(timerId)
        {
          clearInterval(timerId);
          settimerId(null);

        }
    
  }

  function handleStart()
  {
    if(timerId)
        {
            clearInterval(timerId);
            settimerId(null)
        }
    
    let newtimerId=setInterval(() => {
        setSeconds((prevSeconds)=>
        { 
            if(prevSeconds===59)
                {
                    setMinutes((prevMinutes)=>
                    {
                        if(prevMinutes===59)
                            {
                               
                                setSeconds(0);
                                setMinutes(0);
                                sethours(prev=>prev+1);
                                return 0;
                            }
                            setSeconds(0)
                        return prevMinutes+1;
                    })
                   
                }
                return prevSeconds+1;

        })
        
    }, 1000);

    settimerId(newtimerId)
  }

  function handlePause()
  {
    if(timerId)
        {
            clearInterval(timerId);
            settimerId(null)
        }
  }

  function formatTime(time)
  {
    return time.toString().padStart(2,"0");
  }

    


  return (
    <>
    <div>
        
        <span>
{formatTime(hours)}:
        </span>
        <span>
           {formatTime(minutes)}:
        </span>
        <span>
           {formatTime(seconds)} 
        </span>
    </div>
    <button onClick={handleStart} disabled={timerId}>Start</button>
    <button onClick={handlePause} disabled={!timerId}>Pause</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Timer