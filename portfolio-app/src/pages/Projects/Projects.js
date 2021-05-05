// Projects page

import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'; // imports NavBar component
import ProjectCard from '../../components/Project-cards/ProjectCard.js'; // imports ProjectCard component

import '../../App.css'; // main css file //may need to change path
import './projects.css'; // projects css file

import placeholder from '../../img/placeholder.png';

class Projects extends Component {
    render() {
        return (
            <div id="project-div">
                <Navbar navId="navb" logoId="logo" logoText="qprice" logoClass="mr-auto" class="navbar bg-white navbar-expand-md sticky-top navbar-fixed-top shadow ml-auto" />
                <h1 id="header-projects" className="font-weight-bold text-uppercase text-center ">Projects</h1>
                <div id="card-div">
                    <ProjectCard cardImg="https://via.placeholder.com/1000x500/fafafa/?text=1000x500+Placeholder+Image" cardURL="#" cardTitle="Card title" cardText="This is placeholder text. When a project is added, it will go here!"/>
                    <ProjectCard cardImg="https://via.placeholder.com/1000x500/fafafa/?text=1000x500+Placeholder+Image" cardURL="#" cardTitle="Card title" cardText="This is placeholder text. When a project is added, it will go here!"/>
                    <ProjectCard cardImg="https://via.placeholder.com/1000x500/fafafa/?text=1000x500+Placeholder+Image" cardURL="#" cardTitle="Card title" cardText="This is placeholder text. When a project is added, it will go here!"/>
                </div>
            </div>
        )
    }
}

export default Projects;