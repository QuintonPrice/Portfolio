// Projects page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component
import ProjectCard from '../../components/Project-cards/ProjectCard.js'; // imports ProjectCard component

import '../../App.css'; // main css file //may need to change path
import './projects.css'; // projects css file

import { CardData } from './CardData.js'; // data import for card data

// TODO: Make cards go onto new row when more than three cards are displayed

class Projects extends Component {
    render() {
        return (
            <div id="project-div">
                <Navbar navId="navb" logoId="logo" logoText="qprice" logoClass="mr-auto" class="navbar bg-white navbar-expand-md sticky-top navbar-fixed-top shadow ml-auto" />
                <h1 id="header-projects" className="font-weight-bold text-uppercase text-center ">Projects</h1>
                <div id="card-div">
                    {CardData.map((item, index) => {
                        return (
                            <ProjectCard cardImg={item.cardImg} cardURL={item.cardURL} cardTitle={item.cardTitle} cardText={item.cardText} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Projects;