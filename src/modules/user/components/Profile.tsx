import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import UserService from "../service/UserService";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../models/LoginContextType";
import image from "../../../assets/logoDefault.png";
import FormUser from "./FormUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEdit,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  let [userImage, setUserImage] = useState<string>();
  const { user } = useContext(LoginContext) as LoginContextType;

  const userService = new UserService();
  const fetchUserImage = async () => {
    try {
      let userImage = await userService.getImage(user.email);
      console.log(userImage);
      setUserImage(userImage);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    fetchUserImage();
  }, []);
  return (
    <section className="profile">
      <Sidebar />
      <div className="profile__content">
        <div className="profile__content__left">
          {userImage ? (
            <div className="profile__content__left__details">
              <img
                src={`data:image/jpeg;base64,${userImage}`}
                alt="user-photo"
                width={250}
              />
              <p>{user.username}</p>
              <p>{user.email}</p>
              <span className="done">{user.role}</span>
            </div>
          ) : (
            <div className="profile__content__left__details">
              <img src={image} alt="default-user" width={250} />

              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>{user.email}</p>
              <span className="done">{user.role}</span>
            </div>
          )}

          <div className="profile__content__left__actions">
            <button className="button ongoing">
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </button>
            <button className="button cancelled">
              <FontAwesomeIcon icon={faTrash} />
              Delete Account
            </button>
          </div>
        </div>

        <div className="profile__content__right">
          <div className="profile__content__right__details">
            <div className="profile__content__right__details__title">
              <FontAwesomeIcon icon={faUser} className="blue" />
              <h2>Personal Information</h2>
            </div>
            <div className="profile__content__right__details__information">
              <div className="profile__content__right__box">
                <span>First Name</span>
                <span>{user.firstName}</span>
              </div>

              <div className="profile__content__right__box">
                <span>Last Name</span>
                <span>{user.lastName}</span>
              </div>

              <div className="profile__content__right__box">
                <span>Email</span>
                <span>{user.email}</span>
              </div>

              <div className="profile__content__right__box">
                <span>Role</span>
                <span>{user.role}</span>
              </div>

              <div className="profile__content__right__box">
                <span>Phone</span>
                <span>{user.phone}</span>
              </div>

              <div className="profile__content__right__box">
                <span>Address</span>
                <span>{user.companyRegistrationNumber}</span>
              </div>
            </div>
          </div>
          <div className="profile__content__right__details">
            <div className="profile__content__right__details__title">
              <FontAwesomeIcon icon={faBuilding} className="purple" />
              <h2>Company Information</h2>
            </div>

            <div className="profile__content__right__details__information">
              <div className="profile__content__right__box">
                <span>First Name</span>
                <span>{user.firstName}</span>
              </div>{" "}
              <div className="profile__content__right__box">
                <span>First Name</span>
                <span>{user.firstName}</span>
              </div>{" "}
              <div className="profile__content__right__box">
                <span>First Name</span>
                <span>{user.firstName}</span>
              </div>{" "}
              <div className="profile__content__right__box">
                <span>First Name</span>
                <span>{user.firstName}</span>
              </div>{" "}
              <div className="profile__content__right__box">
                <span>First Name</span>
                <span>{user.firstName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
