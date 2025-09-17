import React,{useState} from 'react';
import InputField from './Components/InputField';
import { Todo } from './model';
import TodoList from './Components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';



const App :React.FC=()=> {
  const [todo,setTodo]=useState<string>('');
  const [todos,setTodos]=useState<Todo[]>([]);
  const [completedTodos,setCompletedTodos]=useState<Todo[]>([]);
  

  const handleAdd =(e:React.FormEvent)=>{e.preventDefault()

    if(todo)
    {
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo('');
    }
  }
  console.log(todos);
  const onDragEnd =(result:DropResult)=>{
       const[source,destination]=result;
       if(!destination) return;
       if(destination.droppableId===source.droppableId&&destination.index===source.index)
        return;
        let add,active=todo,Complete =completedTodos;
        if(source.droppableId==='TodosList'){
          add=active[source.index];
          active.splice(source.index,1)
        }else{
           add=Complete[source.index];
          active.splice(source.index,1)
        }

        if(destination.droppableId==='TodosList'){
          active.splice(destination.index,0,add)
        }else{
           Complete.splice(destination.index,0,add)
        }
   setCompletedTodos(Complete)
   setTodos(active)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}
        completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} 
      />
    
    </div>
    </DragDropContext>
  );
}

export default App;
