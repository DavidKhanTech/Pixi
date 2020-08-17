import React, { Component } from 'react';
import api from '../services/api-helper';


export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    let result = await api.getPosts()
    if (result) {
      this.setState({
        user: result.user,
        post: result.post
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Posts:</h1>
        <ul>
          {this.state.posts.length > 0 ?
            this.state.posts.map(post => <li><a href={`/posts/${post.id}`}>{post.post}</a></li>)
            : "No Posts"}
        </ul>
      </div>
    )
  }
}