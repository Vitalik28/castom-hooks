import React, { useRef, useState } from 'react';
import useScroll from '../hooks/useScroll';
import { ITodo } from '../models/models';

const List = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const parentRef = useRef<any>(null);
  const childRef = useRef<any>(null);
  const intercector = useScroll(parentRef, childRef, () =>
    fetchTodos(limit, page)
  );

  function fetchTodos(limit: number, page: number) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }
  return (
    <div ref={parentRef} style={{ overflow: 'auto', height:'80vh' }}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ border: '1px solid black', height: '50px' }}
        >
          {todo.id}. {todo.title}
        </div>
      ))}
      <div ref={childRef} style={{ background: 'green', height: '80px' }}></div>
    </div>
  );
};

export default List;
