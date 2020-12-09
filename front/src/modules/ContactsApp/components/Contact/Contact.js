import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ButtonList from "./Buttons/ButtonList";
import defaultAvatar from "../../../../assets/img_avatar.png";

const deleteContact = (onRemoveContact, contactId) => {
  onRemoveContact(contactId);
};

const Contact = ({ contact, onRemoveContact }) => {
  const userPic = contact.img ? contact.img : defaultAvatar;
  return (
    <React.Fragment>
      <div className="container d-flex mb-2 py-2 border rounded">
        <div className="col-4 pl-0">
          <div className="d-flex align-items-center">
            <img src={userPic} alt={contact.firstName} />
            <p className="mb-0 pl-2">
              {contact.firstName} {contact.lastName}
            </p>
          </div>
        </div>
        <div className="col-8 justify-content-end d-flex pr-0">
          {ButtonList.map((btn) => {
            return (
              <Button key={btn.id} className={btn.classNameBtn}>
                <Link
                  className={btn.classNameLink}
                  to={`${btn.linkUrl}${contact.id}`}
                >{btn.icon}</Link>
              </Button>
            );
          })}

          <Button
            onClick={() => deleteContact(onRemoveContact, contact.id)}
            className="mr-2 btn-danger"
          >
            Delete
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
