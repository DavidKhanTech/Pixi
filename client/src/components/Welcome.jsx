import React, { Component } from 'react'
import Form from "./Form"

export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
    }
  }

  componentDidMount() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser)
    this.setState({
      currentUser
    })
    if (!this.state.currentUser) {
      window.location.href = "/welcome";
    }
  }


  render() {
    return (
      <div>
        <h1>Welcome {this.state.currentUser.username}!</h1>
        <p>Are you available for work or need a photographer? You can make a post here</p>
        <Form />
      </div>
    )
  }
}
