import React, { Component } from 'react';
import './app.css';
import Clock from './clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  changeCountDown() {
    const hh = this.state.hh;
    const mm = this.state.mm;
    const ss = this.state.ss;
    this.setState({hh, mm, ss});
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">
          <h1>Stopwatch App</h1>
        </div>

        <Form inline>
          <FormControl name="hh" type="number" value={this.state.hh} className="newHH" onChange={this.handleInputChange} placeholder="HH" />
          <FormControl name="mm" type="number" value={this.state.mm} className="newMM" onChange={this.handleInputChange} placeholder="MM" />
          <FormControl name="ss" type="number" value={this.state.ss} className="newSS" onChange={this.handleInputChange} placeholder="SS" />
          <Button onClick={() => this.changeCountDown()}>
          Start
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
