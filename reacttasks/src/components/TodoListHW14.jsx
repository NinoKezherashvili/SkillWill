// დაწერე To do List აპლიკაცია, სადაც გექნება ორი სვეტი, რომელშიც მოთავსებული იქნება შესასრულებელი და შესრულებული სამუშაოები
// ● მომხმარებელს ექნება შესაძლებლობა
// შეიყვანოს ახალი დავალებები, რომლებიც ავტომატურად ჩავარდება შესასრულებელ სამუშაოებში შესასრულებელ სამუშაოებში ყოველ დავალებას ექნება „დასრულება“ ღილაკი,
// რომელზე დაჭერისას აღნიშნული დავალება გადაინაცვლებს შესრულებული დავალებების სიაში, ხოლო შესრულებული დავალებების სიაში ყოველ დავალებას ექნება წაშლის და შესასრულებელ
// დავალებებში გადატანის ღილაკე

import React, { useState } from "react";
import TodoItem from "./TodoListItemHW14";
import DoneItem from "./DoneItemHW14";
import "./todo.css";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";
import InProgressItem from "./InProgress";

const TodoItemList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [dones, setDones] = useState([]);
  const [InProgress, SetInProgress] = useState([]);
  const [CountToDos, setCountToDos] = useState(0);
  const [CountInProgress, setCountInProgress] = useState(0);
  const [CountDone, setCountDone] = useState(0);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addUser = (event) => {
    event.preventDefault();
    const toDo = {
      id: uuidv4(),
      task: inputValue,
    };

    setToDos((prevToDos) => [...prevToDos, toDo]);
    setInputValue("");
    setCountToDos((prevCount) => prevCount + 1);
  };

  const addCompleteTask = useCallback(
    (id) => {
      const done = toDos.find((todo) => todo.id === id);
      const inProgressItem = InProgress.find((inPro) => inPro.id === id);

      if (done) {
        setDones((prevDones) => [...prevDones, done]);
        const updatedToDos = toDos.filter((todo) => todo.id !== id);
        setToDos(updatedToDos);
        setCountToDos((prevCount) => prevCount - 1);
        setCountDone((prevCount) => prevCount + 1);
      }

      if (inProgressItem) {
        setDones((prevDones) => [...prevDones, inProgressItem]);
        const updatedInProgress = InProgress.filter((el) => el.id !== id);
        SetInProgress(updatedInProgress);
        setCountInProgress((prevCount) => prevCount - 1);
        setCountDone((prevCount) => prevCount + 1);
      }
    },
    [toDos, InProgress]
  );

  const removeUser = useCallback(
    (id) => {
      const updatedDones = dones.filter((done) => done.id !== id);
      setDones(updatedDones);
      setCountDone((prevCount) => prevCount - 1);
    },
    [dones]
  );

  const moveInProgress = useCallback(
    (id) => {
      const inProgress = toDos.find((todo) => todo.id === id);
      if (inProgress) {
        SetInProgress((prevInProgress) => [...prevInProgress, inProgress]);
        const updatedToDos = toDos.filter((todo) => todo.id !== id);
        setToDos(updatedToDos);
        setCountInProgress((prevCount) => prevCount + 1);
        setCountToDos((prevCount) => prevCount - 1);
        console.log(inProgress);
      }
    },
    [toDos]
  );

  const returnTodo = useCallback(
    (id) => {
      const todo = dones.find((done) => done.id === id);
      if (todo) {
        setToDos((prevToDos) => [...prevToDos, todo]);
        removeUser(id);
        setCountToDos((prevCount) => prevCount + 1);
      }
    },
    [dones, removeUser]
  );

  return (
    <>
      <form action="" onSubmit={addUser}>
        <h1>Create todo list</h1>
        <input type="text" onChange={onChange} value={inputValue} />
        <button type="submit"> Add todo</button>
      </form>

      <div className="Container">
        <ul className="Todo">
          <h2>Backlog</h2>
          <span> {CountToDos}</span>
          {toDos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.task}
              action={addCompleteTask}
              moveInProgress={moveInProgress}
            />
          ))}
        </ul>

        <ul className="InProgress">
          <h2>In Progress</h2>
          <span> {CountInProgress}</span>
          {InProgress.map((inProgress) => (
            <InProgressItem
              inProgress={inProgress.task}
              key={inProgress.id}
              id={inProgress.id}
              action={addCompleteTask}
            />
          ))}
        </ul>

        <ul className="Done">
          <h2>Done</h2>
          <span> {CountDone}</span>
          {dones.map((done) => (
            <DoneItem
              key={done.id}
              id={done.id}
              todo={done.task}
              remove={removeUser}
              returnTodo={returnTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoItemList;
