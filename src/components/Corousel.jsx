import React, { useEffect, useState } from 'react'
import { data } from '../utils/constant';

const Corousel = () => {
    const [activeIndex,setActiveIndex]=useState(0);

   

    const previousHandler=()=>
        {
            
                    const previousIndex=activeIndex===0?data.length-1:activeIndex-1;
                    setActiveIndex(previousIndex);
                 
            
        }
    
        const nextHandler=()=>
            {
                const nextIndex=activeIndex===data.length-1?0:activeIndex+1;
                setActiveIndex(nextIndex);
            }

         useEffect(()=>
        {
             let timerId=setTimeout(() => {
                  nextHandler();
             }, 3000);

             return ()=>clearTimeout(timerId)
        },[activeIndex])
  return (
    
    <div>
        <p onClick={previousHandler}>Previous</p>
        {
            // <img src={data[activeIndex]} alt='image_address' style={{width:"200px", height:"200px"}}  />
             data?.map((image,index)=>
             {
                return <img src={image} key={index} alt='image_addrress' style={{width:"200px", height:"200px" }} className={`${activeIndex!==index?"hidden":""}`}/>
             })
        }
        <p onClick={nextHandler}>Next</p>
    </div>
  )
}

export default Corousel