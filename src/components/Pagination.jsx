import React, { useEffect, useState } from 'react'
import { useFetchProduct } from '../hooks/useFetchProduct'
import "../App.css"

const Pagination = () => {

  const [inputtext,setInputText]=useState("");
  const [page,setpage]=useState(1);
  const {productList,setProductList,fetchProduct}=useFetchProduct(inputtext,page);

  const totalPages=productList?.total && Math.ceil(productList?.total/10);


  function nextPageHnadler()
  {
    if(page<totalPages)
        setpage(page+1)
  }
  function previousPageHandler()
  {
           if(page>1)
            {
                 setpage(page-1)
            }
  }

  useEffect(()=>
  {
    fetchProduct(inputtext,page)
  },[page])

  return (
    <div className='parent'>
      <input type='text' value={inputtext} onChange={(e)=>setInputText(e.target.value)} />
      {
        productList &&  productList?.products?.map((item,index)=>
        {
         return <div key={item?.id} className='flex-item'>
            <img src={item?.thumbnail} alt='product_image'/>
            <p>{item?.title}</p>
          </div>
        })
      }
      <div className='btns'>
      {page!==1 && <button onClick={previousPageHandler}>Prev</button>}
      <div className='arra'> 
       {Array(totalPages).fill("").map((_,index)=>{
        return <button key={index+1} className={`pageN ${page===index+1?"filled":""}`} onClick={()=>setpage(index+1)}>
          {index+1}
        </button>
       })}
       </div>
      {page!==totalPages && <button onClick={nextPageHnadler}>Next</button>}
      </div>
    </div>
  )
}

export default Pagination