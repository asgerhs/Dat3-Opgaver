import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText}
            <a href="#/" onClick={(e) => deleteTodo(todo.id)}> (delete </a>
            <a href="#/" onClick={() => editTodo(todo.id)}>, edit) </a>
          </li>

        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}
