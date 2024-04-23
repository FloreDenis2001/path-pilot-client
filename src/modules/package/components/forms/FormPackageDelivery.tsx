import {
  faArrowDown19,
  faMoneyBill,
  faSignature,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaMoneyBill } from "react-icons/fa";

interface FormPackageDeliveryProps {
  weight: number;
  height: number;
  width: number;
  length: number;
  totalAmmount: number;
  deliveryDetails: string;
}

const FormPackageDelivery: React.FC<FormPackageDeliveryProps> = ({
  weight: initialWeight,
  height: initialHeight,
  width: initialWidth,
  length: initialLength,
  totalAmmount: initialTotalAmmount,
  deliveryDetails: initialDeliveryDetails,
}) => {
  let [weight, setWeight] = useState<number>(initialWeight || 0);
  let [height, setHeight] = useState<number>(initialHeight || 0);
  let [width, setWidth] = useState<number>(initialWidth || 0);
  let [length, setLength] = useState<number>(initialLength || 0);
  let [totalAmmount, setTotalAmmount] = useState<number>(
    initialTotalAmmount || 0
  );
  let [deliveryDetails, setDeliveryDetails] = useState<string>(
    initialDeliveryDetails || ""
  );

//   useEffect(() => {
//     setWeight(initialWeight);
//     setHeight(initialHeight);
//     setWidth(initialWidth);
//     setLength(initialLength);
//     setTotalAmmount(initialTotalAmmount);
//     setDeliveryDetails(initialDeliveryDetails);
//   }, [initialWeight, initialHeight, initialWidth, initialLength]);

  return (
    <div className="modal__container__body__content">
      <h2>Package Details</h2>
      <div className="modal__container__body__content__main">
        <div className="modal__container__body__content__input">
          <label htmlFor="">Weight</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faArrowDown19} className="inputBox__icon" />
            <input
              type="number"
              required
              placeholder="Enter the weight"
              onChange={(e) => setWeight(+e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Height</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faArrowDown19} className="inputBox__icon" />

            <input
              type="number"
              required
              placeholder="Enter the height"
              onChange={(e) => setHeight(+e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Length</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faArrowDown19} className="inputBox__icon" />

            <input
              type="number"
              required
              placeholder="Enter the length"
              onChange={(e) => setLength(+e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Width</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faArrowDown19} className="inputBox__icon" />

            <input
              type="number"
              required
              placeholder="Enter the width"
              onChange={(e) => setWidth(+e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Price</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faMoneyBill} className="inputBox__icon" />

            <input
              type="number"
              placeholder="Enter the price"
              required
              onChange={(e) => setTotalAmmount(+e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Delivery Details :</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />

            <input
              type="text"
              placeholder="Enter the details for our driver"
              onChange={(e) => setDeliveryDetails(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPackageDelivery;
