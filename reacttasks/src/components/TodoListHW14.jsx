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

const TodoItemList = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [dones, setDones] = useState([]);

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
  };

  const addCompleteTask = useCallback((id) => {
    const done = toDos.find((todo) => todo.id === id);

    if (done) {
      setDones((prevDones) => [...prevDones, done]);
      const updatedToDos = toDos.filter((todo) => todo.id !== id);
      setToDos(updatedToDos);
    }
  }, []);

  const removeUser = useCallback((id) => {
    const updatedDones = dones.filter((done) => done.id !== id);
    setDones(updatedDones);
  }, []);

  const returnTodo = useCallback((id) => {
    const todo = dones.find((done) => done.id === id);
    if (todo) {
      setToDos((prevToDos) => [...prevToDos, todo]);
      removeUser(id);
    }
  }, []);

  return (
    <>
      <form action="" onSubmit={addUser}>
        <h1>Create todo list</h1>
        <input type="text" onChange={onChange} value={inputValue} />
        <button type="submit"> Add todo</button>
      </form>

      <div className="Container">
        <ul className="Todo">
          <h2>My To Do List</h2>
          {toDos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.task}
              action={addCompleteTask}
            />
          ))}
        </ul>

        <ul className="Done">
          <h2>Completed Tasks</h2>
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
