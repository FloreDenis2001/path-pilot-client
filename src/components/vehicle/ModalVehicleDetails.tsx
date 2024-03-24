import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ModalVehicleProps {
  handleOpenModal: () => void;
}

const ModalVehicleDetails: React.FC<ModalVehicleProps> = ({ handleOpenModal }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Vehicle Profile</span>
          </div>
          <button
            className="button__close"
            onClick={() => handleOpenModal()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__vehicleDetails">
          <div className="modal__container__body__vehicleDetails__box">
              <div className="modal__container__body__vehicleDetails__box__image">
                <img src="https://via.placeholder.com/250" alt="" />
              </div>
            </div>
            <div className="modal__container__body__vehicleDetails__box">
                <div className="modal__container__body__vehicleDetails__box__details">
                    <div className="modal__container__body__vehicleDetails__box__details__textBox">
                     <h3 className="modal__subhead">Registration Number</h3>
                     <p className="modal__text">893128938912</p>
                    </div>

                    <div className="modal__container__body__vehicleDetails__box__details__textBox">
                     <h3 className="modal__subhead">Type</h3>
                     <p className="modal__text">Truck</p>
                    </div>

                    <div className="modal__container__body__vehicleDetails__box__details__textBox">
                     <h3 className="modal__subhead">Capacity(cm3)</h3>
                     <p className="modal__text">700</p>
                    </div>

                    <div className="modal__container__body__vehicleDetails__box__details__textBox">
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

export default  ModalVehicleDetails;
