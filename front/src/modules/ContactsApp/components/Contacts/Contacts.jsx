import React from "react";
import Contact from "../Contact/Contact";
import { ListGroup } from "react-bootstrap";

const removeContactFromCard = (deleteContact, contactId) => {
  deleteContact(contactId);
};

const Contacts = ({ contacts, deleteContact }) => {
  const contactsPreview = contacts.map((contact) => {
    return (
      <Contact
      key={contact.id}
        contact={contact}
        onRemoveContact={(contactId) =>
          removeContactFromCard(deleteContact, contactId)
        }
      />
    );
  });

  return (
    <div>
    <h1>Contact List</h1>
      <ListGroup variant="flush">
        <ListGroup.Item className="app-bg">{contactsPreview}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default Contacts;
