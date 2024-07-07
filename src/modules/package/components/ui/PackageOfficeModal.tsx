import React, { useContext, useEffect, useState } from "react";
import CityData from "../../../core/models/CityData";
import roData from "../../../../resources/ro.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import RouteService from "../../../route/services/RouteService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

interface PackageOfficeModalProps {
  onClose: () => void;
}

const PackageOfficeModal: React.FC<PackageOfficeModalProps> = ({ onClose }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [key: string]: string[] }>({});
  let [originCountry, setOriginCountry] = useState<string>();
  let [city, setOriginCity] = useState<string>("");
  const routeService = new RouteService();
  let nav = useNavigate();
  const { user } = useContext(LoginContext) as LoginContextType;
  useEffect(() => {
    const countrySet = new Set<string>();
    const cityMap: { [key: string]: string[] } = {};

    roData.forEach((item: CityData) => {
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
    setOriginCountry(e.target.value);
    setOriginCity("");
  };

  const handleConfirm = async () => {
    try {
      const response = await routeService.generateRoute(
        user.companyRegistrationNumber,
        city
      );
      console.log(response);
      toast.success("Route generated successfully");
      onClose();
      nav("/dashboard/routes");
    } catch (error) {
      toast.error("Error generating route");
    }
  };

  return (
    <>
      <section className="modal">
        <div className="modal__dialog">
          <div className="modal__dialog__content">
            <h2>Select the office </h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="country">Country</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="inputBox__icon"
                  />
                  <select
                    id="country"
                    value={originCountry}
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
                    onChange={(e) => setOriginCity(e.target.value)}
                    disabled={!originCountry}
                  >
                    <option value="">Select a city</option>
                    {originCountry &&
                      cities[originCountry]?.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="modal__dialog__content__actions">
              <button className="button__modal" onClick={onClose}>
                Cancel
              </button>
              <button
                className="button__modal button__modal__confirm"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageOfficeModal;
