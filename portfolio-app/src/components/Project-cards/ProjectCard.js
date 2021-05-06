// Project card component

import React, { Component } from 'react';

import '../../App.css'; // App.css import
import './projectcard.css'; // project cards css file

class ProjectCards extends Component {
    render() {
        return (
            <div className="card mx-auto project-cards rounded border shadow">
                <img className="card-img-top" alt="Project cards"src={this.props.cardImg}></img>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{this.props.cardTitle}</h5>
                    <p className="card-text">{this.props.cardText}</p>
                    <a href={this.props.cardURL} className="btn">See Project</a>
                </div>
            </div>
        )
    }
}

export default ProjectCards;