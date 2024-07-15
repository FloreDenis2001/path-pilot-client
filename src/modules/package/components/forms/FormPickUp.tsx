import {
  faHashtag,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useCallback } from "react";
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
  const [originName, setOriginName] = useState<string>(name || "");
  const [originPhone, setOriginPhone] = useState<string>(phone || "");
  const [originCity, setOriginCity] = useState<string>(addressDTO.city || "");
  const [originStreet, setOriginStreet] = useState<string>(addressDTO.street || "");
  const [originNumber, setOriginNumber] = useState<string>(addressDTO.streetNumber || "");
  const [originCountry, setOriginCountry] = useState<string>(addressDTO.country || "");
  const [originPostalCode, setOriginPostalCode] = useState<string>(addressDTO.postalCode || "");

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

  const updatePickUpData = useCallback(() => {
    updatePickUp({
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
  }, [
    originName,
    originPhone,
    originCity,
    originStreet,
    originNumber,
    originCountry,
    originPostalCode,
    updatePickUp,
  ]);

  useEffect(() => {
    updatePickUpData();
  }, [updatePickUpData]);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOriginCountry(e.target.value);
    setOriginCity(""); 
  };

  return (
    <div className="modal__container__body__content">
      <h2>Pick-up from</h2>
      <div className="modal__container__body__content__main">
        <div className="modal__container__body__content__input">
          <label htmlFor="name">Name</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />
            <input
              type="text"
              required
              placeholder="Enter the name"
              value={originName}
              onChange={(e) => setOriginName(e.target.value)}
            />
          </div>
        </div>
        <div className="modal__container__body__content__input">
          <label htmlFor="phone">Phone</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faHashtag} className="inputBox__icon" />
            <input
              type="text"
              required
              placeholder="Enter the phone"
              value={originPhone}
              onChange={(e) => setOriginPhone(e.target.value)}
            />
          </div>
        </div>
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
