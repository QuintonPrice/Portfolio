import React, { Component, useEffect, useState  } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';

// css import
import './App.css';

// pages import
import Home from './pages/Home/Home';
import About from './pages/About/About';

// component import
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar-home/NavbarH';
import Header from './components/Header/Header';

function Routers () {
  
}

class App extends Component {

  render() {

    return (

      <div>
        <Router>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Redirect exact from="/" to="/home" />
            <Redirect to={{ pathname: "/" }} />
            <Redirect push to="google.com" />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
