import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { isContentEditable } from '@testing-library/user-event/dist/utils';


let globalID=0;

function App() {


const [todos, setTodos] = useState([]);
const [todoText,setTodoText]=useState('');

function createTodo(){
  setTodos(oldTodos=>{
    setTodoText('');
    return [...oldTodos, {name:todoText,id:globalID++}];
  });
  
}

function checkForEnterKey(e){
  if(e.keyCode===13){
    createTodo();
  }
}

function onDelete(itemID){
  setTodos(oldTodos=>oldTodos.filter(x=>x.id!==itemID));
}

  return( 
    <div className="App">
      <p>Todo App</p>    
      <input type="text" 
      //Same can be done with form submit without onKeyDown
      onKeyDown={checkForEnterKey} 
      value={todoText} onChange={event=> setTodoText(event.target.value)}/>
      <button onClick={createTodo}>Add</button>
      <ul>
        {todos.map(item=>{
          return <div key={item.id}>
          <li>{item.name} ({item.id})</li>
          <button onClick={()=>onDelete(item.id)}>Delete</button>
          </div>
        })}
      </ul>
    </div>
  )
}

export default App;
