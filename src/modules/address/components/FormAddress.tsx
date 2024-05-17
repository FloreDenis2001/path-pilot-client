import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as LogoSvg } from "../../../assets/logo2.svg";
import { FaGlobe, FaHashtag, FaSignature } from "react-icons/fa";
import Address from "../model/Address";

interface FormAddressProps {
  title: string;
  city: string;
  street: string;
  streetNumber: string;
  country: string;
  postalCode: string;
  updateDataAddress: (data: any) => void;
}

const FormAddress: React.FC<FormAddressProps> = ({ title, city: initialCity, street: initialStreet, streetNumber: initialStreetNumber, country: initialCountry, postalCode: initialPostalCode, updateDataAddress }) => {
  const [city, setCity] = useState<string>(initialCity || "");
  const [street, setStreet] = useState<string>(initialStreet || "");
  const [streetNumber, setStreetNumber] = useState<string>(initialStreetNumber || "");
  const [country, setCountry] = useState<string>(initialCountry || "");
  const [postalCode, setPostalCode] = useState<string>(initialPostalCode || "");

  const  memorizedUpdateDataAddress = useCallback(
    (data: Address) => {
      updateDataAddress(data);
    },
    [updateDataAddress]
  );

  useEffect(() => {
    memorizedUpdateDataAddress({ city, street, streetNumber, country, postalCode });
  }, [city, street, streetNumber, country, postalCode, memorizedUpdateDataAddress]);

  return (
   <>
      <div className="register__header">
        <div className="register__header">
          <LogoSvg className="register__logo" />

          <h1 className="heading-primary">{title}</h1>
          <h4 className="heading-secondary">
            Reengage with precision pathfinding: Your gateway to streamlined
            route optimization and smarter travel decisions.
          </h4>
        </div>
      </div>

      <div className="register__center">
        <div className="inputBox">
          <FaGlobe className="inputBox__icon" />
          <input
            type="text"
            placeholder="Country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaGlobe className="inputBox__icon" />
          <input
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaSignature className="inputBox__icon" />
          <input
            type="text"
            placeholder="Street Name"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaHashtag className="inputBox__icon" />
          <input
            type="text"
            placeholder="Street Number"
            required
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaHashtag className="inputBox__icon" />
          <input
            type="text"
            placeholder="Postal Code"
            required
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

    
      </div>
    </>
  );
};

export default FormAddress;
