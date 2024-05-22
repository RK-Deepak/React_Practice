import React, { useEffect } from "react"
export const useFetchTodo=()=>
    {
          const [todos,setTodos]=React.useState(null);
             
          async function fetchTodo()
          {
            const responseObj=await fetch("https://dummyjson.com/todos");
            const responseJson=await responseObj.json();
            setTodos(responseJson?.todos);
          }



          useEffect(()=>
        {
            fetchTodo();
        },[])


        return {todos,setTodos}

    }

