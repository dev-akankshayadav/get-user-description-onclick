import React from "react";
import { useState } from "react";
import "../App.css";

const SingleUser = ({ user }) => {
  const { name, email, website, phone, address, company, username } = user;
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible((prevState) => !prevState);
  };

  return (
    <div className="company-wrapper">
      <h2 className="company-name">{name}</h2>
      <div className="company-detail-wrapper">
        <div className="company-detail-row-wrapper">
          <div className="keyvalue-wrapper">
            <p className="title">Website</p>
            <p className="value">{website}</p>
          </div>
          <div className="keyvalue-wrapper">
            <p className="title">Phone</p>
            <p className="value">{phone}</p>
          </div>
          <div className="keyvalue-wrapper">
            <p className="title">Email</p>
            <p className="value">{email}</p>
          </div>
        </div>
        <button className="button" onClick={toggleDescription}>
          {descriptionVisible ? "hide detail" : "view detail"}
        </button>
      </div>
      {descriptionVisible && (
        <div className="company-description-wrapper">
          <p className="company-name">Description</p>
          <div className="company-description-row-wrapper">
            <div className="keyvalue-wrapper">
              <p className="title">Company</p>
              <p className="value">{company.name} </p>
            </div>
            <div className="keyvalue-wrapper">
              <p className="title">Address</p>
              <p className="value">{address.street}</p>
            </div>
            <div className="keyvalue-wrapper">
              <p className="title">Username</p>
              <p className="value">{username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
