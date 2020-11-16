import React, { Component } from "react";
import Contacts from "../../../../data/ContactList";

export default class EditContact extends Component {
  state = {
    contact: {},
  };

  componentDidMount() {
    let id = +this.props.match.params.id;
    let contact = Contacts.find((contact) => contact.id === id);
    this.setState({ contact });
  }

  handleInputChange = (event, field) => {
    let contact = {...this.state.contact};
    contact[field] = event.target.value;
    this.setState({contact});
  };

  saveContact = () =>{

  }

  render() {
    return (
      <div className="contact-edit">
        <button onClick={this.back}>Back</button>
        <button onClick={this.remove}>Delete</button>
        <form onSubmit={this.handleSubmit}>
          <div>
            First Name:
            <input
              type="text"
              name="firstName"
              defaultValue={this.state.contact.firstName}
              onChange={(event)=> this.handleInputChange(event, 'firstName')}
            />
          </div>
          <div>
            Last Name:
            <input
              type="text"
              name="lastName"
              defaultValue={this.state.contact.lastName}
              onChange={(event)=> this.handleInputChange(event, 'lastName')}
            />
          </div>
          <div>
            Phone:
            <input
              type="text"
              name="phone"
              defaultValue={this.state.contact.phone}
              onChange={(event)=> this.handleInputChange(event, 'phone')}
            />
          </div>
          <div>
            Email:
            <input
              type="email"
              name="email"
              defaultValue={this.state.contact.email}
              onChange={(event)=> this.handleInputChange(event, 'email')}
            />
          </div>
          <input type="submit" onSubmit={this.saveContact}/>
        </form>
      </div>
    );
  }
}
