import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../models/LoginContextType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faLocation,
  faLocationArrow,
  faPhone,
  faSignature,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import UploadImg from "../../core/components/UploadImage";
import UserService from "../service/UserService";
import { toast } from "react-toastify";
import UpdateUserRequest from "../dto/UpdateUserRequest";
import { useNavigate } from "react-router";

interface ModalEditUserProps {
  userAvatar: string;
  handleClose: () => void;
}

const ModalEditUser: React.FC<ModalEditUserProps> = ({
  userAvatar,
  handleClose,
}) => {
  const { user , logOut } = useContext(LoginContext) as LoginContextType;
  const nav = useNavigate();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.addressDTO.city);
  const [country, setCountry] = useState(user.addressDTO.country);
  const [street, setStreet] = useState(user.addressDTO.street);
  const [streetNumber, setStreetNumber] = useState(
    user.addressDTO.streetNumber
  );
  const [postalCode, setPostalCode] = useState(user.addressDTO.postalCode);
  const [showUploadImg, setShowUploadImg] = useState(false);
  const userSerivce = new UserService();



  const handleUploadImg = () => {
    setShowUploadImg(!showUploadImg);
  };



  const handleSubmit = async () => {
    try { 
      
      

    const updatedData: UpdateUserRequest = {
      email,
      firstName,
      lastName,
      phone,
      city,
      country,
      street,
      streetNumber,
      postalCode,
    };
    
      const response = await userSerivce.update(updatedData);
      
      toast.success(`Update successful:${response}`);
      logOut();
      nav("/")
      handleClose(); 
    } catch (error) {
      toast.error(`Update failed: ${error}`);
    }
  };
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit User</span>
          </div>

          <button className="button__close" onClick={() => handleClose()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        {showUploadImg && (
          <UploadImg onClose={handleUploadImg} imageProfile={userAvatar}  />
        )}
        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <div className="profileImage">
              <LazyLoadImage
                src={`data:image/jpeg;base64,${userAvatar}`}
                alt="user-photo"
                width={250}
                effect="blur"
              />

              <FontAwesomeIcon
                icon={faEdit}
                className="top-right"
                onClick={handleUploadImg}
              />
            </div>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">First Name</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Last Name</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />

                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Email</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Phone</label>
                <div className="inputBox">
                  <FontAwesomeIcon icon={faPhone} className="inputBox__icon" />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="inputBox__icon"
                  />

                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Country</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Street Number</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={streetNumber}
                    onChange={(e) => setStreetNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Postal Code</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal__container__footer">
            <button
              className="button__modal button__modal__cancel"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="button__modal button__modal__save"
              type="button"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalEditUser;
