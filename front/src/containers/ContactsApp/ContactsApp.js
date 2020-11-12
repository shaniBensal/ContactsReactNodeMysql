import React, { Component } from "react";
import Contacts from "../../components/Contacts/Contacts";
import ContactList from "../../data/ContactList";

export default class ContactsApp extends Component {
  state = {
    contactList: [],
  };
  
  componentDidMount() {
    this.setState({ contactList: ContactList });
  }

  deleteSpecificContact = (contactId) => {
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
