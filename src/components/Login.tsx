import React from "react";
import { ReactComponent as LogoSvg } from "../assets/logo2.svg";
import { FaEnvelope, FaFacebook, FaKey, FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <LogoSvg className="login__logo" />

          <h1 className="login__header-title">Welcome back to PathPilot!</h1>
          <h4 className="login__header-subtitle">
            Reengage with precision pathfinding: Your gateway to streamlined
            route optimization and smarter travel decisions.
          </h4>
        </div>

        <div className="login__center">
          <div className="login__center__input">
            <FaEnvelope className="login__center__input__icon" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="login__center__input">
            <FaKey className="login__center__input__icon" />
            <input type="password" placeholder="Password" />
          </div>

          <div className="login__center__checker">
            <div className="login__center__forgot">
              <p>Forgot Password?</p>
            </div>

            <div className="login__center__checkbox">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
          </div>
          <div className="login__center__button">
            <button className="button button__first">Login</button>
          </div>
        </div>

        <div className="login__bottom">
          <div className="login__bottom__signup">
            <p>Don't have an account?</p>
            <span>Sign Up</span>
          </div>

          <div className="login__bottom__socialMedia">
            <p>Or sign in with social media</p>
            <div className="login__bottom__socialMedia__buttons">
              <button className="login__bottom__socialMedia__button">
                <FaEnvelope />
              </button>

              <button className="login__bottom__socialMedia__button">
                <FaFacebookF />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
