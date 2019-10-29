import React, { Component } from 'react';

export class TodoList extends Component {
  constructor() {
    super();

    this.changeStatus = this.changeStatus.bind(this);

    this.state = {
      todos: [
        {
          value: 'buy beer',
          done: true
        },
        {
          value: 'drink beer',
          done: false
        }
      ]
    };
  }

  changeStatus(index) {
    this.setState( prevState => {

      const todosUpdated = prevState.todos.splice(index, !prevState.todos.done);
      console.log(todosUpdated)

     
    });
  }

  render() {
    console.log(this.state)
    const { todos } = this.state;

    const todoList = todos.map((item, index) => {
      return (
        <li key={index}>
          <span>{item.value}</span>
          <span onClick={() => this.changeStatus(index)}>
            {item.done ? '+' : '-'}
          </span>
        </li>
      );
    });

    return <ul>{todoList}</ul>;
  }
}
