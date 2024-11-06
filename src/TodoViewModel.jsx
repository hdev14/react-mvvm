import { createContext } from 'react';
import { useTodoModel } from './TodoModel';

export const TodoViewModelContext = createContext({
  todo: [],
  handleAddTodo: () => {
    throw new Error();
  },
  handleRemoveTodo: () => {
    throw new Error();
  },
  handleEditTodo: () => {
    throw new Error();
  },
});

export default function TodoViewModel({ children }) {
  const { todo, addTodo, removeTodo, editTodo } = useTodoModel();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const message = event.target.elements['task'].value;

    event.target.elements['task'].value = '';

    addTodo(message);
  }

  const handleRemoveTodo = (id) => {
    removeTodo(id);
  }

  const handleEditTodo = (id) => (event) => {
    const message = event.target.value;

    editTodo(id, message);
  }

  const value = {
    todo,
    handleAddTodo,
    handleRemoveTodo,
    handleEditTodo
  };

  return (
    <TodoViewModelContext.Provider value={value}>
      {children}
    </TodoViewModelContext.Provider>
  );
} 