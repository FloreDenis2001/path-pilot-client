import React, { useCallback, useEffect, useState } from "react";
import PackageDetails from "../../dto/PackageDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown19, faMoneyBill, faSignature } from "@fortawesome/free-solid-svg-icons";

interface FormPackageDeliveryProps {
  weight: number;
  height: number;
  width: number;
  length: number;
  totalAmount?: number; 
  deliveryDescription: string;
  updatePackageDetails: (data: PackageDetails) => void;
  editable?: boolean; 
}

const FormPackageDelivery: React.FC<FormPackageDeliveryProps> = ({
  weight: initialWeight,
  height: initialHeight,
  width: initialWidth,
  length: initialLength,
  totalAmount: initialTotalAmount,
  deliveryDescription: initialDeliveryDescription,
  updatePackageDetails,
  editable = true, 
}) => {
  let [weight, setWeight] = useState<number>(initialWeight || 0);
  let [height, setHeight] = useState<number>(initialHeight || 0);
  let [width, setWidth] = useState<number>(initialWidth || 0);
  let [length, setLength] = useState<number>(initialLength || 0);
  let [totalAmount, setTotalAmount] = useState<number>(
    initialTotalAmount || 0
  );
  let [deliveryDescription, setDeliveryDescription] = useState<string>(
    initialDeliveryDescription || ""
  );

  const memorizedUpdatePackageDetails = useCallback(
    (data: PackageDetails) => {
      updatePackageDetails(data);
    },
    [updatePackageDetails]
  );

  const updatePackageDetailsData = () => {
    memorizedUpdatePackageDetails({
      totalAmount: totalAmount,
      weight: weight,
      height: height,
      width: width,
      length: length,
      deliveryDescription: deliveryDescription,
    });
  };

  useEffect(() => {
    updatePackageDetailsData();
  }, [weight, height, width, length, totalAmount, deliveryDescription]);

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
              value={weight}
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
              value={height}
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
              value={length}
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
              value={width}
              placeholder="Enter the width"
              onChange={(e) => setWidth(+e.target.value)}
            />
          </div>
        </div>

        {editable && ( 
          <div className="modal__container__body__content__input">
            <label htmlFor="">Price</label>
            <div className="inputBox">
              <FontAwesomeIcon icon={faMoneyBill} className="inputBox__icon" />
              <input
                type="number"
                placeholder="Enter the price"
                required
                value={totalAmount}
                onChange={(e) => setTotalAmount(+e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="modal__container__body__content__input">
          <label htmlFor="">Delivery Details :</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />
            <input
              type="text"
              placeholder="Enter the details for our driver"
              value={deliveryDescription}
              onChange={(e) => setDeliveryDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPackageDelivery;
