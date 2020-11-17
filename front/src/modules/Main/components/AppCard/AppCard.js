import React from "react";
import { Card } from "react-bootstrap";
import './AppCard.css';
import { Link } from "react-router-dom";

const AppCard = ({ card }) => {
  return (
    <div>
    <Link className="link" to={card.url}>
      <Card style={{ width: "18rem" }}>
        <Card.Header className="image-height" variant="top" style={{backgroundImage: `url(${card.image})`}}></Card.Header>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </div>
  );
};

export default AppCard;
