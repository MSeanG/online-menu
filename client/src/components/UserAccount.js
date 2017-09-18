import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class UserAccount extends Component {
  render () {
    if (!localStorage['access-token']) {
      return (<Redirect to='/' />)
    }
  
    return (
      <div>
        <h1>Hello, </h1>
      </div>
    )
  }
}
export default UserAccount;