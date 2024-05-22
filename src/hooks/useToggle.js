import { useState } from "react"
import { useFetchTodo } from "./useFetchTodo";

export const useToggle=()=>
    {
        const [todoFormat,setTodoFormat]=useState("read");
        

   

        return {todoFormat,setTodoFormat};
    }