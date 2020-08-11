import React, { Component } from 'react'
import SignUp from './SignUp'
import LoginForm from './LoginForm'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
  }
  render() {
    return (
      <div>
        {this.state.login ?
          <LoginForm />
          :
          <SignUp />
        }

      </div>
    )
  }
}
