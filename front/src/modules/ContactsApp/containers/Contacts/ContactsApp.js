import React, { Component } from "react";
import Contacts from "../../components/Contacts/Contacts";
import service from "../../_service/contacts";

export default class ContactsApp extends Component {
  state = {
    contactList: [],
  };

  componentDidMount() {
    service.getAllContacts().then((res) => {
      this.setState({ contactList: res.data });
    });
  }

  deleteSpecificContact = (contactId) => {
    service.deleteSpesificContact(contactId);
    let filteredList = this.state.contactList.filter((contact) => {
      return contact.id !== contactId;
    });
    this.setState({ contactList: filteredList });
  };
  render() {
    return (
      <Contacts
        contacts={this.state.contactList}
        deleteContact={this.deleteSpecificContact}
      />
    );
  }
}
