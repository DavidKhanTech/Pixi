import React, { useState } from 'react'
import { registerUser } from '../services/auth';

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    error: ""
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
      await registerUser(formData);
      window.location.href = `/welcome`
    } catch (e) {
      setFormData({
        error: "Invalid Credentials. (Username/email taken or Password too short)."
      })
    }
  }

  return (
    <div>
      <p>{formData.error}</p>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
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
          Email:
        <input
            type="text"
            name="email"
            value={formData.email}
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
  )
}