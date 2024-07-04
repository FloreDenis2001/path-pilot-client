import { useContext, useState, useEffect } from "react";
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
import roData from '../../../resources/ro.json'; 

interface ModalEditUserProps {
  userAvatar: string;
  handleClose: () => void;
}

const ModalEditUser: React.FC<ModalEditUserProps> = ({
  userAvatar,
  handleClose,
}) => {
  const { user, setUserCookie } = useContext(LoginContext) as LoginContextType;
  const nav = useNavigate();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.addressDTO.city);
  const [country, setCountry] = useState(user.addressDTO.country);
  const [street, setStreet] = useState(user.addressDTO.street);
  const [streetNumber, setStreetNumber] = useState(user.addressDTO.streetNumber);
  const [postalCode, setPostalCode] = useState(user.addressDTO.postalCode);
  const [showUploadImg, setShowUploadImg] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(userAvatar); 
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [key: string]: string[] }>({});
  const userSerivce = new UserService();

  useEffect(() => {
    const countrySet = new Set<string>();
    const cityMap: { [key: string]: string[] } = {};

    roData.forEach((item) => {
      countrySet.add(item.country);
      if (!cityMap[item.country]) {
        cityMap[item.country] = [];
      }
      cityMap[item.country].push(item.city);
    });

    setCountries(Array.from(countrySet));
    setCities(cityMap);
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    setCity(''); 
  };

  // Handle pentru schimbarea orașului
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  // Handle pentru trimiterea formularului
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
      setUserCookie({
        ...user,
        firstName,
        lastName,
        email,
        phone,
        addressDTO: {
          city,
          country,
          street,
          streetNumber,
          postalCode,
        },
      });
      toast.success(`Update successful: ${response}`);
      window.location.reload();
      handleClose();
    } catch (error) {
      toast.error(`Update failed: ${error}`);
    }
  };

  const handleImageUpload = (newImage: string) => {
    setCurrentAvatar(newImage); 
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
          <UploadImg
            onClose={() => setShowUploadImg(!showUploadImg)}
            imageProfile={currentAvatar}
            onImageUpload={handleImageUpload}
          />
        )}
        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <div className="profileImage">
              <LazyLoadImage
                src={`data:image/jpeg;base64,${currentAvatar}`}
                alt="user-photo"
                width={250}
                effect="blur"
              />

              <FontAwesomeIcon
                icon={faEdit}
                className="top-right"
                onClick={() => setShowUploadImg(!showUploadImg)}
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
                <label htmlFor="country">Country</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="inputBox__icon"
                  />
                  <select
                    id="country"
                    value={country}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="city">City</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    className="inputBox__icon"
                  />
                  <select
                    id="city"
                    value={city}
                    onChange={handleCityChange}
                    disabled={!country}
                  >
                    <option value="">Select a city</option>
                    {country && cities[country]?.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
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
