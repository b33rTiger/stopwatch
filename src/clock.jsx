import React, { Component } from 'react';
import './app.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.countDown);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.countDown), 1000);
  }

  getTimeUntil(countDown) {
    const = Math.floor
  }


  render() {
    return(
      <div>Testing</div>
    )
  }

}

export default Clock;
