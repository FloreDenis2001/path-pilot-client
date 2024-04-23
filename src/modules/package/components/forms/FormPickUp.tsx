import {
  faHashtag,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faLocationPin,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import PackageAddress from "../../dto/PackageAddress";
import Address from "../../../address/model/Address";

interface PickUpProps {
  name: string;
  phone: string;
  address:Address;
  updatePickUp: (data: PackageAddress) => void;
}

const FormPickUp: React.FC<PickUpProps> = ({
  name,
  phone,
  address,
  updatePickUp,
}) => {
  let [originName, setOriginName] = useState<string>(name || "");
  let [originPhone, setOriginPhone] = useState<string>(phone || "");
  let [originCity, setOriginCity] = useState<string>(address.city || "");
  let [originStreet, setOriginStreet] = useState<string>(address.street || "");
  let [originNumber, setOriginNumber] = useState<string>(address.streetNumber || "");
  let [originCountry, setOriginCountry] = useState<string>(address.country || "");
  let [originPostalCode, setOriginPostalCode] = useState<string>(
    address.postalCode || ""
  );

  const memorizedUpdatePickUp = (data: PackageAddress) => {
    updatePickUp(data);
  };

  const updatePickUpData = () => {
    memorizedUpdatePickUp({
      name: originName,
      phone: originPhone,
      address: {
        city: originCity,
        street: originStreet,
        streetNumber: originNumber,
        country: originCountry,
        postalCode: originPostalCode,
      },
    });
  };

  useEffect(() => {
    updatePickUpData();
  }, [
    originName,
    originPhone,
    originCity,
    originStreet,
    originNumber,
    originCountry,
    originPostalCode,
  ]);

  return (
    <div className="modal__container__body__content">
      <h2>Pick-up from </h2>
      <div className="modal__container__body__content__main">
        <div className="modal__container__body__content__input">
          <label htmlFor="">Name</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />
            <input
              type="text"
              placeholder="Enter the name"
              value={originName}
              onChange={(e) => setOriginName(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Phone</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faHashtag} className="inputBox__icon" />

            <input
              type="text"
              placeholder="Enter phone number"
              value={originPhone}
              onChange={(e) => setOriginPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">City</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faLocation} className="inputBox__icon" />

            <input
              type="text"
              required
              placeholder="Enter the city"
              value={originCity}
              onChange={(e) => setOriginCity(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Street</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />

            <input
              type="text"
              required
              placeholder="Enter the street"
              value={originStreet}
              onChange={(e) => setOriginStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="modal__container__body__content__input">
          <label htmlFor="">Number</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faHashtag} className="inputBox__icon" />

            <input
              type="text"
              required
              placeholder="Enter the number"
              value={originNumber}
              onChange={(e) => setOriginNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Country</label>

          <div className="inputBox">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="inputBox__icon"
            />

            <input
              type="text"
              required
              placeholder="Enter the country"
              value={originCountry}
              onChange={(e) => setOriginCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Postal Code</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faLocationDot} className="inputBox__icon" />

            <input
              type="text"
              required
              placeholder="Enter the postal code"
              value={originPostalCode}
              onChange={(e) => setOriginPostalCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPickUp;
