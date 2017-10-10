import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class UserAccount extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentWillMount(){
    this._fetchCurrentUser();
  }

  _fetchCurrentUser = async () => {
    try {
    const res = await axios.get('/api/users');
    this.setState({user: res.data})
    console.log(res.data)
    } 
    catch(err) {
      console.log(err)
    }
  }

  _deleteCurrentUser = async () => {
    try {
      const res = await axios.delete('/auth');
      this._logout();
      return res.data
    } 
    catch(err) {
      console.log(err);
    }
  }

  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
  }

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