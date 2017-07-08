import React, { Component } from 'react';
import './app.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: '',
      newCountDown: ''
    }
  }

  changeCountDown() {
    this.setState({countDown: this.state.newCountDown});
  }
  render() {
    return (
      <div className="app">
        <div className="app-title">
          {this.state.countDown}
        </div>
        <Stopwatch
          countDown={this.state.countDown}
        />
        <Form inline>
          <FormControl className="countDown-input" onChange={event => this.setState({newCountDown: event.target.value})} placeholder="new timer" />
          <Button onClick{() => this.changeCountDown()}>
          Change Timer
          </Button>
        </Form>
      </div>
    )
  }
}
