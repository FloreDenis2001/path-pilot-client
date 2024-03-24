import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ModalVehicleProps {
  handleOpenModal: () => void;
}
const ModalEditVehicle: React.FC<ModalVehicleProps> = ({ handleOpenModal }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Vehicle</span>
          </div>

          <button className="button__close" onClick={() => handleOpenModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Vehicle Information  </h2>
            <div className="modal__container__body__content__main--drivers">
              <div className="modal__container__body__content__input">
                <label>Registration Number</label>
                <input type="text" placeholder="Enter the registration number"  />
              </div>{" "}
              <div className="modal__container__body__content__input">
                <label>Type</label>
                <input type="text" placeholder="Enter the type" />
              </div>
              <div className="modal__container__body__content__input">
                <label>Capacity(cm3)</label>
                <input type="text" placeholder="Enter the  capacity" />
              </div>

              <div className="modal__container__body__content__select">
                <label>Status</label>
                <select name="status" id="modal__status">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
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
          <button className="button__modal  button__modal__save">Update</button>
        </div>
      </div>
    </section>
  );
};

export default ModalEditVehicle;
