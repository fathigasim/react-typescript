import React from 'react'
import { Todo } from '../model'
import './styles.css'
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd'

interface Props{
todos:Todo [],
setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
completedTodos:Todo [],
setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props>= ({todos,setTodos,completedTodos,setCompletedTodos}) => {
  return (
  
    <div className="container">
      
        
          
            <div className="todos" >
             <span className="todos_heading">
              Active  Tasks
             </span>
             {
              todos.map((todo,index)=>(
                <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
              ))
             }
              
      </div>
         
       
       
        
          
       <div className="todos remove" >
         <span className="todos_heading">
              Completed  Tasks
             </span>
        {
          
              completedTodos.map((todo,index)=>(
                <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>
              ))
             }
           
      </div>
          
        
       
      
  
    <div
     
    >
      <span className="todos_heading">Active Tasks</span>
      {todos.map((todo, index) => (
        <SingleTodo
          index={index}
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
      
    </div>
  



  
    <div
   
    >
      <span className="todos_heading">Completed Tasks</span>
      {completedTodos.map((todo, index) => (
        <SingleTodo
          index={index}
          todo={todo}
          todos={completedTodos}
          key={todo.id}
          setTodos={setCompletedTodos}
        />
      ))}
      
    </div>



    </div>
  )
}

export default TodoList
