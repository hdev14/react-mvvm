import React from 'react';
import TodoView from './TodoView';
import TodoViewModel from './TodoViewModel';


const App = () => {
  return (
    <TodoViewModel>
      <TodoView />
    </TodoViewModel>
  )
}

export default App