// 404 page

import React, { Component } from 'react';

import '../../App.css'; // main css file //may need to change path
import '../404/404Page.css'; // home css file

class FourOFourPage extends Component {
    render() {
        return (
          <div id="fourofour">
              <h1 id="fourofourtext" className="font-weight-bold align-middle text-center">Error 404 - Page Not Found</h1>
              <p id="gohome" className="align-middle text-center font-weight-bold"><a className="btn btn-light" href="#/home">Go Back Home</a></p>
          </div> 
        )
    }
}

export default FourOFourPage;