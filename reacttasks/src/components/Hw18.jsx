import { useState } from "react";
import HTTP18 from "./HTTP18Form";

const API_KEY = "ic3Rk4m5A8k1x2Wvao_tx-049PxlqFm1_AukCsJ1po0AzFU0hg";

const Hw18 = () => {
  const [taskList, setTaskList] = useState([]);

  const onFormSubmit = (taskName, taskDescription) => {
    fetch("/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify([
        {
          taskName,
          taskDescription,
        },
      ]),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response failed");
        }
        console.log(res);
        return res.json();
      })
      .then((data) =>
        setTaskList(
          console.log(data)
          // data.items.map((task) => {
          //   return {
          //     taskName: task.taskName,
          //     taskDescription: task.taskDescription,
          //     id: task._uuid,
          //   };
          // })
        )
      );
  };

  const getTasks = () => {
    fetch("/api/v1/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Response failed");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <HTTP18 onFormSubmit={onFormSubmit} />

      <button onClick={getTasks}>Get users</button>
      {taskList.map((task) => (
        <div key={task.id}>
          <h3>{task.taskName}</h3>
          <h3>{task.taskDescription}</h3>
        </div>
      ))}
    </div>
  );
};

export default Hw18;
