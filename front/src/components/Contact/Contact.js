import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const deleteContact = (onRemoveContact, contactId) => {
  onRemoveContact(contactId);
};

const Contact = ({ contact, onRemoveContact }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={contact.img} />
      <Card.Body>
        <Card.Title>
          {contact.firstName} {contact.lastName}
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Footer className="p-2">
          <Button className="mr-2 btn-info">
            <Link className="text-light" to={`/contact/${contact.id}`}>
              View
            </Link>
          </Button>
          <Button
            onClick={()=>deleteContact(onRemoveContact, contact.id)}
            className="mr-2 btn-danger"
          >
            Delete
          </Button>
          <Link to={`/contact/edit/${contact.id}`}>
          <Button className="btn-success">Edit</Button>
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Contact;
