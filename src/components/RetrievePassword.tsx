import React from "react";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../assets/logo2.svg";

const RetrievePassword = () => {
  return (
    <div id="retrievePassword">
      <div className="retrievePassword__container">
        <div className="retrievePassword__header">
          <LogoSvg className="retrievePassword__logo" />

          <h1 className="retrievePassword__header-title">Retrieve Password!</h1>
          <h4 className="retrievePassword__header-subtitle">
            Enter the e-mail address used for registration. You will receive an
            email with instructions for changing your password.
          </h4>
        </div>

        <div className="retrievePassword__center">
          <div className="retrievePassword__center__input">
            <FaEnvelope className="retrievePassword__center__input__icon" />
            <input type="text" placeholder="Email" required/>
          </div>

          <div className="retrievePassword__center__button">
            <button className="button button__first">Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetrievePassword;
