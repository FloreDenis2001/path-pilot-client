import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Driver from "../../../driver/models/Driver";

interface DriverInformationProps {
   driver:Driver;
}
const DriverInformation:React.FC<DriverInformationProps> = ({driver}) => {
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faTruck} className="green" />
          <h2>Driver Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>License Number </h3>
            <p>{driver.licenseNumber}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Salary </h3>
            <p>{driver.salary} RON</p>
          </div>
          <div className="information__body__textBox">
            <h3>Experience</h3>
            <p>{driver.experience} years</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="blue"  />
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
          <FontAwesomeIcon icon={faUser} className="yellow" />
          <h2>Contact Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Full Name</h3>
            <p>{driver.lastName} {driver.firstName}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Email</h3>
            <p>{driver.email}</p>
          </div>
          <div className="information__body__textBox">
            <h3>Phone No</h3>
            <p>{driver.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInformation;
