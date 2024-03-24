import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faGasPump, faCog } from "@fortawesome/free-solid-svg-icons";

const VehicleInformation = () => {
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faCar} />
          <h2>Vehicle Information</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Make</h3>
            <p>Toyota</p>
          </div>
          <div className="information__body__textBox">
            <h3>Model</h3>
            <p>Camry</p>
          </div>
          <div className="information__body__textBox">
            <h3>Year</h3>
            <p>2020</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faGasPump} />
          <h2>Fuel Information</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Fuel Type</h3>
            <p>Petrol</p>
          </div>
          <div className="information__body__textBox">
            <h3>Fuel Capacity</h3>
            <p>60 liters</p>
          </div>
          <div className="information__body__textBox">
            <h3>Current Fuel Level</h3>
            <p>40 liters</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faCog} />
          <h2>Maintenance</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Last Service</h3>
            <p>20 Jan 2024</p>
          </div>
          <div className="information__body__textBox">
            <h3>Next Service Due</h3>
            <p>20 Jul 2024</p>
          </div>
          <div className="information__body__textBox">
            <h3>Mileage</h3>
            <p>50,000 km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformation;
