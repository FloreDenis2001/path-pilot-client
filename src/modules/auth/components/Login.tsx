import React from "react";
import { ReactComponent as LogoSvg } from "../assets/logo2.svg";
import { FaEnvelope, FaFacebook, FaKey, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router";

const Login = () => {
  let nav = useNavigate();

  const handleSignUp = () => {
    nav("/register");
  };

  const handleRetrivePassword = () => {
    nav("/retrievePassword");
  };

  const handleOrders = () => {
    nav("/dashboard/orders");
  };

  return (
    <div id="login">
      <div className="login__container">
        <div className="login__header">
          <LogoSvg className="login__logo" />

          <h1 className="heading-primary">Welcome back to PathPilot!</h1>
          <h4 className="heading-secondary">
            Reengage with precision pathfinding: Your gateway to streamlined
            route optimization and smarter travel decisions.
          </h4>
        </div>

        <div className="login__center">
          <div className="inputBox">
            <FaEnvelope className="inputBox__icon" />
            <input type="text" placeholder="Email" required />
          </div>
          <div className="inputBox">
            <FaKey className="inputBox__icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="login__center__checker">
            <div className="login__center__forgot">
              <p onClick={() => handleRetrivePassword()}>Forgot Password?</p>
            </div>

            <div className="login__center__checkbox">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
          </div>
          <div className="login__center__button">
            <button
              className="button button__first"
              onClick={() => handleOrders()}
            >
              Login
            </button>
          </div>
        </div>

        <div className="login__bottom">
          <div className="login__bottom__signup">
            <p className="heading-bottom" >Don't have an account?</p>
            <span onClick={() => handleSignUp()}>Sign Up</span>
          </div>

          <div className="login__bottom__socialMedia">
            <p>Or sign in with social media</p>
            <div className="button__box">
              <button className="button__socialMedia">
                <FaEnvelope />
              </button>

              <button className="button__socialMedia">
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
