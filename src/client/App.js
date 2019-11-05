import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import { Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';

export default class App extends Component {
  state = { value: null };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    const { value } = this.state;
    axios.post('/api/sendMessage', { message: value });
    event.preventDefault();
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <Image src={ReactImage} />
        </header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text"
              placeholder="Write me a few word"
              value={this.state.value}
              onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
