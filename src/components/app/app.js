import React, {Component} from 'react';

import {AppHeader} from "../app-header";
import {SearchPanel} from "../search-panel";
import {ItemStatusFilter} from "../item-status-filter";
import {TodoList} from "../todo-list";
import {ItemAddForm} from "../item-add-form";

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    data: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all',
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = id => {
    this.setState(({data}) => {
      const idx = data.findIndex((el) => el.id === id);
      const newArray = [
        ...data.slice(0, idx),
        ...data.slice(idx + 1),
      ];

      return {
        data: newArray
      };
    });
  };

  addItem = text => {
    /* Verification if text is not empty */
    if (text.length === 0) {
      return
    }

    const newItem = this.createTodoItem(text);

    /* Add new item */
    this.setState(({data}) => {
      const newArr = [
        ...data,
        newItem,
      ];

      return {
        data: newArr
      };
    })
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  }

  onToggleDone = id => {
    this.setState(({data}) => {
      return {
        data: this.toggleProperty(data, id, 'done')
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({data}) => {
      return {
        data: this.toggleProperty(data, id, 'important')
      };
    });
  };

  onSearchChange = term => this.setState({term});

  onFilterChange = filter => this.setState({filter});

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const {data, term, filter} = this.state;

    const visibleItems = this.filter(this.search(data, term), filter);

    const doneCount = data.filter(el => el.done).length;
    const todoCount = data.length - doneCount;

    return (
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-12">
            <div className="mg-auto shadow-lg bg-white rounded">
              <AppHeader toDo={todoCount} done={doneCount}/>
              <div className="input-group p-3">
                <SearchPanel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
              </div>
              <TodoList
                data={visibleItems}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
              />
              <ItemAddForm onItemAdded={this.addItem}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
