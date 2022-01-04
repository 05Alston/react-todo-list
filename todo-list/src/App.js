import './App.css';
import React, { useState, useEffect } from 'react';
import NewTask from './Components/NewTask';
import TaskList from './Components/TaskList'


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filter, setFilter] = useState([]);
  
  const getLocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem(('todos'), JSON.stringify([]))
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }
  useEffect(() => {
    getLocal();
  }, []);
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilter(todos.filter((e) => e.completed === true))
          break;
        case "uncompleted":
          setFilter(todos.filter((e) => e.completed !== true))
          break;
        default:
          setFilter(todos)
          break;
      }
    }
    localStorage.setItem(('todos'), JSON.stringify(todos))
  }, [todos, status]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTask
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <ul className='list'>
        {filter.map(todo => {
          return (
            <TaskList
              key={todo.id}
              todos={filter}
              setTodos={setTodos}
              todo={todo}
            />);
        })}
      </ul>
    </div>
  );
}

export default App;
