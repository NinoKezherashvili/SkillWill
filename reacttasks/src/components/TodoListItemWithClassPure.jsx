//this is in order to prevent rerendering of the elements HW #13

import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo, action, id } = this.props;

    return (
      <li>
        <p>{todo}</p>
        <button onClick={() => action(id)}>complete</button>
      </li>
    );
  }
}

export default TodoItem;