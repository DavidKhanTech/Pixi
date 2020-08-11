import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    return (
      <form onClick={this.handleSubmit}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
