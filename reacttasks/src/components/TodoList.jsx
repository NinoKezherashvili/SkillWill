// დაწერე To do List აპლიკაცია, სადაც გექნება ორი სვეტი, რომელშიც მოთავსებული იქნება შესასრულებელი და შესრულებული სამუშაოები
// ● მომხმარებელს ექნება შესაძლებლობა
// შეიყვანოს ახალი დავალებები, რომლებიც ავტომატურად ჩავარდება შესასრულებელ სამუშაოებში შესასრულებელ სამუშაოებში ყოველ დავალებას ექნება „დასრულება“ ღილაკი,
// რომელზე დაჭერისას აღნიშნული დავალება გადაინაცვლებს შესრულებული დავალებების სიაში, ხოლო შესრულებული დავალებების სიაში ყოველ დავალებას ექნება წაშლის და შესასრულებელ
// დავალებებში გადატანის ღილაკე

import TodoItem from "./TodoListItem";
import { Component } from "react";

import "./todo.css";
import { v4 as uuidv4 } from "uuid";
import DoneItem from "./DoneItem";

class TodoItemList extends Component {
  state = {
    inputValue: "",
    toDos: [],
    dones: [],
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
    });
  };

  addUser = (event) => {
    event.preventDefault();

    const toDo = {
      id: uuidv4(),
      task: this.state.inputValue,
    };

    this.setState({
      toDos: [...this.state.toDos, toDo],
      inputValue: "",
    });
  };

  addCompleteTask = (id) => {
    const done = this.state.toDos.filter((todo) => todo.id === id)[0];
    console.log(this.state.dones);
    console.log(done);
    this.setState({
      dones: [...this.state.dones, done],
    });
    const toDos = this.state.toDos.filter((todo) => todo.id !== id);
    this.setState({
      toDos,
    });

    console.log(this.state.dones);
  };

  removeUser = (id) => {
    const dones = this.state.dones.filter((done) => done.id !== id);
    this.setState({
      dones,
    });
  };

  returnTodo = (id) => {
    const todo = this.state.dones.filter((done) => done.id === id)[0];

    this.setState({
      toDos: [...this.state.toDos, todo],
    });
    this.removeUser(id);
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.addUser} className="todo">
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
          <button type="submit"> Add todo</button>
        </form>

        <h2>My To Do List</h2>

        <ul>
          {this.state.toDos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.task}
              action={this.addCompleteTask}
            />
          ))}
        </ul>

        <h2>Completed Tasks</h2>

        <ul>
          {this.state.dones.map((done) => (
            <DoneItem
              key={done.id}
              id={done.id}
              todo={done.task}
              remove={this.removeUser}
              returnTodo={this.returnTodo}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoItemList;
