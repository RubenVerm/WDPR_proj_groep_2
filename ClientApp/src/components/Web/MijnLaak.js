import axios from 'axios'
import React, { Component } from 'react';

export class MijnLaak extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://localhost:7113/api/login', {
        email: this.state.email,
        password: this.state.password
    })
    .then(response => {
        // Handle successful login
        this.props.history.push('/home')
    })
    .catch(error => {
        // Handle login error
        this.setState({ error: error.response.data.error })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Login</button>
        {this.state.error && <p>{this.state.error}</p>}
      </form>
    )
  }
}
