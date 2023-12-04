import { useState } from "react";

const HTTP18 = ({ onFormSubmit }) => {
  const [taskName, setTaskName] = useState();
  const [taskDescription, setTaskDesc] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(taskName, taskDescription);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="insert task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="insert task description"
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <button> Submit</button>
      </form>{" "}
    </div>
  );
};

export default HTTP18;
