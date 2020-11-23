import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgAvatar from "../../../../assets/img_avatar.png";
import Image from "react-bootstrap/Image";
import "./ContactDetails.scss";
import { Button } from "react-bootstrap";

class ContactDetails extends Component {
  state = {
    contact: {},
  };

  render() {
    const contact = this.state.contact;
    const avatar = contact.picture || imgAvatar;

    return (
      <div className="contact-details">
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <div className="">
          <Image
            src={avatar}
            alt="Person"
            className="profile-image"
            roundedCircle
          />
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
          <div className="button-wrapper pt-2">
            <Button variant="light" className="mr-2">
              <Link className="link" to={`/contacts`}>Back</Link>
            </Button>
            <Button variant="info" className="mr-2">
              <Link className="link" to={`/contact/edit/${contact.id}`}>
                Edit
              </Link>
            </Button>
            <Button variant="danger" className="mr-2">
              Delete
            </Button>
            <Button variant="success">Masseges</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
