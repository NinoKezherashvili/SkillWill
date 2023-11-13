//this is in order to prevent rerendering of the elements HW #13


import React, { Component } from 'react';

class DoneItem extends Component {
  render() {
    const { todo, remove, returnTodo, id } = this.props;

    return (
      <li>
        <p>{todo}</p>
        <button onClick={() => remove(id)}>remove</button>
        <button onClick={() => returnTodo(id)}>return todo</button>
      </li>
    );
  }
}

export default DoneItem;