import {
  faHashtag,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Address from "../../../address/model/Address";
import PackageAddress from "../../dto/PackageAddress";

interface FormDeliveryProps {
  name: string;
  phone: string;
  address: Address;
  updateDelivery: (data: PackageAddress) => void;
}

const FormDelivery: React.FC<FormDeliveryProps> = ({
  name,
  phone,
  address,
  updateDelivery,
}) => {
  let [destinationName, setDestinationName] = useState<string>(name || "");
  let [destinationPhone, setDestinationPhone] = useState<string>(phone || "");
  let [destinationCity, setDestinationCity] = useState<string>(
    address.city || ""
  );
  let [destinationStreet, setDestinationStreet] = useState<string>(
    address.street || ""
  );
  let [destinationNumber, setDestinationNumber] = useState<string>(
    address.streetNumber || ""
  );
  let [destinationCountry, setDestinationCountry] = useState<string>(
    address.country || ""
  );
  let [destinationPostalCode, setDestinationPostalCode] = useState<string>(
    address.postalCode || ""
  );

  const memorizedUpdateDelivery = (data: PackageAddress) => {
    updateDelivery(data);
  };

  const updateDeliveryData = () => {
    memorizedUpdateDelivery({
      name: destinationName,
      phone: destinationPhone,
      address: {
        city: destinationCity,
        street: destinationStreet,
        streetNumber: destinationNumber,
        country: destinationCountry,
        postalCode: destinationPostalCode,
      },
    });
  };

  useEffect(() => {
    updateDeliveryData();
  }, [
    destinationName,
    destinationPhone,
    destinationCity,
    destinationStreet,
    destinationNumber,
    destinationCountry,
    destinationPostalCode,
  ]);

  return (
    <div className="modal__container__body__content">
      <h2>Delivery To </h2>
      <div className="modal__container__body__content__main">
        <div className="modal__container__body__content__input">
          <label htmlFor="">Name</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />
            <input
              type="text"
              placeholder="Enter the name"
              value={destinationName}
              onChange={(e) => setDestinationName(e.target.value)}
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
              value={destinationPhone}
              onChange={(e) => setDestinationPhone(e.target.value)}
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
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
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
              value={destinationStreet}
              onChange={(e) => setDestinationStreet(e.target.value)}
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
              value={destinationNumber}
              onChange={(e) => setDestinationNumber(e.target.value)}
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
              value={destinationCountry}
              onChange={(e) => setDestinationCountry(e.target.value)}
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
              value={destinationPostalCode}
              placeholder="Enter the postal code"
              onChange={(e) => setDestinationPostalCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDelivery;
