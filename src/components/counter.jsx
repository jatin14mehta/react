import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 3
  };

  handleIncrement = () => {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-sm btn-secondary"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
