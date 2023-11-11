const DoneItem = ({ todo, remove, returnTodo, id }) => {
  return (
    <li>
      <p> {todo}</p>
      <button onClick={() => remove(id)}>remove</button>
      <button onClick={() => returnTodo(id)}>return todo</button>
    </li>
  );
};

export default DoneItem;
