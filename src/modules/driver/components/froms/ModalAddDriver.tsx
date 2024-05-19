import { FaEnvelope } from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../../../../assets/logo2.svg";
import React, { useContext, useState } from "react";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import EmailService from "../../../email/services/EmailService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { retrieveDriversLoading } from "../../../../store/drivers/drivers.reducers";

interface ModalAddDriverProps {
  handleOpenModalAddDriver: () => void;
}

const ModalAddDriver: React.FC<ModalAddDriverProps> = ({
  handleOpenModalAddDriver,
}) => {
  let [email, setEmail] = useState("");
  const emailService=new EmailService();
  const { user } = useContext(LoginContext) as LoginContextType;
  const dispatch = useDispatch();

  const sendEmail = async (email: string) => {
    try {
       await emailService.sendEmail(
        { to: email },
        user.companyRegistrationNumber
      );
      toast.success("Email sent successfully");
      dispatch(retrieveDriversLoading());

    } catch (err) {
      toast.error("Error sending email");
      dispatch(retrieveDriversLoading());

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
