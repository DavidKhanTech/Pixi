import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { removeToken } from '../services/auth';
// import { useHistory } from 'react-router-dom';
import image from "../images//julius-drost-dS-q7-zkD9c-unsplash.jpg"


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      currentUser: {}
    }
  }

  componentDidMount() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    this.setState({
      currentUser
    })
  }
  // const history = useHistory();

  handleLogout = () => {
    localStorage.removeItem("authToken");
    //removeToken();
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  render() {
    return (
      <header>
        <h1>ⓅPixi</h1>
        <img src={image} alt="logo" />
        <h2>Meet Photographers ready to work near you right now!</h2>

        {/* <Image source={require('../images/jordan-whitfield-qODM8pfwRO4-unsplash-removebg-preview.png')} /> */}
        {
          this.state.currentUser ? (
            <>

              <button className="logout" onClick={this.handleLogout}>Logout</button>
            </>
          ) : (
              <Link className="signup" to='/'>Login/SignUp</Link>
            )
        }

        {
          this.state.currentUser ? (
            <>
              <Link to="/posts">Posts</Link>
              <Link to="/welcome">New Post</Link>
            </>
          ) : ""
        }
      </header >
    )
  }
} 