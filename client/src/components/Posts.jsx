import React, { Component } from 'react';
import imports from '../services/imports';



export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    try {
      let result = await imports.getPosts()
      if (result) {
        this.setState({
          user: result.user,
          post: result.post
        })
      }
    } catch (e) {
      console.log("No posts or error:", e)
    }
    console.log(this.state.posts.user)
  }

  render() {
    return (
      <div>
        <h1>Posts:</h1>
        <ul>
          {this.state.posts.length > 0 ?
            this.state.posts.map(post => <li><a href={`/post/${post.id}`}>{post.post}</a></li>)
            : "No Posts"}
        </ul>
      </div>
    )
  }
}