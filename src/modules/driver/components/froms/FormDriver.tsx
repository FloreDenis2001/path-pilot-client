import { faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

import {
  FaEnvelope,
  FaKey,
  FaPhoneAlt,
  FaSignature,
} from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../../../../assets/logo2.svg";
import Address from "../../../address/model/Address";
import DriverCreateRequest from "../../dto/DriverCreateRequest";

interface DriverProps{
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  licenseNumber: string;
  companyRegistrationNumber:string;
  address:Address;
  updateDataDriver: (data: DriverCreateRequest) => void;
}


const FormDriver:React.FC<DriverProps>= ({
  username: initialUsername,
  licenseNumber : initialLicenseNumber,
  email: initialEmail,
  firstName: initialFirstName,
  lastName: initialLastName,
  password: initialPassword,
  phone: initialPhone,
  companyRegistrationNumber: initialCompanyRegistrationNumber,
  address: initialAddress,
  updateDataDriver,
}) => {


  const [username, setUsername] = useState(initialUsername || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [firstName, setFirstName] = useState(initialFirstName || "");
  const [lastName, setLastName] = useState(initialLastName || "");
  const [password, setPassword] = useState(initialPassword || "");
  const [phone, setPhone] = useState(initialPhone || "");
  const [licenseNumber, setLicenseNumber] = useState(initialLicenseNumber || "");


  const memorizedUpdateDataDriver = useCallback(
    (data: DriverCreateRequest) => {
      updateDataDriver(data);
    },
    [updateDataDriver]
  );

  useEffect(() => {
    memorizedUpdateDataDriver({
      username,
      email,
      firstName,
      lastName,
      password,
      phone,
      licenseNumber,
      companyRegistrationNumber: initialCompanyRegistrationNumber,
      address: initialAddress,
    });
  }, [
    username,
    email,
    firstName,
    lastName,
    password,
    phone,
    licenseNumber,
    initialCompanyRegistrationNumber,
    initialAddress,
    memorizedUpdateDataDriver,
  ]);
  
  return  (
  <>
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
        </div>
        </>       
  );
};

export default FormDriver;
