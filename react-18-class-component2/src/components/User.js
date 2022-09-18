import { Popover } from 'bootstrap';
import React, { Component } from 'react';

export default class User extends Component {
  divRef = React.createRef();

  state = {
    title: 'User',
    count: 0,
  };

  clickHandler = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((p) => {
      return {
        count: p.count + 1,
      };
    });
    console.log(this.divRef.current);
  };

  render() {
    return (
      <div ref={this.divRef}>
        <div className='display-1'>{this.state.title}</div>
        <ul className='fs-4'>
          <li>ID: {this.props.id}</li>
          <li>Name: {this.props.name}</li>
          <li>Age: {this.props.age}</li>
        </ul>
        <div>Count: {this.state.count}</div>
        <button onClick={this.clickHandler} className='btn btn-success'>
          Add
        </button>
      </div>
    );
  }
}
