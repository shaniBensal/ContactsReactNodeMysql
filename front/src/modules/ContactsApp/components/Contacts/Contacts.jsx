import React from 'react';
import Contact from '../Contact/Contact';
import Style from './Contacts.css';

const removeContactFromCard=(deleteContact, contactId)=> {
  deleteContact(contactId)
}

const Contacts = ({contacts, deleteContact}) => {
    const contactsPreview = contacts.map((contact) => {
        return (
          <li key={contact.id} className="contact-list-item mr-2">
            <Contact contact={contact} onRemoveContact={(contactId)=> removeContactFromCard(deleteContact, contactId)}/>
          </li>
        )
      });
    
      return (
        <div className="contacts-list">
          <ul className="d-flex align-items-center">
            {contactsPreview}
          </ul>
        </div>
      );
      };
export default Contacts;
