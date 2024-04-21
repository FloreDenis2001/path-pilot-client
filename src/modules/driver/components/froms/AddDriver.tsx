import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DriverService from "../../service/DriverService";

const AddDriver = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const expires = searchParams.get("expires");

  const [isValid, setIsValid] = useState(false);
  const driverService = new DriverService();

  const handlerVerificationCode = async () => {
    try {
      if (code && expires) {
        let response = await driverService.isValid(code);
          setIsValid(response);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleClose = () => {
    throw new Error("Function not implemented.");
  };

  useEffect(() => {
    handlerVerificationCode();
  }, [code, expires]);

  return isValid ? (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>New Driver</span>
          </div>
          <button className="button__close" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Driver information : </h2>
            <div className="modal__container__body__content__main">
              {/* Restul formularului */}
            </div>
          </div>
        </div>
        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="button__modal  button__modal__save">Save</button>
        </div>
      </div>
    </section>
  ) : (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Invalid Verification Code</span>
          </div>
          <button className="button__close" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddDriver;
