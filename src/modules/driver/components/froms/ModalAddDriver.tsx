import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ModalAddDriverProps {
  handleOpenModalAddDriver: () => void;
}

const ModalAddDriver: React.FC<ModalAddDriverProps> = ({
  handleOpenModalAddDriver,
}) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>New Driver</span>
          </div>

          <button
            className="button__close"
            onClick={() => handleOpenModalAddDriver()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Driver information : </h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter the username" />
              </div>
              <div className="modal__container__body__content__input">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter the name" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter the email" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter the email" />
              </div>



              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Enter phone number" />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">License Number</label>
                <input type="text" placeholder="Enter the license number" />
              </div>

            </div>
          </div>


        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModalAddDriver()}
          >
            Cancel
          </button>
          <button className="button__modal  button__modal__save">Save</button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddDriver;
