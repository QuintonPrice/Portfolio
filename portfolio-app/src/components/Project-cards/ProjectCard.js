import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './projectcard.css';

const ProjectCard = ({ card }) => {
  const { cardImg, cardURL, cardTitle, cardText } = card;
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={cardImg} className="card-img" />
      <Card.Body className="card-body">
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button variant="primary" href={cardURL}>Go to project</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;