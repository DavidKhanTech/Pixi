import React, { Component } from 'react'
import SignUp from './SignUp'
import LoginForm from './LoginForm'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSignUp() {
    this.setState({ login: false })
  }

  handleLogin() {
    this.setState({ login: true })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSignUp}>
          Sign Up
      </button>
        <button onClick={this.handleLogin}>
          Login
      </button>
        <div>
          {this.state.login ?
            <LoginForm />
            :
            <SignUp />
          }

        </div>
      </div>
    )
  }
}
