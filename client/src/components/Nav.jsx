import React from 'react';
import { Link } from 'react-router-dom';
import { removeToken } from '../services/auth';
import { useHistory } from 'react-router-dom';
// import image from 'src/images/jordan-whitfield-qODM8pfwRO4-unsplash-removebg-preview.png'


export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/');
  }

  return (
    <header>
      <h1>ⓅPixi</h1>
      <img src="/images/jordan-whitfield-qODM8pfwRO4-unsplash-removebg-preview.png" />
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login/SignUp</Link>
          )
      }
      {
        props.currentUser && (
          <>
            <Link to="/posts">Posts</Link>
            <Link to="/Comments">Comments</Link>
          </>
        )
      }
    </header>
  )
}