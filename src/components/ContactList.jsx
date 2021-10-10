import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="m-3">
      <h4 className="my-3 d-flex justify-content-between">
        Contact List
        <Link to="/add">
          <button type="button" className="btn btn-primary">
            Add Contact
          </button>
        </Link>
      </h4>
      <ul className="list-group">{renderContactList}</ul>
    </div>
  );
};

export default ContactList;
