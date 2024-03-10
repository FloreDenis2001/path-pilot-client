import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OptionsDropDownOrderDetails from "./OptionsDropDownDrivers";
interface ModalDriversProps {
  handleOpenModal: () => void;
}

const ModalDriversDetails: React.FC<ModalDriversProps> = ({ handleOpenModal }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Driver Profile</span>
          </div>
          <button
            className="button__close"
            onClick={() => handleOpenModal()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__driversDetails">
            <div className="modal__container__body__driversDetails__box">
              <div className="modal__container__body__driversDetails__box__image">
                <img src="https://via.placeholder.com/250" alt="" />
              </div>
                    <p className="modal__subtitle">Flore Denis</p>
            </div>

            <div className="modal__container__body__driversDetails__box">
                <div className="modal__container__body__driversDetails__box__details">
                    <div className="modal__container__body__driversDetails__box__details__textBox">
                     <h3 className="modal__subhead">Name</h3>
                     <p className="modal__text">Flore Denis</p>
                    </div>

                    <div className="modal__container__body__driversDetails__box__details__textBox">
                     <h3 className="modal__subhead">Phone</h3>
                     <p className="modal__text">086512241</p>
                    </div>

                    <div className="modal__container__body__driversDetails__box__details__textBox">
                     <h3 className="modal__subhead">Email</h3>
                     <p className="modal__text">floredenis907@yahoo.com </p>
                    </div>

                    <div className="modal__container__body__driversDetails__box__details__textBox">
                     <h3 className="modal__subhead">License Number</h3>
                     <p className="modal__text">994127721522</p>

                    </div>

                    <div className="modal__container__body__driversDetails__box__details__textBox">
                     <h3 className="modal__subhead">Status</h3>
                     <p className="modal__text">Active</p>
                    </div>


                </div>

            </div>
        
          </div>

     

       
        </div>

        <div className="modal__container__footer--drivers">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModal()}
          >
            Close
          </button>
          <button
            className="button__modal   button__modal__delete"
            onClick={() => handleOpenModal()}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default  ModalDriversDetails;
