import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { FaSignature } from "react-icons/fa";
import { useLocation } from "react-router";
import { ReactComponent as LogoSvg } from "../../../assets/logo2.svg";
import EmailService from "../../email/services/EmailService";

const ChangePassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const expires = searchParams.get("expires");
  const email = searchParams.get("identifier");
  const [isValid, setIsValid] = useState(false);
  const emailService = new EmailService();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlerVerificationCode = async () => {
    try {
      if (code && expires) {
        let response = await emailService.isValid(code);
        setIsValid(response);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  let handleRemoveLinkAfterCreate = async () => {
    await emailService.removeLink(code as string);
  };

  useEffect(() => {
    handlerVerificationCode();
  }, [code, expires]);

  const handleResetPassword = async () => {
    handlerVerificationCode();

    try {
      if (newPassword === confirmPassword) {
        // call service to reset password
        handleRemoveLinkAfterCreate();
      } else {
        alert("Passwords do not match");
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };
  return (
    <form action="" id="register">
      <div className="register__container">
        <div className="register__header">
          <div className="register__header">
            <LogoSvg className="register__logo" />

            <h1 className="heading-primary">Reset Password!</h1>
            <h4 className="heading-secondary">
              Enter the new password and confirm it.
            </h4>
          </div>
        </div>

        <div className="register__center">
          <div className="inputBox">
            <FaSignature className="inputBox__icon" />
            <input
              type="password"
              placeholder="New Passowrd"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="inputBox">
            <FaSignature className="inputBox__icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="button button__first" onClick={handleResetPassword}>
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
