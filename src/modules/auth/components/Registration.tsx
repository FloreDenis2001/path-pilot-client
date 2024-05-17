import React, { useContext, useState } from "react";
import { ReactComponent as LogoSvg } from "../../../assets/logo2.svg";

import {
  FaSignature,
  FaEnvelope,
  FaKey,
  FaPhoneAlt,
  FaFacebookF,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import RegisterRequest from "../../user/dto/RegisterRequest";
import UserService from "../../user/service/UserService";
import LoginContextType from "../../user/models/LoginContextType";
import { LoginContext } from "../../context/LoginProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  let nav = useNavigate();
  const { user, setUserCookie } = useContext(LoginContext) as LoginContextType;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  let userService = new UserService();

  let handleSignIn = async () => {
    let data = {
      username,
      email,
      firstName,
      lastName,
      password,
      phone,
    } as RegisterRequest;
    let rez = await userService.register(data);
    setUserCookie(rez);
    nav("/dashboard");
  };

  return (
    <div id="register">
      <div className="register__container">
        <div className="register__header">
          <div className="register__header">
            <LogoSvg className="register__logo" />

            <h1 className="heading-primary">Create your account !</h1>
            <h4 className="heading-secondary">
              Reengage with precision pathfinding: Your gateway to streamlined
              route optimization and smarter travel decisions.
            </h4>
          </div>
        </div>

        <div className="register__center">
          <div className="inputBox">
            <FontAwesomeIcon icon={faUser} className="inputBox__icon" />
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="inputBox">
            <FaSignature className="inputBox__icon" />
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <FaSignature className="inputBox__icon" />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="inputBox">
            <FaEnvelope className="inputBox__icon" />
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="inputBox">
            <FaKey className="inputBox__icon" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="inputBox">
            <FaPhoneAlt className="inputBox__icon" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="register__center__button">
            <button
              className="button button__first"
              onClick={() => handleSignIn()}
            >
              Create account
            </button>
          </div>
        </div>

        <div className="register__bottom">
          <div className="register__bottom__signup">
            <p>Do you have an account?</p>
            <span onClick={() => nav("/login")}>Sign In</span>
          </div>

          <div className="register__media">
            <p className="heading-bottom">
              Or create your account with social media
            </p>
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

export default Registration;
