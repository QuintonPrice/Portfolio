// Home page

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // imports link functionality
import '../../App.css'; // main css file //may need to change path
import '../Home/home.css'; // fix this later!!!!!

class Home extends Component {
    render() {
        return (
          <div id="home-main">
              <h1>Quinton Price</h1>
              <p>Computer Science student</p>
          </div>  
        )
    }
}

export default Home;