import React, { Component, } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';

// css import
import './App.css';

// pages import
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

// component import

// TODO //
// Add darkmode to app.js to update state, then pass that state value into each component and use conditions in components to check for class

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Redirect exact from="/" to="/home" />
            <Redirect to={{ pathname: "/" }} />
            <Redirect push to="google.com" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
