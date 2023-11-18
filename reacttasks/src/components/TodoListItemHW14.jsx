import React from "react";

const TodoItem = ({ todo, action, id }) => {
  return (
    <li>
      <p> {todo}</p>
      <button onClick={() => action(id)}>complete</button>
    </li>
  );
};

export default React.memo(TodoItem);
