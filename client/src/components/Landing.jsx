import React, { Component } from 'react'
import SignUp from './SignUp'
import LoginForm from './LoginForm'


import biz from "../images//bizinsider.png"
import mash from "../images//mashable.png"
import tech from "../images//TechCrunch.png"
import tnw from "../images//tnw.png"
import j from "../images//isaac-castillejos-VOQkzFIkF0Y-unsplash.jpg"

// export default function Landing() {


export default class Landing extends Component {
  // const { currentUser, setCurrentUser } = props
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
        <div className="signBtn">
          <button onClick={this.handleSignUp}>
            Sign Up
      </button>
          <button onClick={this.handleLogin}>
            Login
      </button>
        </div>
        <div>
          {this.state.login ?
            <LoginForm currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser} {...this.props} />
            :
            <SignUp currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser} {...this.props} />
          }

        </div>
        <div>
          <h3>Easy to use.</h3>
          <p>Login and see Photographers that are available near you right now at the click of a button!</p>
          <h3>Elite Photographers</h3>
          <p>We have all the photographers, the greatest photographers.</p>
          <h3>Guaranteed Photos on time.</h3>
          <p>Less worry about taking pictures and more time to enjoy life's special moments</p>
          <br></br>
          <br></br>
          <br></br>
          <div class="neon">
            <img src={j} alt="logo" />
            <p>"I've found the Best and Affordable Photographer using Pixi and no longer miss the fun around me."</p>
          </div>

        </div>
        <div class="logos">
          <img src={biz} alt="logo" />
          <img src={mash} alt="logo" />
          <img src={tech} alt="logo" />
          <img src={tnw} alt="logo" />
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}
