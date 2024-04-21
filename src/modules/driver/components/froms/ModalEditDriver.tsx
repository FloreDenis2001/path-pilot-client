import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Driver from "../../models/Driver";
import DriverService from "../../service/DriverService";
import DriverUpdateRequest from "../../dto/DriverUpdateRequest";
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
    } as DriverUpdateRequest;
    let response = await driverService.updateDriver(data);
    console.log(response);
    handleOpenModal();
  }

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
            <h2>Driver Information : </h2>
            <div className="modal__container__body__content__main--drivers">
              <div className="modal__container__body__content__input">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter the name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter the first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter the last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter the email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
       
              <div className="modal__container__body__content__input">
                <label>License Number</label>
                <input
                  type="text"
                  placeholder="Enter the license number"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label>Salary</label>
                <input
                  type="number"
                  placeholder="Enter the salary"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label>Rating</label>
                <input
                  type="number"
                  placeholder="Enter the rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                />
              </div>
              <div className="modal__container__body__content__input">
                <label>Experience</label>
                <input
                  type="number"
                  placeholder="Enter the experience"
                  value={experience}
                  onChange={(e) => setExperience(Number(e.target.value))}
                />
              </div>
              <div className="modal__container__body__content__select">
                <label>Status</label>
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

        <div className="modal__container__footer">
          <button
            className="button__modal button__modal__cancel"
            onClick={() => handleOpenModal()}
          >
            Cancel
          </button>
          <button className="button__modal button__modal__save" onClick={handleUpdate}>Save</button>
        </div>
      </div>
    </section>
  );
};

export default ModalEditDriver;
