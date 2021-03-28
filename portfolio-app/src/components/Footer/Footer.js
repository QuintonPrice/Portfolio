// footer component
import React, { Component } from 'react';
import './Footer.css'; // css import

class Footer extends Component {
    render() {
        return (
            <footer className="fixed-bottom">
                <a href="mailto:quintonp10@gmail.com">Contact</a>.
                <a href="google.com" target="blank">THIS IS A TEST</a>
            </footer>
        );
    }
}

export default Footer;