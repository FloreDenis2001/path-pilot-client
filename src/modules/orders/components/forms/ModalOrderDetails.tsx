import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OptionsDropDownOrderDetails from "../ui/OptionsDropDownOrderDetails";
interface ModalOrdersProps {
  handleOpenModal: () => void;
}

const ModalOrderDetails: React.FC<ModalOrdersProps> = ({ handleOpenModal }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Order Details</span>
          </div>

          <div className="modal__container__header__actions">
            <span className="modal__container__header__actions__status">
              Pending
            </span>
            <OptionsDropDownOrderDetails
              onDelete={() => {}}
              onDownload={() => {}}
              onMarkDevivered={() => {}}
              onPrint={() => {}}
              onToggle={() => {}}
              index={1}
            />
          </div>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__orderDetails">
            <div className="modal__container__body__orderDetails__box">
              <h2>Deliver to: </h2>
              <div className="modal__container__body__content__text">
                <p>Name : Flore Denis</p>
                <p>Phone : 086512241</p>
                <p>City : Satu Mare</p>
                <p>Street: Grivitei</p>
                <p>Number : 17</p>
                <p>Country : Romania</p>
                <p>Postal Code : 4400</p>
              </div>
            </div>
            <div className="modal__container__body__orderDetails__box">
              <h2>Pick-up from : </h2>
              <div className="modal__container__body__content__text">
                <p>Name : Flore Denis</p>
                <p>Phone : 086512241</p>
                <p>City : Satu Mare</p>
                <p>Street: Grivitei</p>
                <p>Number : 17</p>
                <p>Country : Romania</p>
                <p>Postal Code : 4400</p>
              </div>
            </div>
          </div>

          <div className="modal__container__body__orderDetails">
            <div className="modal__container__body__orderDetails__box">
              <h2>Order Details</h2>

              <div className="modal__container__body__content__text">
                <p>Order ID : 123456</p>
                <p>Order Date : 08/12/2021</p>
                <p>Delivery Date : 12/12/2021</p>

                <p>Driver: Not assigned</p>

                <p>Delivery Instruction : N/A</p>

                <p>Order Status : Pending</p>
                <p>Order Total : 200$</p>
              </div>
            </div>
          </div>

          <div className="modal__container__body__orderDetails">
          <div className="modal__container__body__orderDetails__box">

            <h2>Payment Details</h2>
            <div className="modal__container__body__content__text">
              <p>Payment Method : Cash</p>
              <p>Payment Status : Pending</p>
              <p>Payment Date : 12/12/2021</p>
              <p>Payment Total : 200$</p>
            </div>
            </div>
          </div>
        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModal()}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalOrderDetails;
