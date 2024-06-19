import {
  faBoxOpen,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Package from "../../model/Package";

interface PackInformationProps {
  pack: Package;
}

const PackInformation: React.FC<PackInformationProps> = ({ pack }) => {
  console.log(pack);  
  return (
    <div className="information">
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faBoxOpen} className="brown" />
          <h2>Delivery Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Width  </h3>
            <p>{pack.packageDetails.width} cm</p>
          </div>
          <div className="information__body__textBox">
            <h3>Height </h3>
            <p>{pack.packageDetails.height} cm</p>
          </div>
          <div className="information__body__textBox">
            <h3>Length </h3>
            <p>{pack.packageDetails.length} cm</p>
          </div>
          <div className="information__body__textBox">
            <h3>Weight </h3>
            <p>{pack.packageDetails.weight} kg</p>
          </div>
      
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faLocationDot} className="blue" />
          <h2>Location</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Pickup Location</h3>
            <p>
              {pack.shipmentDTO.origin.country} , {pack.shipmentDTO.origin.city} , {pack.shipmentDTO.origin.street} , {pack.shipmentDTO.origin.streetNumber} , {pack.shipmentDTO.origin.postalCode}
            </p>
          </div>
          <div className="information__body__textBox">
            <h3>Drop Off Location</h3>
            <p>
            {pack.shipmentDTO.destination.country} , {pack.shipmentDTO.destination.city} , {pack.shipmentDTO.destination.street} , {pack.shipmentDTO.destination.streetNumber} , {pack.shipmentDTO.destination.postalCode} 
            </p>
          </div>

          <div className="information__body__textBox">
            <h3>Distance </h3>
            <p>
              {pack.shipmentDTO.totalDistance} km
            </p>
          </div>
        </div>
      </div>
      <div className="information__column">
        <div className="information__header">
          <FontAwesomeIcon icon={faUser} className="yellow" />
          <h2>Customer Info</h2>
        </div>
        <div className="information__body">
          <div className="information__body__textBox">
            <h3>Full Name</h3>
            <p>{pack.shipmentDTO.originName}</p>
          </div>
      
          <div className="information__body__textBox">
            <h3>Phone No</h3>
            <p>{pack.shipmentDTO.originPhone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackInformation;
