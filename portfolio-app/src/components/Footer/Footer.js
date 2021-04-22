// footer component
import React, { Component } from 'react';
import './Footer.css'; // css import

class Footer extends Component {
    render() {
        return (
            <footer id="" className="fixed-bottom">
                <a href="mailto:quintonp10@gmail.com"><i id={this.props.emailid} className="fas fa-envelope-square"></i></a>
            </footer>
        );
    }
}

export default Footer;