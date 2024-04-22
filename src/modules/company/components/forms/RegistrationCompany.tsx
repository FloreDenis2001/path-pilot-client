import React, { useState } from "react";
import { FaEnvelope, FaFacebookF, FaGlobe, FaKey, FaPhoneAlt, FaSignature } from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../../../assets/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Address from "../../../address/model/Address";
import { useNavigate } from "react-router";

const RegistrationCompany = () => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [industry, setIndustry] = useState("");
    const [capital, setCapital] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState<Address>({} as Address);
    const nav = useNavigate();

    function handleSignIn(): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div id="register">
      <div className="register__container">
        <div className="register__header">
          <div className="register__header">
            <LogoSvg className="register__logo" />

            <h1 className="heading-primary">Company Details !</h1>
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
              placeholder="Company Name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="inputBox">
            <FaSignature className="inputBox__icon" />
            <input
              type="text"
              placeholder="Registration Number"
              required
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
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
            <FaSignature className="inputBox__icon" />
            <input
              type="text"
              placeholder="Industry"
              required
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>


          <div className="inputBox">
            <FaKey className="inputBox__icon" />
            <input
              type="text"
              placeholder="Capital"
              required
              value={capital}
              onChange={(e) => {
                setCapital(e.target.value);
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

            <div className="inputBox">
                <FaGlobe className="inputBox__icon" />
                <input
                type="text"
                placeholder="Website"
                required
                value={website}
                onChange={(e) => {
                    setWebsite(e.target.value);
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

export default RegistrationCompany;
