import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocation,
  faPhone,
  faSignature,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CompanyService from "../../company/services/CompanyServer";
import { toast } from "react-toastify";
import LoginContextType from "../models/LoginContextType";
import { LoginContext } from "../../context/LoginProvider";
import roData from "../../../resources/ro.json";
import { Company } from "../../company/models/Company";
import CompanyUpdateRequest from "../../company/dto/CompanyUpdateRequest";

interface ModalEditCompanyProps {
  handleClose: () => void;
  company?: Company;
}

const ModalEditCompany: React.FC<ModalEditCompanyProps> = ({
  handleClose,
  company,
}) => {
  const [name, setName] = useState<string>(company?.name || "");
  const [email, setEmail] = useState<string>(company?.email || "");
  const [phone, setPhone] = useState<string>(company?.phone || "");
  const [city, setCity] = useState<string>(company?.address.city || "");
  const [country, setCountry] = useState<string>(
    company?.address.country || ""
  );
  const [street, setStreet] = useState<string>(company?.address.street || "");
  const [industry, setIndustry] = useState<string>(company?.industry || "");
  const [capital, setCapital] = useState<number>(company?.capital || 0);
  const [website, setWebsite] = useState<string>(company?.website || "");
  const [streetNumber, setStreetNumber] = useState<string>(
    company?.address.streetNumber || ""
  );
  const [postalCode, setPostalCode] = useState<string>(
    company?.address.postalCode || ""
  );

  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [key: string]: string[] }>({});

  const companyService = new CompanyService();
  const { user } = useContext(LoginContext) as LoginContextType;

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
    setCity("");
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const updateRequest: CompanyUpdateRequest = {
        userEmail: user?.email || "",
        updatedCompany: {
          name,
          email,
          phone,
          industry,
          registrationNumber: user?.companyRegistrationNumber || "",
          capital,
          address: {
            country,
            city,
            street,
            streetNumber,
            postalCode,
          },
          website,
        },
      };

      await companyService.updateCompany(updateRequest);
      toast.success("Company updated successfully!");
      window.location.reload();
      handleClose();
    } catch (error) {
      toast.error(`Update failed: ${(error as Error).message}`);
    }
  };

  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Company</span>
          </div>
          <button className="button__close" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Company Name</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <label htmlFor="">Industry</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Capital</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="inputBox__icon"
                  />
                  <input
                    type="number"
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Website</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
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
                    icon={faLocation}
                    className="inputBox__icon"
                  />
                  <select
                    id="city"
                    value={city}
                    onChange={handleCityChange}
                    disabled={!country}
                  >
                    <option value="">Select a city</option>
                    {country &&
                      cities[country]?.map((city, index) => (
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

export default ModalEditCompany;
