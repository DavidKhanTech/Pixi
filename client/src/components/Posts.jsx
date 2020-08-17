import React, { Component } from 'react';
import imports from '../services/imports';
import { postComment } from '../services/comments';



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
      console.log("POSTS", result)
      if (result) {
        this.setState({
          posts: result
        })
        console.log(this.state.posts)
      }
    } catch (e) {
      console.log("No posts or error:", e)
    }

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