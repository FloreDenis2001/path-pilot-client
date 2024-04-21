import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DriverService from "../../service/DriverService";
import UserService from "../../../user/service/UserService";
import RegisterRequest from "../../../user/dto/RegisterRequest";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import {
  FaEnvelope,
  FaFacebookF,
  FaKey,
  FaPhoneAlt,
  FaSignature,
} from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../../../../assets/logo2.svg";
import Drivers from "../Drivers";
import Driver from "../../models/Driver";

const AddDriver = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const expires = searchParams.get("expires");

  let nav = useNavigate();
  const { setUserCookie } = useContext(LoginContext) as LoginContextType;
  const [username, setUsername] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const salary = 0;
  const rating = 0;
  const experience = 0;

  let handleCreate = async () => {
    let data = {
      username,
      email,
      firstName,
      lastName,
      password,
      phone,
      salary,
      rating,
      experience,
      licenseNumber,
    } as Driver;
    let response = await driverService.addDriver(data);
    console.log(response);
    handleRemoveLinkAfterCreate();
    handlerVerificationCode();
    nav("/login");
  };


  let handleRemoveLinkAfterCreate = async () => {
    await driverService.removeLink(code as string);
  }

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
    nav("/login");
  };

  useEffect(() => {
    handlerVerificationCode();
  }, [code, expires]);

  return isValid ? (
    <div id="register">
      <div className="register__container">
        <div className="register__header">
          <div className="register__header">
            <LogoSvg className="register__logo" />

            <h1 className="heading-primary">Create Driver account !</h1>
            <h4 className="heading-secondary">
              Create a new driver by entering the email address. You will
              receive an email with instructions for creating a password.
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
            <FaSignature className="inputBox__icon" />
            <input
              type="text"
              placeholder="License Number"
              required
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
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
              onClick={handleCreate}
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
