import { useContext } from 'react';
import { TodoViewModelContext } from './TodoViewModel';


export default function TodoView() {
  const { todo, handleAddTodo, handleRemoveTodo, handleEditTodo } = useContext(TodoViewModelContext);

  return (
    <ul>
      {todo.map((task) => (
        <li key={task.id}>
          <input type='text' name='task' value={task.message} onChange={handleEditTodo(task.id)} />
          <button onClick={() => handleRemoveTodo(task.id)}>remover</button>
        </li>
      ))}

      <form onSubmit={handleAddTodo}>
        <input type='text' name='task' />
        <button type='submit'>add</button>
      </form>
    </ul>
  )
}