import React, { useEffect, useState } from 'react'

const CountDown = () => {

  //state for hours,minutes,seconds
  const [time,setTime]=useState({hours:"",minutes:"",seconds:""});
  //state for timer is running or not
  const [timerRunning,setTimerRunning]=useState(false);
//state for timerid for reset and pause
const [timerId,setTimerId]=useState(null);

//during unmounting
useEffect(()=>
{
     return ()=>clearInterval(timerId)
},[timerId])

function handleChange(e)
{
   const {name,value}=e.target;
   if (value.length <= 2 && /^\d*$/.test(value))
   {
    setTime(prevTime=>({ 
      ...prevTime,
      [name]:value.padStart(1,"0")
 }))
   }
   
}

function startTimer()
{
   if(!timerRunning)
    {
      setTimerRunning(true);
      setTimerId(setInterval(() => {
         updateTimer()
      }, 1000))
    }
}
function updateTimer()
{
setTime((prevTime)=>
{
  let {hours,seconds,minutes}=prevTime;

  //calculating totalSeconds OF ALL TIME
  let totalSeconds=(parseInt(hours) || 0)*3600 +(parseInt(minutes) || 0)*60 +(parseInt(seconds));
  if(totalSeconds>0) 
    {
      totalSeconds-=1;
    }
  //calculating totalhourse of all time
  hours=Math.floor(totalSeconds/3600).toString().padStart(2,"0");
  minutes=Math.floor((totalSeconds%3600)/60).toString().padStart(2,"0");
  seconds=(totalSeconds%60).toString().padStart(2,"0");

  if(totalSeconds===0)
    {
      clearInterval(timerId);
      setTimerRunning(false)
    }
    return {hours,minutes,seconds}
})
}

function pauseTimer()
{
  clearInterval(timerId);
  setTimerRunning(false)
}

function resetTimer()
{
  clearInterval(timerId);
  setTimerRunning(false)
  setTime({hours:"",minutes:"",seconds:""})
}
  return (
    <div>
      <div>
        <input 
        type='text'
        name='hours'
        value={time.hours}
        onChange={handleChange}
        placeholder='HH'
        disabled={timerRunning}/>
        <span>:</span>
        <input 
        type='text'
        name='minutes'
        value={time.minutes}
        onChange={handleChange}
        placeholder='MM'
        disabled={timerRunning}
        />
        <span>:</span>
        <input 
        type='text'
        name='seconds'
        value={time.seconds}
        onChange={handleChange}
        placeholder='SS'
        disabled={timerRunning}/>
      </div>
      <div>
        <button onClick={startTimer} disabled={timerRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!timerRunning}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default CountDown