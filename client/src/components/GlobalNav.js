import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: maroon;
  box-shadow: 0 1px 2px 3px rgba(0,0,0,1);
  a {
    color:white;
    font-size: 1.25em;
    margin: 0 16px;
    text-decoration: none;
    &:visited {
      color: white;
    }
  }
`;

class GlobalNav extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <Link to="/">
            <h1>Menu</h1>
          </Link>
          <div>
            <span>Signed In As: {this.state.user.email}</span>
            <a href="#" onClick={this._logOut}> Log Out </a>
          </div>
        </Nav>
      );
    }
    return (
      <Nav>
        <Link to="/">
          <h1>Menu</h1>
        </Link>
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Log In</Link>
        </div>
      </Nav>
    );
  }
}

export default GlobalNav;