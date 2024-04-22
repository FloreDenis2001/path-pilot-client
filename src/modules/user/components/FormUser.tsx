import { useEffect, useState } from "react";
import { ReactComponent as LogoSvg } from "../../../assets/logo2.svg";

import {
  FaSignature,
  FaEnvelope,
  FaKey,
  FaPhoneAlt,
} from "react-icons/fa";
import RegisterRequest from "../../user/dto/RegisterRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Address from "../../address/model/Address";

interface FormUserProps {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  address: Address;
  updateDataUser: (data: RegisterRequest) => void;
}

const FormUser: React.FC<FormUserProps> = ({
  username: initialUsername,
  email: initialEmail,
  firstName: initialFirstName,
  lastName: initialLastName,
  password: initialPassword,
  phone: initialPhone,
  address: initialAddress,
  updateDataUser,
}) => {
  const [username, setUsername] = useState(initialUsername || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [firstName, setFirstName] = useState(initialFirstName || "");
  const [lastName, setLastName] = useState(initialLastName || "");
  const [password, setPassword] = useState(initialPassword || "");
  const [phone, setPhone] = useState(initialPhone || "");

  useEffect(() => {
    updateDataUser({ username, email, firstName, lastName, password, phone , address: initialAddress});
  }, [username, email, firstName, lastName, password, phone]);

  return (
    <>
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
      </div>
    </>
  );
};

export default FormUser;
