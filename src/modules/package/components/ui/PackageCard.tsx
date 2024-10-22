import {
  faCirclePlay,
  faCircleStop,
  faClock,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Package from "../../model/Package";
import { PackageStatus } from "../../model/PackageStatus";

interface PackageCardProps {
  pack: Package;
  onClick: (pack: Package) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pack, onClick }) => {
  const handlePackClick = () => {
    onClick(pack);
  };

  return (
    <div className="order__card " onClick={handlePackClick}>
      <div className="order__card__header">
        <h2>AWB : </h2>
        <p>{pack.awb}</p>
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
          <span>$ {pack.packageDetails.totalAmount}</span>
        </div>

        <div className="order__card__body__infoItem">
          <FontAwesomeIcon
            icon={faClock}
            className="order__card__body__infoItem__icon purple"
          />
          <span>4 days</span>
        </div>
      </div>

      <div className="order__card__status">
        {pack.status === PackageStatus.ASSIGNED ? (
          <button className="button__status done">{pack.status}</button>
        ) : (
          <button className="button__status cancelled">{pack.status}</button>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
