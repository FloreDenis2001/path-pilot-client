import {
  faArrowUp19,
  faMoneyBill,
  faPhone,
  faRankingStar,
  faSignature,
  faToggleOff,
  faToggleOn,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Driver from "../../models/Driver";
import DriverService from "../../service/DriverService";
import DriverUpdateRequest from "../../dto/DriverUpdateRequest";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";

interface ModalOrdersProps {
  handleOpenModal: () => void;
  driver: Driver;
}
const ModalEditDriver: React.FC<ModalOrdersProps> = ({
  handleOpenModal,
  driver,
}) => {

  const [username, setUsername] = useState(driver.username);
  const [email, setEmail] = useState(driver.email);
  const [firstName, setFirstName] = useState(driver.firstName);
  const [lastName, setLastName] = useState(driver.lastName);
  const [licenseNumber, setLicenseNumber] = useState(driver.licenseNumber);
  const [phone, setPhone] = useState(driver.phone);
  const [salary, setSalary] = useState(driver.salary);
  const [rating, setRating] = useState(driver.rating);
  const [experience, setExperience] = useState(driver.experience);
  const [isAvailable, setIsAvailabe] = useState(driver.isAvailable);

  const {user} = useContext(LoginContext) as LoginContextType;

  const driverService = new DriverService();

  const handleUpdate = async () => {
    let data = {
      username,
      email,
      firstName,
      lastName,
      phone,
      salary,
      rating,
      experience,
      licenseNumber,
      isAvailable,
      companyRegistrationNumber: user.companyRegistrationNumber,
    } as DriverUpdateRequest;

    try {
      await driverService.updateDriver(data);
      toast.success("Driver updated successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Error updating driver");
    }
    handleOpenModal();
  };

  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Driver</span>
          </div>

          <button className="button__close" onClick={() => handleOpenModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Driver Information</h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label>Username</label>
                <div className="inputBox">
                  <FontAwesomeIcon icon={faUser} className="inputBox__icon" />

                  <input
                    type="text"
                    placeholder="Enter the name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label>First Name</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label>Last Name</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />

                  <input
                    type="text"
                    placeholder="Enter the last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label>Email</label>

                <div className="inputBox">
                  <FaEnvelope className="inputBox__icon" />
                  <input
                    type="text"
                    placeholder="Enter the email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label>License Number</label>

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the license number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal__container__body__content__input">
                <label>Phone</label>
                <div className="inputBox">
                  <FontAwesomeIcon icon={faPhone} className="inputBox__icon" />
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal__container__body__content__input">
                <label>Salary</label>

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="inputBox__icon"
                  />
                  <input
                    type="number"
                    placeholder="Enter the salary"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="modal__container__body__content__input">
                <label>Rating</label>

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faRankingStar}
                    className="inputBox__icon"
                  />
                  <input
                    type="number"
                    placeholder="Enter the rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="modal__container__body__content__input">
                <label>Experience</label>

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowUp19}
                    className="inputBox__icon"
                  />

                  <input
                    type="number"
                    placeholder="Enter the experience"
                    value={experience}
                    onChange={(e) => setExperience(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="modal__container__body__content__select">
                <label>Status</label>
                <div className="inputBox">
                  {isAvailable ? (
                    <FontAwesomeIcon
                      icon={faToggleOn}
                      className="inputBox__icon"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faToggleOff}
                      className="inputBox__icon"
                    />
                  )}
                  <select
                    name="status"
                    id="modal__status"
                    value={isAvailable ? "active" : "inactive"}
                    onChange={(e) => setIsAvailabe(e.target.value === "active")}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal button__modal__cancel"
            onClick={() => handleOpenModal()}
          >
            Cancel
          </button>
          <button
            className="button__modal button__modal__save"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalEditDriver;
