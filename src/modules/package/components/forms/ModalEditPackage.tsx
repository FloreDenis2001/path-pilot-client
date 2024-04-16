import React, { useContext, useState } from "react";
import OptionsDropDownOrderDetails from "../../../orders/components/ui/OptionsDropDownOrderDetails";
import Package from "../../model/Package";
import PackageService from "../../service/PackageService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
interface ModalEditPackageProps {
  handleOpenModal: () => void;
  pack: Package;
}

const ModalEditPackage: React.FC<ModalEditPackageProps> = ({
  handleOpenModal,
  pack,
}) => {
  let [originName, setOriginName] = useState<string>(
    pack.shipmentDTO.originName
  );
  let [originPhone, setOriginPhone] = useState<string>(
    pack.shipmentDTO.originPhone
  );
  let [originCity, setOriginCity] = useState<string>(
    pack.shipmentDTO.origin.city
  );
  let [originStreet, setOriginStreet] = useState<string>(
    pack.shipmentDTO.origin.street
  );
  let [originNumber, setOriginNumber] = useState<string>(
    pack.shipmentDTO.origin.streetNumber
  );
  let [originCountry, setOriginCountry] = useState<string>(
    pack.shipmentDTO.origin.country
  );
  let [originPostalCode, setOriginPostalCode] = useState<string>(
    pack.shipmentDTO.origin.postalCode
  );
  let [destinationName, setDestinationName] = useState<string>(
    pack.shipmentDTO.destinationName
  );
  let [destinationPhone, setDestinationPhone] = useState<string>(
    pack.shipmentDTO.destinationPhone
  );
  let [destinationCity, setDestinationCity] = useState<string>(
    pack.shipmentDTO.destination.city
  );
  let [destinationStreet, setDestinationStreet] = useState<string>(
    pack.shipmentDTO.destination.street
  );
  let [destinationNumber, setDestinationNumber] = useState<string>(
    pack.shipmentDTO.destination.streetNumber
  );
  let [destinationCountry, setDestinationCountry] = useState<string>(
    pack.shipmentDTO.destination.country
  );
  let [destinationPostalCode, setDestinationPostalCode] = useState<string>(
    pack.shipmentDTO.destination.postalCode
  );

  let [weight, setWeight] = useState<number>(pack.weight);
  let [height, setHeight] = useState<number>(pack.height);
  let [width, setWidth] = useState<number>(pack.width);
  let [totalAmount, setTotalAmount] = useState<number>(pack.totalAmount);
  let [deliveryDetails, setDeliveryDetails] = useState<string>(
    pack.deliveryDescription
  );

  let servicePackage = new PackageService();

  const  { user } = useContext(LoginContext) as LoginContextType;


  const handleEditPackage = async () =>  {
    const packageRequest = {
      customerId: user.id as number,
      totalAmount: totalAmount,
      weight: weight,
      height: height,
      width: width,
      deliveryDescription: deliveryDetails,
      originName: originName,
      destinationName: destinationName,
      originPhone: originPhone,
      destinationPhone: destinationPhone,
      origin: {
        city: originCity,
        country: originCountry,
        postalCode: originPostalCode,
        street: originStreet,
        streetNumber: originNumber,
      },
      destination: {
        city: destinationCity,
        country: destinationCountry,
        postalCode: destinationPostalCode,
        street: destinationStreet,
        streetNumber: destinationNumber,
      },
    };
    await servicePackage.updatePackage(pack.awb, packageRequest);
    handleOpenModal();
  }

  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Package</span>
          </div>

          <div className="modal__container__header__actions">
            {pack.type === "UNASSIGNED" ? (
              <span className="modal__container__header__actions__status cancelled">
                UNASSIGNED
              </span>
            ) : (
              <span className="modal__container__header__actions__status done">
                ASSINGED
              </span>
            )}
          </div>
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
                  value={originName}
                  onChange={(e) => setOriginName(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={originPhone}
                  onChange={(e) => setOriginPhone(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  placeholder="Enter the city"
                  value={originCity}
                  onChange={(e) => setOriginCity(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <input
                  type="text"
                  placeholder="Enter the street"
                  value={originStreet}
                  onChange={(e) => setOriginStreet(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  placeholder="Enter the number"
                  value={originNumber}
                  onChange={(e) => setOriginNumber(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  placeholder="Enter the country"
                  value={originCountry}
                  onChange={(e) => setOriginCountry(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter the postal code"
                  value={originPostalCode}
                  onChange={(e) => setOriginPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="modal__container__body__content">
            <h2>Deliver to : </h2>

            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter the name"
                  value={destinationName}
                  onChange={(e) => setDestinationName(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={destinationPhone}
                  onChange={(e) => setDestinationPhone(e.target.value)}
                />
              </div>


              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  placeholder="Enter the city"
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <input
                  type="text"
                  placeholder="Enter the street"
                  value={destinationStreet}
                  onChange={(e) => setDestinationStreet(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  placeholder="Enter the number"
                  value={destinationNumber}
                  onChange={(e) => setDestinationNumber(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <input
                  type="text"
                  placeholder="Enter the country"
                  value={destinationCountry}
                  onChange={(e) => setDestinationCountry(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter the postal code"
                  value={destinationPostalCode}
                  onChange={(e) => setDestinationPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="modal__container__body__content">
            <h2>Order Details</h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Weight</label>
                <input
                  type="text"
                  placeholder="Enter the weight"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Type</label>
                <input
                  type="text"
                  placeholder="Enter the type"
                  value={pack.type}
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Height</label>
                <input
                  type="text"
                  placeholder="Enter the height"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Width</label>
                <input
                  type="text"
                  placeholder="Enter the width"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Price</label>
                <input
                  type="text"
                  placeholder="Enter the price"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(Number(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Delivery Details :</label>
                <input
                  type="text"
                  placeholder="Enter the details for our driver"
                  value={deliveryDetails}
                  onChange={(e) => setDeliveryDetails(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModal()}
          >
            Cancel
          </button>
          <button
            className="button__modal  button__modal__save"
            onClick={handleEditPackage}
          >
            Update
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalEditPackage;
