import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { removeToken } from '../services/auth';
// import { useHistory } from 'react-router-dom';
// import { AppRegistry, Image } from 'react-native';


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  // const history = useHistory();

  // const handleLogout = () => {
  //   props.setCurrentUser(null);
  //   localStorage.removeItem("authToken");
  //   removeToken();
  //   history.push('/');
  // }

  render() {
    return (
      <header>
        <h1>ⓅPixi</h1>
        <h2>Meet Photographers ready to work near you right now!</h2>
        {/* <Image source={require('../images/jordan-whitfield-qODM8pfwRO4-unsplash-removebg-preview.png')} /> */}
        {/* {
          props.currentUser ? (
            <>
              <p>{props.currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (""
              //       <Link to='/login'>Login/SignUp</Link>
            ) */}

        {
          //    props.currentUser && (
          <>
            <Link to="/posts">Posts</Link>
            <Link to="/welcome">New Post</Link>
          </>
          //  )
        }
      </header >
    )
  }
} 