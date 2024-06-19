import {
  faHashtag,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import PackageAddress from "../../dto/PackageAddress";
import Address from "../../../address/model/Address";
import roData from "../../../../resources/ro.json";
import CityData from "../../../core/models/CityData";
interface PickUpProps {
  name: string;
  phone: string;
  addressDTO: Address;
  updatePickUp: (data: PackageAddress) => void;
}

const FormPickUp: React.FC<PickUpProps> = ({
  name,
  phone,
  addressDTO,
  updatePickUp,
}) => {
  let [originName, setOriginName] = useState<string>(name || "");
  let [originPhone, setOriginPhone] = useState<string>(phone || "");
  let [originCity, setOriginCity] = useState<string>(addressDTO.city || "");
  let [originStreet, setOriginStreet] = useState<string>(addressDTO.street || "");
  let [originNumber, setOriginNumber] = useState<string>(addressDTO.streetNumber || "");
  let [originCountry, setOriginCountry] = useState<string>(addressDTO.country || "");
  let [originPostalCode, setOriginPostalCode] = useState<string>(
    addressDTO.postalCode || ""
  );

  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [key: string]: string[] }>({});

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

  const memorizedUpdatePickUp = (data: PackageAddress) => {
    updatePickUp(data);
  };

  const updatePickUpData = () => {
    memorizedUpdatePickUp({
      name: originName,
      phone: originPhone,
      addressDTO: {
        city: originCity,
        street: originStreet,
        streetNumber: originNumber,
        country: originCountry,
        postalCode: originPostalCode,
      },
    });
  };

  useEffect(() => {
    updatePickUpData();
  }, [
    originName,
    originPhone,
    originCity,
    originStreet,
    originNumber,
    originCountry,
    originPostalCode,
  ]);

  return (
    <div className="modal__container__body__content">
      <h2>Pick-up from</h2>
      <div className="modal__container__body__content__main">
        <div className="modal__container__body__content__input">
          <label htmlFor="country">Country</label>
          <div className="inputBox">
          <FontAwesomeIcon icon={faLocation} className="inputBox__icon" />
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
          <FontAwesomeIcon icon={faLocationArrow} className="inputBox__icon" />
            <select
              id="city"
              value={originCity}
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

        <div className="modal__container__body__content__input">
          <label htmlFor="street">Street</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />
            <input
              type="text"
              required
              placeholder="Enter the street"
              value={originStreet}
              onChange={(e) => setOriginStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="modal__container__body__content__input">
          <label htmlFor="number">Number</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faHashtag} className="inputBox__icon" />
            <input
              type="text"
              required
              placeholder="Enter the number"
              value={originNumber}
              onChange={(e) => setOriginNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="postalCode">Postal Code</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faLocationDot} className="inputBox__icon" />
            <input
              type="text"
              required
              placeholder="Enter the postal code"
              value={originPostalCode}
              onChange={(e) => setOriginPostalCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPickUp;
