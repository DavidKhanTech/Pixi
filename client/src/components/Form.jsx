// import React, { Component } from 'react'
// import api from '../services/api-helper';

// export default class Form extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     console.log("POST:", this.state.value)
//     let post = this.state.value

//     let result = await api.savePost({
//       post,
//       id: { user_id }
//     })
//     console.log("RES", result)
//   }

//   render() {

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <textarea
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleSubmit}>Post</button>
//       </form>
//     )
//   }
// }

import React, { Component } from 'react'
import imports from '../services/imports'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      currentUser: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser)
    this.setState({
      currentUser
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    let post = this.state.value
    let result = await imports.savePost({
      post,
      user_id: this.state.currentUser.id
    })
    console.log("RES", result)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Post</button>
      </form>
    )
  }
}