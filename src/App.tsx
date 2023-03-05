import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Hover from './components/Hover';
import List from './components/List';
import useDebounce from './hooks/useDebounce';
import useRequest from './hooks/useRequest';
import { ITodo } from './models/models';

function App() {
  const [value, setValue] = useState('');
  const [todos, error, loading] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  return (
    <div className="App">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.id}.{todo.title}
          </div>
        ))}
    </div>
  );
}

export default App;
