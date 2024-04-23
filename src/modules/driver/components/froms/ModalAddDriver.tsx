import { FaEnvelope } from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../../../../assets/logo2.svg";
import React, { useContext, useState } from "react";
import DriverService from "../../service/DriverService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";

interface ModalAddDriverProps {
  handleOpenModalAddDriver: () => void;
}

const ModalAddDriver: React.FC<ModalAddDriverProps> = ({
  handleOpenModalAddDriver,
}) => {
  let [email, setEmail] = useState("");
  const driverService = new DriverService();
  const { user, setUserCookie } = useContext(LoginContext) as LoginContextType;

  const sendEmail = async (email: string) => {
    try {
      let driver = await driverService.sendEmail(
        { to: email },
        user.companyRegistrationNumber
      );
      console.log(driver);
    } catch (err) {
      console.log((err as Error).message);
    }
    handleOpenModalAddDriver();
  };
  return (
    <section className="modal">
      <div id="sendEmail">
        <div className="sendEmail__container">
          <div className="sendEmail__header">
            <LogoSvg className="sendEmail__logo" />

            <h1 className="heading-primary">Create Driver !</h1>
            <h4 className="heading-secondary">
              Create a new driver by entering the email address. You will
              receive an email with instructions for creating a password.
            </h4>
          </div>

          <div className="sendEmail__center">
            <div className="inputBox">
              <FaEnvelope className="inputBox__icon" />
              <input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              className="button button__first"
              onClick={() => sendEmail(email)}
            >
              Send
            </button>
            <button
              className="button__text"
              onClick={() => handleOpenModalAddDriver()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalAddDriver;
