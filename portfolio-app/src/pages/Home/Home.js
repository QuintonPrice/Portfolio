// Home page

import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // imports link functionality
import '../../main.css'; // main css file //may need to change path
//import '/home.css'; // fix this later!!!!!

class Home extends Component {
    render() {
        return (
          <div>
              <h1>This is a test for the Home Component!</h1>
          </div>  
        )
    }
}

export default Home;