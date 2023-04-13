// Home page
import React, { Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import '../../App.css';
import '../Home/home.css';

class Home extends Component {
    render() {
        return (
          <div id="home-div">
              <NavBar background="clear" logoText='' shadow="" page="home"/>
              <h1 id="name" className="home-text font-weight-bold text-uppercase text-center">Quinton Price</h1>
              <p id="subheader" className="home-text text-center text-uppercase">Computer Science student</p>
          </div> 
        )
    }
}

export default Home;