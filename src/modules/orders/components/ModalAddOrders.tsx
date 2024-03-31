import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ModalAddOrdersProps {
  handleOpenModalAddOrder: () => void;
}

const ModalAddOrders: React.FC<ModalAddOrdersProps> = ({
  handleOpenModalAddOrder,
}) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>New Order</span>
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
                <input type="text" placeholder="Enter the name" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Enter phone number" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <input type="text" placeholder="Enter the city" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <input type="text" placeholder="Enter the street" />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Number</label>
                <input type="text" placeholder="Enter the number" />
              </div>


              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="Enter the country" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <input type="text" placeholder="Enter the postal code" />
              </div>
            </div>
          </div>

          <div className="modal__container__body__content">
            <h2>Delivery to : </h2>

            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter the name" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Enter phone number" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter the email" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <input type="text" placeholder="Enter the city" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <input type="text" placeholder="Enter the street" />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Number</label>
                <input type="text" placeholder="Enter the number" />
              </div>


              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="Enter the country" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <input type="text" placeholder="Enter the postal code" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Delivery Date</label>
                <input type="date" />
              </div>
            </div>
          </div>

          <div className="modal__container__body__content">
            <h2>Order Details</h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Weight</label>
                <input type="text" placeholder="Enter the weight" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Type</label>
                <input type="text" placeholder="Enter the type" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Height</label>
                <input type="text" placeholder="Enter the height" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Width</label>
                <input type="text" placeholder="Enter the width" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Volume</label>
                <input type="text" placeholder="Enter the volume" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Price</label>
                <input type="text" placeholder="Enter the price" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Delivery Details :</label>
                <input
                  type="text"
                  placeholder="Enter the details for our driver"
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
          <button className="button__modal  button__modal__save">Save</button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddOrders;
