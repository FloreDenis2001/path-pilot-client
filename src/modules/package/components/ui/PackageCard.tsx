import {
  faCirclePlay,
  faCircleStop,
  faClock,
  faMoneyBill,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Package from "../../model/Package";

interface PackageCardProps {
  pack: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pack }) => {
  return (
    <div className="order__card">
      <div className="order__card__header">
        <h2>Client : </h2>
        <span>{pack.shipmentDTO.originName}</span>
      </div>

      <div className="order__card__body">
        <div className="order__card__body__infoItem">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="order__card__body__infoItem__icon green"
          />
          <span>{pack.shipmentDTO.origin.city}</span>
        </div>

        <div className="order__card__body__infoItem">
          <FontAwesomeIcon
            icon={faCircleStop}
            className="order__card__body__infoItem__icon red"
          />
          <span>{pack.shipmentDTO.destination.city}</span>
        </div>
        <div className="order__card__body__infoItem">
          <FontAwesomeIcon
            icon={faMoneyBill}
            className="order__card__body__infoItem__icon orange"
          />
          <span>{pack.shipmentDTO.distance}</span>
        </div>

        <div className="order__card__body__infoItem">
          <FontAwesomeIcon
            icon={faClock}
            className="order__card__body__infoItem__icon purple"
          />
          <span>{pack.shipmentDTO.distance}</span>
        </div>
      </div>

      <div className="order__card__status">
        {pack.type === "ASSIGNED" ? (
          <button className="button__status assigned">{pack.type}</button>
        ) : (
          <button className="button__status cancelled">{pack.type}</button>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
