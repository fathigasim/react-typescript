import React, { useEffect, useRef, useState } from 'react'
import type { Todo } from '../model'
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import './styles.css'
import { Draggable } from 'react-beautiful-dnd';
// interface Props{
//     todo:Todo,
//     todos:Todo [],
//     setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
// }

type Props={
    todo:Todo,
    todos:Todo [],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    index:number
}
const SingleTodo = ({todo,todos,setTodos,index}:Props) => {
  const[edit,setEdit]=useState<boolean>(false);
  const[editToDo,setEditToDo]=useState<string>(todo.todo);
  const handleDone=(id:number)=>{
       setTodos(todos.map((todo)=>(todo.id===id?{...todo,isDone:!todo.isDone}:todo)))
  }
   const handleDelete=(id:number)=>{
       setTodos(todos.filter((todo)=>(todo.id!==id)));
  }
  const handleEdit=(e:React.FormEvent,id:number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo,todo:editToDo}:todo
      
    ),
  setEdit(false)
  ))

  
  }
     const inputRef= useRef<HTMLInputElement>(null)
     useEffect(()=>{
      inputRef.current?.focus()
     },[edit])
  return (
    
     

         <form >

      
        edit?(
          <input ref={inputRef} value={editToDo} onChange={(e)=>setEditToDo(e.target.value)} className="todos-single--text"/>
        ):
        todo.isDone?(
          <s className="todos-single--text">{todo.todo}</s>
        )
       
      
       
        
     
       <div>
        <span className="icon" onClick={(e)=>handleEdit(e,todo.id)}><AiFillEdit/></span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
        <span className="icon" onClick={()=>handleDone(todo.id)}><AiOutlineCheck/></span>
       </div>
    </form>
     
    
    
  )
}

export default SingleTodo
