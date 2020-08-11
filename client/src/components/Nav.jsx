import React from 'react'


import React, { Component } from 'react'

export default class Nav extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <div>
        <h1>ⓅPixi</h1>
        {isLoggedIn ?
          <div>
            <a href="/welcome">Welcome</a>
            <a href="/posts">Posts</a>
            <button onClick={handleLogout}>Logout</button>
          </div>
          : ""}
      </div>
    )
  }
}