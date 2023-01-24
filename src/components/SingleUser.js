import React from "react";
import { useState } from "react";
import "../App.css";

const SingleUser = ({ name, email, contact, website, address, company, username  }) => {
  const [buttonText, setbuttonText] = useState(true);
  const [detailedDes, setDetailDes] = useState("detailed-description-hide")

  const handleChange = () => {
    setbuttonText((prevState) => !prevState);
    setDetailDes("detailed-description")
  };
    
  const handleDescription = () => {
    setDetailDes("detailed-description-hide")
    setbuttonText(true);
  }
  return (
    <div className="detail-wrapper">
      <h1 className="company-name"> {name} </h1>
      <div className="contact-wrapper">
        <h1> website</h1>
        <h2> {website} </h2>
      </div>
      <div className="city-wrapper">
        <h1> phone </h1>
        <h2> {contact}</h2>
      </div>
      <div className="state-wrapper">
        <h1> email </h1>
        <h2> {email} </h2>
      </div>
      <button onClick={handleChange}>
        {buttonText ? "view detail" : "hide detail"}
      </button>
      <div className={detailedDes} onClick={handleDescription}>
      <h1> Description: </h1>
        <div className="company-wrapper">
          <h2> Company</h2>
          <h3>{company} </h3>
        </div>
        <div className="address-wrapper">
          <h2> Address</h2>
          <h3>{address}</h3>
        </div>
        <div className="username-wrapper">
          <h2> Username </h2>
          <h3> {username} </h3>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
