import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <div className="input-group flex-sm-row flex-column p-3">
          <input
            type="text"
            className="form-control search-input"
            onChange={this.onLabelChange}
            placeholder="Add item"
            value={this.state.label}
          />
          <div className="input-group-prepend">
            <button
              type="submit"
              className="btn btn-primary rounded-right">
              Add Item
            </button>
          </div>
        </div>
      </form>
    );
  }
};
