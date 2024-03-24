import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ModalOrdersProps {
  handleOpenModal: () => void;
}
const ModalEditDriver: React.FC<ModalOrdersProps> = ({ handleOpenModal }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Driver</span>
          </div>

          <button className="button__close" onClick={() => handleOpenModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Driver Information : </h2>
            <div className="modal__container__body__content__main--drivers">
              <div className="modal__container__body__content__input">
                <label>Username</label>
                <input type="text" placeholder="Enter the name" value="Denis" />
              </div>{" "}
              <div className="modal__container__body__content__input">
                <label>Email</label>
                <input type="text" placeholder="Enter the email" />
              </div>
              <div className="modal__container__body__content__input">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>
              <div className="modal__container__body__content__input">
                <label>License Number</label>
                <input type="text" placeholder="Enter the license number" />
              </div>
              <div className="modal__container__body__content__input">
                <label>Phone</label>
                <input type="text" placeholder="Enter phone number" />
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

export default ModalEditDriver;
