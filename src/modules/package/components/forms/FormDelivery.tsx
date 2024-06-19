import {
  faHashtag,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Address from "../../../address/model/Address";
import PackageAddress from "../../dto/PackageAddress";
import roData from "../../../../resources/ro.json";
import CityData from "../../../core/models/CityData";


interface FormDeliveryProps {
  name: string;
  phone: string;
  addressDTO: Address;
  updateDelivery: (data: PackageAddress) => void;
}



const FormDelivery: React.FC<FormDeliveryProps> = ({
  name,
  phone,
  addressDTO,
  updateDelivery,
}) => {
  let [destinationName, setDestinationName] = useState<string>(name || "");
  let [destinationPhone, setDestinationPhone] = useState<string>(phone || "");
  let [destinationCity, setDestinationCity] = useState<string>(
    addressDTO.city || ""
  );
  let [destinationStreet, setDestinationStreet] = useState<string>(
    addressDTO.street || ""
  );
  let [destinationNumber, setDestinationNumber] = useState<string>(
    addressDTO.streetNumber || ""
  );
  let [destinationCountry, setDestinationCountry] = useState<string>(
    addressDTO.country || ""
  );
  let [destinationPostalCode, setDestinationPostalCode] = useState<string>(
    addressDTO.postalCode || ""
  );
  const [countries, setCountries] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [key: string]: string[] }>({});

  const memorizedUpdateDelivery = (data: PackageAddress) => {
    updateDelivery(data);
  };

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
    setDestinationCountry(e.target.value);
    setDestinationCity(""); 
  };

  const updateDeliveryData = () => {
    memorizedUpdateDelivery({
      name: destinationName,
      phone: destinationPhone,
      addressDTO: {
        city: destinationCity,
        street: destinationStreet,
        streetNumber: destinationNumber,
        country: destinationCountry,
        postalCode: destinationPostalCode,
      },
    });
  };

  useEffect(() => {
    updateDeliveryData();
  }, [
    destinationName,
    destinationPhone,
    destinationCity,
    destinationStreet,
    destinationNumber,
    destinationCountry,
    destinationPostalCode,
  ]);

  return (
    <div className="modal__container__body__content">
      <h2>Delivery To </h2>
      <div className="modal__container__body__content__main">
        <div className="modal__container__body__content__input">
          <label htmlFor="">Name</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />
            <input
              type="text"
              placeholder="Enter the name"
              value={destinationName}
              onChange={(e) => setDestinationName(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Phone</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faHashtag} className="inputBox__icon" />

            <input
              type="text"
              placeholder="Enter phone number"
              value={destinationPhone}
              onChange={(e) => setDestinationPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Country</label>
          <div className="inputBox">
             <FontAwesomeIcon icon={faLocation} className="inputBox__icon" />
            <select
              id="country"
              value={destinationCountry}
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
          <label htmlFor="">Street</label>
          <div className="inputBox">
            <FontAwesomeIcon icon={faSignature} className="inputBox__icon" />

            <input
              type="text"
              required
              placeholder="Enter the street"
              value={destinationStreet}
              onChange={(e) => setDestinationStreet(e.target.value)}
            />
          </div>
        </div>
        <div className="modal__container__body__content__input">
          <label htmlFor="">Number</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faHashtag} className="inputBox__icon" />

            <input
              type="text"
              required
              placeholder="Enter the number"
              value={destinationNumber}
              onChange={(e) => setDestinationNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">City</label>

          <div className="inputBox">
          <FontAwesomeIcon icon={faLocationArrow} className="inputBox__icon" />
            <select
              id="city"
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
              disabled={!destinationCountry}
            >
              <option value="">Select a city</option>
              {destinationCountry &&
                cities[destinationCountry]?.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="modal__container__body__content__input">
          <label htmlFor="">Postal Code</label>

          <div className="inputBox">
            <FontAwesomeIcon icon={faLocationDot} className="inputBox__icon" />

            <input
              type="text"
              required
              value={destinationPostalCode}
              placeholder="Enter the postal code"
              onChange={(e) => setDestinationPostalCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDelivery;
