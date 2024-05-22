import { useEffect, useState } from "react"

export const useFetchProduct=(searchText,page)=>
    {
        const [productList,setProductList]=useState(null);

        async function fetchProduct()
        {
            if(searchText==="")
                {
                    // let responseObj=await fetch("https://dummyjson.com/products?limit=100");
                   
                    let responseObj=await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
                    let responsejson=await responseObj.json();
                    console.log(responsejson)
                    setProductList(responsejson);
                }
            else 
            {
                try 
                {

                    let timerId;
                    if(timerId)
                        {
                            clearTimeout(timerId);
                            timerId=null;
                        }
                    timerId=setTimeout(async()=>
                    {
                        let responseObj=await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
                        let responsejson=await responseObj.json();
                        console.log(responsejson)
                        setProductList(responsejson);
                    },1000)


                    
                    
                }
                catch(error)
                {
                    console.log(error)
                }
                
            }
     
          
        }
            useEffect(()=>
            {
                   fetchProduct();
            },[searchText,page])

            return {productList,setProductList,fetchProduct}
    }
