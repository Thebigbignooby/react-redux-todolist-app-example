import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, id }) => (
  <li
    onClick={onClick}
    style={{
      cursor: 'pointer',
      border: '1px solid black',
      color: completed ? 'grey' : 'black',
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <input
      type="checkbox"
      value="done"
      id={id}
      checked={completed}
      // added empty onChange function to prevent warning messages in the console
      onChange={function() {}} />
    <label for={id}>
      {text}
    </label>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
