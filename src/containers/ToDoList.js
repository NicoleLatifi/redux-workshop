import React from 'react';
import ToDo from './ToDo';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {
  const displayTodos = todos.map(todo => {
    console.log(todo.completed)
    return (
        <ToDo
          // {todo={todo}}
          {...todo}
          key={todo.id}
        />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);
