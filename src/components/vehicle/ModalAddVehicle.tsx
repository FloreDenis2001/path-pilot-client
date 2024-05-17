import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ModalAddVehicleProps {
  handleOpenModalAddVehicle: () => void;
}

const ModalAddVehicle: React.FC<ModalAddVehicleProps> = ({
  handleOpenModalAddVehicle,
}) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>New Vehicle</span>
          </div>

          <button
            className="button__close"
            onClick={() => handleOpenModalAddVehicle()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Vehicle information</h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Registration Number</label>
                <input type="text" placeholder="Enter the registration number" />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Type</label>
                <input type="text" placeholder="Enter the type" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Capacity(cm3)</label>
                <input type="text" placeholder="Enter the capacity" />
              </div>
            </div>
          </div>


        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModalAddVehicle()}
          >
            Cancel
          </button>
          <button className="button__modal  button__modal__save">Save</button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddVehicle;
