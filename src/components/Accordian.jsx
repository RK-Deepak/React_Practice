import React, { useState } from 'react'
import AccordianProd from './AccordianProd';

const Accordian = () => {
    const data = [
        {
          question: "What is React?",
          answer: "React is a JavaScript library for building user interfaces."
        },
        {
          question: "What are the key features of React?",
          answer: "Key features of React include component-based architecture, virtual DOM, JSX syntax, and uni-directional data flow."
        },
        {
          question: "What is JSX?",
          answer: "JSX is a syntax extension for JavaScript used with React. It allows developers to write HTML-like code in their JavaScript files."
        },
        {
          question: "What is a component in React?",
          answer: "A component in React is a reusable piece of UI that can be composed together to build complex user interfaces."
        },
        {
          question: "What is the virtual DOM?",
          answer: "The virtual DOM is a lightweight representation of the actual DOM in memory. React uses it to perform efficient updates to the UI."
        },
        {
          question: "What is uni-directional data flow?",
          answer: "Uni-directional data flow is a design pattern used in React where data flows in a single direction from parent components to child components."
        }
      ];
     
      const [activeIndex,setActiveIndex]=useState(null);
      const unlarge=(index)=>
        {
            
            setActiveIndex(index)
        }
  return (
    <div className='major '>
       {data?.map((item,index)=>
    {
      return  <AccordianProd item={item} key={index} index={index} unlarge={unlarge} activeValue={activeIndex===index} />
    })}
    </div>
  )
}

export default Accordian