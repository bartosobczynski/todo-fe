import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component { 
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div class="todo_item" style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        <p>{ title }</p>
        <button class="remove_item" onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 12px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
