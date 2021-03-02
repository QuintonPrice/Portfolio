import React, { Component } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';

// css import
import './App.css';

// pages import
import Home from './pages/Home/Home'

// component import
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'


class App extends Component {

  render() {

    return (

      <body>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Redirect exact from="/" to="/home" />
            <Redirect to={{pathname: "/"}} />
          </Switch>
          <p>This is a test!</p>
        </Router>
      </body>
    );
  }
}

export default App;
