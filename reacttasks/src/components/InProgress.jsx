const InProgressItem = ({ inProgress,action, id}) => {
  return (
    <li>
      <p> {inProgress}</p>
      <button onClick={() => action(id)}>complete</button>
    </li>
  );
};

export default InProgressItem;
