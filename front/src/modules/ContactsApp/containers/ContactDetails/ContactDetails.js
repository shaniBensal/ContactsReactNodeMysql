import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgAvatar from "../../../../assets/img_avatar.png";

class ContactDetails extends Component {
  state = {
    contact: {}
  }

  render() {
    const contact = this.state.contact
    const avatar = contact.picture || imgAvatar

    return (
      <div className="contact-details">
        <div className="contact-details-body">
          <Link to={`/contact`}>Back</Link>
          <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
          <img src={avatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
        </div>
      </div>
    )
  }

}

export default ContactDetails;