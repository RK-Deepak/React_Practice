import React, { useRef, useState } from 'react'
import { useFetchTodo } from '../hooks/useFetchTodo'
import { MdCancel, MdEdit } from 'react-icons/md';
import { useToggle } from '../hooks/useToggle';

const TodoList = () => {
    const inputRef=useRef();
    const {todos,setTodos}=useFetchTodo();
    const {todoFormat,setTodoFormat}=useToggle();
    const [editabletodoId,setEditableTodoId]=useState(null);

    //add todo
    function handleAddTodo()
    {
        
        if(inputRef.current.value!=="")
            {
                const addedTodo={id:todos.length+1, todo:inputRef.current.value, completed: false, userId:Math.round(Math.random()*100,2)};
                setTodos([...todos,addedTodo]);
                inputRef.current.value="";
            }
    }

    //delete todo
    function handleDelete(id)
    {
        const remainingTodos=todos?.filter((todo)=>todo?.id!==id)
         setTodos(remainingTodos)
    }
    function handleChangeTodo(id,value)
    {
        const updatedTodo=todos?.map((todo)=>todo?.id===id ?
        {...todo,todo:value}
        :todo);
        // setTodoFormat("view");

        setTodos(updatedTodo)
    }

    function handleBlur()
    {
        setTodoFormat("edit");
        inputRef.current.value=""
    }

  return (
    <div>
        <p>Todo List</p>
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
       {
            todos?.map((todo)=>
            {
                return <li key={todo?.id}>
                    {todoFormat==="edit" && editabletodoId===todo?.id ?
                    <input type='text' value={todo?.todo} onChange={(e)=>handleChangeTodo(todo?.id,e.target.value)} 
                    onBlur={handleBlur}
                    />:<span>
                        {todo?.todo}
                    </span>
                }
                <MdCancel onClick={()=>handleDelete(todo?.id)}/>

                {(todoFormat==="edit" && editabletodoId===todo?.id)?
                <span onClick={()=>setTodoFormat("view")}>
                view
                 </span>:
                <MdEdit onClick={()=>
                    {
                        setEditableTodoId(todo?.id)
                        inputRef.current.value=todo?.todo
                        setTodoFormat("edit");
                       
                }}/>}
                
                </li>
            })
       }
       </ul>
    </div>
  )
}

export default TodoList