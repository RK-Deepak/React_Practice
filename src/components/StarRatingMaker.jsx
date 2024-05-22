import React, { useState } from 'react'


const StarRatingMaker = ({size,onRatingPrint,defaultRating}) => {
    const  [activeIndex,setActiveIndex]=useState(defaultRating);
    const [hoverIndex,sethoverIndex]=useState(null)

    function handleChoosed(index)
        {
            setActiveIndex(index+1);
            onRatingPrint(index+1)
            
        }
    function handleMouseMove(index)
    {
        sethoverIndex(index)
    }

  return (
   <div>
    {
        Array(size).fill("").map((_,index)=>
        {
            return <span 
            onClick={()=>handleChoosed(index)}
            onMouseOver={()=>handleMouseMove(index)}
            onMouseLeave={()=>sethoverIndex(null)}
            key={index} className={`star ${index<(hoverIndex!==null?hoverIndex+1:activeIndex)?"filled":""} `}>

                ★
            </span>
        })
    }
   </div>
   
    
  )
}

export default StarRatingMaker