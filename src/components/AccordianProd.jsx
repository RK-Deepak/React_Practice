import React, { useState } from 'react'
import { MdAdd, MdCancel } from "react-icons/md"

const AccordianProd = ({item,unlarge,activeValue,index}) => {

    const handleIndex=(ifx)=>
        {
            unlarge(ifx);
        }
    const handleCancel=(e)=>
        {
            e.stopPropagation();
                unlarge(null);
              
        }
  return (
    <div className='each_accod'>
        <div className='ques' onClick={()=>handleIndex(index)} >
            <span>{item?.question}</span>
            <div>
              {!activeValue?<MdAdd/>:<MdCancel onClick={handleCancel}/>}
            </div>
            </div>
       <div className='ans'>
        {activeValue && <p> {item?.answer}</p>}
       </div>
    </div>
  )
}

export default AccordianProd