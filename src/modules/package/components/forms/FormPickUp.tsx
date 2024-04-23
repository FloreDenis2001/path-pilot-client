import {
  faHashtag,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faLocationPin,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface PickUpProps {
    
}

const FormPickUp:React.FC<PickUpProps> = (
) => {
  let [originName, setOriginName] = useState<string>("");
  let [originPhone, setOriginPhone] = useState<string>("");
  let [originCity, setOriginCity] = useState<string>("");
  let [originStreet, setOriginStreet] = useState<string>("");
  let [originNumber, setOriginNumber] = useState<string>("");
  let [originCountry, setOriginCountry] = useState<string>("");
  let [originPostalCode, setOriginPostalCode] = useState<string>("");

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
              onChange={(e) => setOriginPostalCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPickUp;
