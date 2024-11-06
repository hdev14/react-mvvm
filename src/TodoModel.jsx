import { useEffect, useState } from 'react';

export function useTodoModel() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodo = localStorage.getItem('todo');

    if (todo.length === 0 && storedTodo) {
      setTodo(JSON.parse(storedTodo))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const addTodo = (message) => {
    setTodo((state) => [...state, { id: state.length + 1, message }]);
  }

  const removeTodo = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  }

  const editTodo = (id, message) => {
    const idx = todo.findIndex((task) => task.id === id);

    if (idx < 0) {
      throw new Error('There is no task with this ID');
    }

    setTodo((state) => state.map((task, index) => {
      if (index === idx) {
        task.message = message;
      }

      return task;
    }));
  }

  return {
    todo,
    addTodo,
    removeTodo,
    editTodo,
  }
}