import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      done,
      important,
      onToggleDone,
      onToggleImportant,
      onDeleted,
    } = this.props;

    let className = 'todo-list-item';

    if (done) {
      className += ' done';
    }

    if (important) {
      className += ' important';
    }

    return (
      <div className={className}>
        <div className="d-flex flex-grow-1">
          <span className="todo-list-item-label done" onClick={onToggleDone}>
            {label}
          </span>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-success"
          onClick={onToggleImportant}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/></svg>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={onDeleted}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/></svg>
        </button>
      </div>
    );
  };
}
