import {
  faBoxOpen,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const OrderInformation = () => {
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faBoxOpen} className="brown" />
          <h2>Delivery Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Pickup Date</h3>
            <p>26 Dec 2023</p>
          </div>
          <div className="information__body__textBox">
            <h3>Drop Off Time</h3>
            <p>4 Days Estimation</p>
          </div>
          <div className="information__body__textBox">
            <h3>Total Weight </h3>
            <p>30.85 KG</p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faLocationDot} className="blue"  />
          <h2>Location</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Pickup Location</h3>
            <p>5th Cross, 9th Main, Indiranagar, Bangalore, Karnataka, India</p>
          </div>
          <div className="information__body__textBox">
            <h3>Drop Off Location</h3>
            <p>
              10th Cross, 9th Main, Indiranagar, Bangalore, Karnataka, India
            </p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faUser} className="yellow"  />
          <h2>Customer Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Full Name</h3>
            <p>Flore Denis</p>
          </div>
          <div className="information__body__textBox">
            <h3>Email</h3>
            <p>floredenis907@yahoo.com</p>
          </div>
          <div className="information__body__textBox">
            <h3>Phone No</h3>
            <p>075138911</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
