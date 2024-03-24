import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";

const DriverInformation = () => {
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faTruck} />
          <h2>Driver Information</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Vehicle Number</h3>
            <p>KAR 1234</p>
          </div>
          <div className="information__body__textBox">
            <h3>License Plate</h3>
            <p>ABC123</p>
          </div>
          <div className="information__body__textBox">
            <h3>Driver Name</h3>
            <p>John Doe</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <h2>Location</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Current Location</h3>
            <p>5th Avenue, New York, NY, USA</p>
          </div>
          <div className="information__body__textBox">
            <h3>Last Seen</h3>
            <p>1 hour ago</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faUser} />
          <h2>Contact Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Full Name</h3>
            <p>John Doe</p>
          </div>
          <div className="information__body__textBox">
            <h3>Email</h3>
            <p>johndoe@example.com</p>
          </div>
          <div className="information__body__textBox">
            <h3>Phone No</h3>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInformation;
