import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Driver from "../../models/Driver";
import UserService from "../../../user/service/UserService";
import image from "../../../../assets/logoDefault.png";

interface ModalDriversProps {
  driver: Driver;
  handleOpenModal: () => void;
}

const ModalDriversDetails: React.FC<ModalDriversProps> = ({
  driver,
  handleOpenModal,
}) => {
  const [driverImage, setDriverImage] = useState<string>();
  const userService = new UserService();

  const fetchDriverImage = async () => {
    try {
      let userImage = await userService.getImage(driver.email);
      setDriverImage(userImage);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    fetchDriverImage();
  }, []);

  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Driver Profile</span>
          </div>
          <button className="button__close" onClick={() => handleOpenModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__driversDetails">
            <div className="modal__container__body__driversDetails__box">
              <div className="modal__container__body__driversDetails__box__image">
                {driverImage ? (
                  <img
                    src={`data:image/jpeg;base64,${driverImage}`}
                    alt="user-photo"
                    width={250}
                  />
                ) : (
                  <img src={image} alt="default-user" width={250} />
                )}
              </div>
              <p className="modal__subtitle">{driver.username}</p>
            </div>

            <div className="modal__container__body__driversDetails__box">
              <div className="modal__container__body__driversDetails__box__details">
                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">Name</h3>
                  <p className="modal__text">
                    {driver.firstName} {driver.lastName}
                  </p>
                </div>

                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">Phone</h3>
                  <p className="modal__text">{driver.phone}</p>
                </div>

                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">Email</h3>
                  <p className="modal__text">{driver.email}</p>
                </div>

                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">License Number</h3>
                  <p className="modal__text">{driver.licenseNumber}</p>
                </div>

                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">Status</h3>
                  {!driver.isAvailable ? (
                    <span className="modal__text done">Active</span>
                  ) : (
                    <span className="modal__text cancelled">Inactive</span>
                  )}
                </div>

                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">Salary</h3>
                  <p className="modal__text">{driver.salary}</p>
                </div>

                <div className="modal__container__body__driversDetails__box__details__textBox">
                  <h3 className="modal__subhead">Experience</h3>
                  <p className="modal__text">{driver.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalDriversDetails;
