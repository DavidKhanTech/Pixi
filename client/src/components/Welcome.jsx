import React, { Component } from 'react'
import Form from "./Form"

export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "user"
    }
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.userName}!</h1>
        <p>Are you available for work or need a photographer? You can make a post here</p>
        <Form />
      </div>
    )
  }
}
