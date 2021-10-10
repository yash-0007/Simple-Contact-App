import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="d-flex">
          <img src={user} alt="user" width="50vw" />
          <div className="px-2">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="fw-bold">{name}</div>
              {email}
            </Link>
          </div>
        </div>
        <i
          className="fa fa-trash-alt fa-lg align-self-center pointer"
          style={{ color: "red" }}
          aria-hidden="true"
          onClick={() => props.clickHandler(id)}
        ></i>
      </li>
    </div>
  );
};

export default ContactCard;
