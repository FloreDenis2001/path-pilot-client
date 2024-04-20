import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import PackageRequest from "../../dto/PackageRequest";
import Address from "../../../address/model/Address";
import PackageService from "../../service/PackageService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";

interface ModalAddPackageProps {
  handleOpenModalAddOrder: () => void;
}

const ModalAddPackage: React.FC<ModalAddPackageProps> = ({
  handleOpenModalAddOrder,
}) => {
  let [originName, setOriginName] = useState<string>("");
  let [originPhone, setOriginPhone] = useState<string>("");
  let [originCity, setOriginCity] = useState<string>("");
  let [originStreet, setOriginStreet] = useState<string>("");
  let [originNumber, setOriginNumber] = useState<string>("");
  let [originCountry, setOriginCountry] = useState<string>("");
  let [originPostalCode, setOriginPostalCode] = useState<string>("");
  let [destinationName, setDestinationName] = useState<string>("");
  let [destinationPhone, setDestinationPhone] = useState<string>("");
  let [destinationCity, setDestinationCity] = useState<string>("");
  let [destinationStreet, setDestinationStreet] = useState<string>("");
  let [destinationNumber, setDestinationNumber] = useState<string>("");
  let [destinationCountry, setDestinationCountry] = useState<string>("");
  let [destinationPostalCode, setDestinationPostalCode] = useState<string>("");
  let [weight, setWeight] = useState<number>(0);
  let [height, setHeight] = useState<number>(0);
  let [width, setWidth] = useState<number>(0);
  let [length, setLength] = useState<number>(0);
  let [totalAmmount, setTotalAmmount] = useState<number>(0);
  let [deliveryDetails, setDeliveryDetails] = useState<string>("");

  const  { user } = useContext(LoginContext) as LoginContextType;
  

  let servicePackage= new PackageService();

  const handleCreatePackage = async () => {

    const originAddress: Address = {
      country: originCountry,
      city: originCity,
      street: originStreet,
      streetNumber: originNumber,
      postalCode: originPostalCode,
    };

    const destinationAddress: Address = {
      country: destinationCountry,
      city: destinationCity,
      street: destinationStreet,
      streetNumber: destinationNumber,
      postalCode: destinationPostalCode,
    };

    const packageRequest: PackageRequest = {
      customerId:user.id,
      totalAmount: totalAmmount,
      weight: weight,
      height: height,
      width: width,
      length: length,
      deliveryDescription: deliveryDetails,
      originName: originName,
      destinationName: destinationName,
      originPhone: originPhone,
      destinationPhone: destinationPhone,
      origin: originAddress,
      destination: destinationAddress,
    };

    const response = await servicePackage.createPackage(packageRequest);
    if (response) {
      handleOpenModalAddOrder();
    }
  };

  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>New Package</span>
          </div>

          <button
            className="button__close"
            onClick={() => handleOpenModalAddOrder()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Pick-up from : </h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter the name"
                  onChange={(e) => setOriginName(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  onChange={(e) => setOriginPhone(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the city"
                  onChange={(e) => setOriginCity(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the street"
                  onChange={(e) => setOriginStreet(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the number"
                  onChange={(e) => setOriginNumber(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the country"
                  onChange={(e) => setOriginCountry(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the postal code"
                  onChange={(e) => setOriginPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="modal__container__body__content">
            <h2>Delivery to : </h2>

            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the name"
                  onChange={(e) => setDestinationName(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  required
                  placeholder="Enter phone number"
                  onChange={(e) => setDestinationPhone(e.target.value)}
                />
              </div>

    

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the city"
                  onChange={(e) => setDestinationCity(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the street"
                  onChange={(e) => setDestinationStreet(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the number"
                  onChange={(e) => setDestinationNumber(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the country"
                  onChange={(e) => setDestinationCountry(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the postal code"
                  onChange={(e) => setDestinationPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="modal__container__body__content">
            <h2>Package Details</h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Weight</label>
                <input
                  type="number"
                  required
                  placeholder="Enter the weight"
                  onChange={(e) => setWeight(+e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Height</label>
                <input
                  type="number"
                  required
                  placeholder="Enter the height"
                  onChange={(e) => setHeight(+e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Length</label>
                <input
                  type="number"
                  required
                  placeholder="Enter the length"
                  onChange={(e) => setLength(+e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Width</label>
                <input
                  type="number"
                  required
                  placeholder="Enter the width"
                  onChange={(e) => setWidth(+e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  placeholder="Enter the price"
                  required
                  onChange={(e) => setTotalAmmount(+e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Delivery Details :</label>
                <input
                  type="text"
                  placeholder="Enter the details for our driver"
                  onChange={(e) => setDeliveryDetails(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModalAddOrder()}
          >
            Cancel
          </button>
          <button
            className="button__modal  button__modal__save"
            onClick={() => handleCreatePackage()}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddPackage;
