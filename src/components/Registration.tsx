import React from "react";
import { ReactComponent as LogoSvg } from "../assets/logo2.svg";
import {
  FaSignature,
  FaEnvelope,
  FaKey,
  FaPhoneAlt,
  FaFacebookF,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const Registration = () => {
  let nav = useNavigate();
  const handleSignIn = () => {
    nav("/login");
  };

  return (
    <div id="register">
      <div className="register__container">
        <div className="register__header">
          <div className="register__header">
            <LogoSvg className="register__logo" />

            <h1 className="register__header-title">Create your account !</h1>
            <h4 className="register__header-subtitle">
              Reengage with precision pathfinding: Your gateway to streamlined
              route optimization and smarter travel decisions.
            </h4>
          </div>
        </div>

        <div className="register__center">
          <div className="register__center__input">
            <FaSignature className="register__center__input__icon" />
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="register__center__input">
            <FaSignature className="register__center__input__icon" />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="register__center__input">
            <FaEnvelope className="register__center__input__icon" />
            <input type="text" placeholder="Email" required />
          </div>

          <div className="register__center__input">
            <FaKey className="register__center__input__icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="register__center__input">
            <FaPhoneAlt className="register__center__input__icon" />
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="register__center__button">
            <button className="button button__first">Create account</button>
          </div>
        </div>

        <div className="register__bottom">
          <div className="login__bottom__signup">
            <p>Do you have an account?</p>
            <span onClick={() => handleSignIn()}>Sign In</span>
          </div>

          <div className="register__bottom__socialMedia">
            <p>Or create your account with social media</p>
            <div className="register__bottom__socialMedia__buttons">
              <button className="register__bottom__socialMedia__button">
                <FaEnvelope />
              </button>

              <button className="register__bottom__socialMedia__button">
                <FaFacebookF />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
