import React from "react";

const TodoItem = ({ todo, action, id, moveInProgress }) => {
  return (
    <li>
      <p> {todo}</p>
      <button onClick={() => action(id)}>complete</button>
      <button onClick={() => moveInProgress(id)}>InProgress</button>
    </li>
  );
};

export default React.memo(TodoItem);
