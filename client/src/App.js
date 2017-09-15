import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import Category from "./components/Category";
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
import GlobalNav from './components/GlobalNav.js';
// import { setAxiosDefaults } from './util';
import "./App.css";

class App extends Component {
  // componentWillMount(){
    // setAxiosDefaults();
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <GlobalNav />
          <Route exact path="/" component={CategoryList}/>
          {/* <Route exact path="/signup" component={SignUp}/> */}
          {/* <Route exact path="/signin" component={SignIn}/> */}
          <Route path="/category/:id" component={Category}/>
        </div>
      </Router>
    );
  }
}

export default App;