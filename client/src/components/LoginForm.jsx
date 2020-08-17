import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { loginUser } from '../services/auth';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userData = await loginUser(formData);
      props.setCurrentUser(userData)
      props.history.push('/welcome')
    } catch (e) {
      setFormData({
        error: "Invalid Credentials"
      })
    }
  }

  return (
    <div>
      <p>{formData.error}</p>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label>
            Username:
          <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
        <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}