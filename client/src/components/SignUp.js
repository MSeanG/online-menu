import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setAxiosHeaders } from '../util';
import styled from 'styled-components';

const FormStyles = styled.div`
form {
  max-width: 600px;
  border: solid 1px;
  border-radius: 9px;
  padding: 1em;
  background: rgba(128,128,128,0.06);
  border-top-color: rgba(255,255,255,0.16);
  border-right-color: rgba(255,255,255,0);
  border-bottom-color: rgba(255,255,255,0);
  border-left-color: rgba(255,255,255,0.16);
  box-shadow: 1px 1px 5px rgba(0,0,0,1);
  margin: 2em auto;
  
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 21px;
  font-size: 2em;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid rgba(128,128,128,0.5);
  text-align:left;
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  min-width: 0;
}
.field-set {
  max-width: 67%;
  margin: 0 auto;
}
label {
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  font-size: 2em;
  border-radius: 10px;
  border-color: rgba(128,128,128,0.5);
  border-width: 1px;
  margin-bottom: 16px;
  padding-left: .5em;
  width: 100%;
}
.button {
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
  position: relative;
  float: left;
  border-radius: 10px;
  font-size: 2em;
  color: #FFF;
  text-decoration: none;
  background-color: #3498DB;
  border-bottom: 5px solid #2980B9;
  text-shadow: 0px -2px #2980B9;
  witdh:100%;
}
div.actions {
  width: 100%;
  padding-top: 1em;
}
`;

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       password_confirmation: '',
       redirect: false
   }
 }

 _signUp = async (e) => {
   e.preventDefault();
   const payload = {
     email: this.state.email,
     password: this.state.password,
     password_confirmation: this.state.password_confirmation
   }
   const response = await axios.post('/auth', payload);
   setAxiosHeaders(response.headers);
   this.setState({redirect: true})
 }

 _signIn = (e) => {
   e.preventDefault();
   this.setState({redirect: true})
 }

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
     <FormStyles>
       <form onSubmit={this._signUp}>
       <legend>Sign Up</legend>
        <fieldset>
        <div className="field-set">
         <div>
           <label htmlFor="email">E-mail: </label>
           <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
         </div>
         <div>
           <label htmlFor="password">Password: </label>
           <input onChange={this._handleChange} type="text" name="password" value={this.state.password} />
         </div>
         <div>
           <label htmlFor="password">Confirm Password: </label>
           <input onChange={this._handleChange} type="text" name="password_confirmation" value={this.state.password_confirmation} />
         </div>
         <div className="actions">
         <button className="button">Sign Up</button>
         </div>
         </div>
        </fieldset>
         <Link to="/signin">Sign In</Link>
       </form>
     </FormStyles>
   );
 }
}

export default SignUp;