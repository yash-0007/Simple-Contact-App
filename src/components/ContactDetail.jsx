import React from "react";
import avatar from "../images/avatar.png";

const ContactDetail = (props) => {
  // console.log(props.location.state.contact);
  const { name, email } = props.location.state.contact;
  return (
    <div className="card container my-5" style={{ width: "18rem" }}>
      <img src={avatar} className="card-img-top" alt="user" />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text">{email}</p>
        <button
          type="button"
          className="btn btn btn-primary"
          onClick={() => props.history.goBack()}
        >
          Back To Contact List
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
