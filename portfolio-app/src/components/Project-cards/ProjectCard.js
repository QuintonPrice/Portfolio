import React from 'react';
import { Card } from 'react-bootstrap';
import './projectcard.css';

const ProjectCard = ({ card }) => {
  const { cardImg, cardURL, cardTitle, cardText } = card;
  return (
    <a href={cardURL} target="_blank" rel="noopener noreferrer">
      <Card className="project-card text-dark">
        <Card.Img variant="top" src={cardImg} className="card-img" />
        <Card.Body className="card-body">
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default ProjectCard;
