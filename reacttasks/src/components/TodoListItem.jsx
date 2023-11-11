const TodoItem = ({ todo, action, remove, id }) => {
  return (
    <li>
      <p> {todo}</p>
      <button onClick={() => action(id)}>complete</button>
    </li>
  );
};

export default TodoItem;
