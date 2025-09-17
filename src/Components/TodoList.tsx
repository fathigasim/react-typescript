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
    // <div className='todos'>
    //     {todos&&
    //     todos.map((todo)=>(
    //         <SingleTodo key={todo.id} todo={todo} 
    //         todos={todos} setTodos={setTodos}
    //         />
    //     ))
    //   }
    // </div>
    <div className="container">
      {/* <Droppable droppableId='TodosList' isDropDisabled={false}>
        {
          (provided)=>(
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
             <span className="todos_heading">
              Active  Tasks
             </span>
             {
              todos.map((todo,index)=>(
                <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
              ))
             }
              
      </div>
          )
        }
       </Droppable>
       <Droppable droppableId='TodosRemove'>
        {
          (provided)=>(
       <div className="todos remove"  ref={provided.innerRef} {...provided.droppableProps}>
         <span className="todos_heading">
              Completed  Tasks
             </span>
        {
          
              completedTodos.map((todo,index)=>(
                <SingleTodo index={index} todo={todo} todos={completedTodos} key={todo.id} setTodos={setCompletedTodos}/>
              ))
             }
           
      </div>
          )
        }
       </Droppable> */}
       <Droppable droppableId="TodosList"    isCombineEnabled={true}>
  {(provided,snapshot) => (
    <div
      className={`todos ${snapshot.isDraggingOver?'dragactive':''}`}
      ref={provided.innerRef}
      {...provided.droppableProps}
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
      {provided.placeholder}   {/* 👈 Required */}
    </div>
  )}
</Droppable>

<Droppable droppableId="TodosRemove" isCombineEnabled={true}>
  {(provided,snapshot) => (
    <div
      className={`todos remove ${snapshot.isDraggingOver?'dragcomplete':''}`}
      ref={provided.innerRef}
      {...provided.droppableProps}
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
      {provided.placeholder}   {/* 👈 Required */}
    </div>
  )}
</Droppable>

    </div>
  )
}

export default TodoList
