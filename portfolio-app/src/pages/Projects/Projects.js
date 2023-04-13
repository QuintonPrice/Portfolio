// Projects.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../../components/Project-cards/ProjectCard.js';
import NavBar from '../../components/Navbar/Navbar.js';
import { CardData } from './CardData.js';
import './projects.css';

const Projects = () => {
  return (
    <>
    <NavBar background="white" logoText='qprice' shadow="t" page="projects"/>
    <Container>
      {CardData.map((card, index) => (
        index % 2 === 0 ? (
          <Row key={index}>
            <Col>
              <ProjectCard card={card} />
            </Col>
            {index === CardData.length - 1 ? (
              <Col></Col>
            ) : (
              <Col>
                <ProjectCard card={CardData[index + 1]} />
              </Col>
            )}
          </Row>
        ) : null
      ))}
    </Container>
    </>
  );
};

export default Projects;
