import React, { useState } from 'react'
import { post } from '../services/posts';

export default function CreateFood(props) {
  const [formData, setFormData] = useState({
    name: ""
  })

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({ name: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = await post(formData);
    props.setPosts([
      ...props.posts,
      newPost
    ])
    props.history.push('/posts')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Post</h3>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}