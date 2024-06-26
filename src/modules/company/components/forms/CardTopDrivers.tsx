import React, { useEffect, useState } from "react";
import Driver from "../../../driver/models/Driver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../../user/service/UserService";
import image from "../../../../assets/logoDefault.png";

interface CardTopDriversProps {
  driver: Driver;
}

const CardTopDrivers: React.FC<CardTopDriversProps> = ({ driver }) => {
  const [driverImage, setDriverImage] = useState<string>();
  const userService = new UserService();

  const fetchDriverImage = async () => {
    try {
      let userImage = await userService.getImage(driver.email);
      console.log(userImage);
      setDriverImage(userImage);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    fetchDriverImage();
  }, []);
  return (
    <li className="dashboard__bar__drivers__content__notification">
      {driverImage ? (
        <img
          src={`data:image/jpeg;base64,${driverImage}`}
          alt="user-photo"
          width={250}
        />
      ) : (
        <img src={image} alt="default-user" width={250} />
      )}

      <div className="dashboard__bar__drivers__content__notification__main">
        <div className="dashboard__bar__drivers__content__notification__info">
          <h3>
            {driver.firstName} {driver.lastName}
          </h3>
          {!driver.isAvailable ? (
            <p className="done">On Drive</p>
          ) : (
            <p className="cancelled">Off Drive</p>
          )}
        </div>
        <div className="dashboard__bar__drivers__content__notification__details">
          <FontAwesomeIcon className="brown" icon={faPhone} />
          <p>{driver.phone}</p>
        </div>
      </div>
      <div className="dashboard__bar__drivers__content__notification__more">
        <FontAwesomeIcon className="blue" icon={faArrowRight} />
      </div>
    </li>
  );
};

export default CardTopDrivers;
