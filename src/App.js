import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


const [todos, setTodos] = useState(['hanish','vinya','pallavi']);
const [todoText,setTodoText]=useState('');

function createTodo(){
  setTodos(oldTodos=>{
    setTodoText('');
    return [...oldTodos, todoText];
  });
}

function checkForEnterKey(e){
  if(e.keyCode===13){
    createTodo();
  }
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
        {todos.map(todo=>{
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
