import React from "react";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../assets/logo2.svg";

const RetrievePassword = () => {
  return (
    <div id="retrievePassword">
      <div className="retrievePassword__container">
        <div className="retrievePassword__header">
          <LogoSvg className="retrievePassword__logo" />

          <h1 className="heading-primary">Retrieve Password!</h1>
          <h4 className="heading-secondary">
            Enter the e-mail address used for registration. You will receive an
            email with instructions for changing your password.
          </h4>
        </div>

        <div className="retrievePassword__center">
          <div className="inputBox">
            <FaEnvelope className="inputBox__icon" />
            <input type="text" placeholder="Email" required />
          </div>
          <button className="button button__first">Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default RetrievePassword;
