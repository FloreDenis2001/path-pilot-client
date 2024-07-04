import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import UserService from "../service/UserService";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../models/LoginContextType";
import image from "../../../assets/logoDefault.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEdit,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Company } from "../../company/models/Company";
import CompanyService from "../../company/services/CompanyServer";
import Dialog from "../../core/components/Dialog";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import EditProfileSelect from "./EditProfileSelect";
import ModalEditCompany from "./ModalEditCompany";
import ModalEditUser from "./ModalEditUser";
import DeleteUserRequest from "../dto/DeleteUserRequest";

const Profile: React.FC = () => {
  const [userImage, setUserImage] = useState<string>("");
  const [company, setCompany] = useState<Company>();
  const { user, logOut } = useContext(LoginContext) as LoginContextType;
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openEditProfileSelect, setOpenEditProfileSelect] = useState(false);
  const [openEditCompany, setOpenEditCompany] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const nav = useNavigate();

  const userService = new UserService();
  const companyService = new CompanyService();

  const fetchUserImage = async () => {
    try {
      const userImage = await userService.getImage(user.email);
      setUserImage(userImage);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  const fetchCompanyDetails = async () => {
    try {
      const company = await companyService.getCompanyByRegistrationNumber(
        user.companyRegistrationNumber
      );
      setCompany(company);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialogDelete(!openDialogDelete);
  };

  const handleConfirm = async () => {
    try {
      const mesaj = await userService.delete({
        email: user.email,
        token: user.token,
      } as DeleteUserRequest);
      toast.success(mesaj);
      logOut();
      nav("/login");
    } catch (err) {
      toast.error("Error deleting account");
    }

    handleOpenDialog();
  };

  const handleEditProfile = () => {
    setOpenEditProfileSelect(true);
  };

  const handleEditCompany = () => {
    setOpenEditProfileSelect(false);
    setOpenEditCompany(true);
  };

  const handleEditUser = () => {
    setOpenEditProfileSelect(false);
    setOpenEditUser(true);
  };

  useEffect(() => {
    fetchUserImage();
    fetchCompanyDetails();
  }, [user]);

  return (
    user && (
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
              <button className="button ongoing" onClick={handleEditProfile}>
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </button>
              <button className="button cancelled" onClick={handleOpenDialog}>
                <FontAwesomeIcon icon={faTrash} />
                Remove Account
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
                  <span>Phone</span>
                  <span>{user.phone}</span>
                </div>

                <div className="profile__content__right__box">
                  <span>Address</span>
                  <span>
                    {user.addressDTO.street} {user.addressDTO.streetNumber}
                  </span>
                </div>
                <div className="profile__content__right__box">
                  <span>Country</span>
                  <span>{user.addressDTO.country}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>City</span>
                  <span>{user.addressDTO.city}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>Postal Code</span>
                  <span>{user.addressDTO.postalCode}</span>
                </div>

                <div className="profile__content__right__box">
                  <span>Subscription</span>
                  <span>Basic</span>
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
                  <span>Company Name</span>
                  <span>{company?.name}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>Registration Number</span>
                  <span>{company?.registrationNumber}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>Email</span>
                  <span>
                    {company?.email ? company?.email : "No email provided"}
                  </span>
                </div>
                <div className="profile__content__right__box">
                  <span>Industry</span>
                  <span>{company?.industry}</span>
                </div>

                <div className="profile__content__right__box">
                  <span>Phone</span>
                  <span>{company?.phone}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>Address</span>
                  <span>
                    {company?.address.street} {company?.address.streetNumber}
                  </span>
                </div>
                <div className="profile__content__right__box">
                  <span>Country</span>
                  <span>{company?.address.country}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>City</span>
                  <span>{company?.address.city}</span>
                </div>
                <div className="profile__content__right__box">
                  <span>Postal Code</span>
                  <span>{company?.address.postalCode}</span>
                </div>

                <div className="profile__content__right__box">
                  <span>Capital</span>
                  <span>{company?.capital}</span>
                </div>

                <div className="profile__content__right__box">
                  <span>Website</span>
                  <span>{company?.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {openDialogDelete && (
          <Dialog
            title="Are you sure ?"
            handleOpenModal={handleOpenDialog}
            handleConfirm={handleConfirm}
          />
        )}

        {openEditProfileSelect && (
          <EditProfileSelect
            handleEditCompany={handleEditCompany}
            handleEditUser={handleEditUser}
            handleClose={() => setOpenEditProfileSelect(false)}
          />
        )}
        {openEditCompany && company && (
          <ModalEditCompany
            handleClose={() => setOpenEditCompany(false)}
            company={company}
          />
        )}

        {openEditUser && (
          <ModalEditUser
            userAvatar={userImage}
            handleClose={() => setOpenEditUser(false)}
          />
        )}
      </section>
    )
  );
};

export default Profile;
