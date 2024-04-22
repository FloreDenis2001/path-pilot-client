import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaGlobe,
  FaKey,
  FaPhoneAlt,
  FaSignature,
} from "react-icons/fa";
import { ReactComponent as LogoSvg } from "../../../../assets/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Address from "../../../address/model/Address";
import { Company } from "../../models/Company";

interface FormCompanyProps {
  name: string;
  email: string;
  registrationNumber: string;
  industry: string;
  capital: number;
  phone: string;
  website: string;
  address: Address;
  updateDataCompany: (data: Company) => void;
}

const FormCompany: React.FC<FormCompanyProps> = ({
  name: initialCompanyName,
  email: initialEmail,
  registrationNumber: initialRegistrationNumber,
  industry: initialIndustry,
  capital: initialCapital,
  phone: initialPhone,
  website: initialWebsite,
  address: initialAddress,
  updateDataCompany,
}) => {
  const [companyName, setCompanyName] = useState(initialCompanyName || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [registrationNumber, setRegistrationNumber] = useState(
    initialRegistrationNumber || ""
  );
  const [industry, setIndustry] = useState(initialIndustry || "");
  const [capital, setCapital] = useState(initialCapital || 0);
  const [phone, setPhone] = useState(initialPhone || "");
  const [website, setWebsite] = useState(initialWebsite || "");

  useEffect(() => {
    updateDataCompany({
      name: companyName,
      email,
      registrationNumber,
      industry,
      capital,
      phone,
      website,
      address: initialAddress
    });
  }, [companyName, email, registrationNumber, industry, capital, phone, website, initialAddress]);


  return (
    <>
      <div className="register__header">
        <div className="register__header">
          <LogoSvg className="register__logo" />

          <h1 className="heading-primary">Company Details !</h1>
          <h4 className="heading-secondary">
            Reengage with precision pathfinding: Your gateway to streamlined
            route optimization and smarter travel decisions.
          </h4>
        </div>
      </div>

      <div className="register__center">
        <div className="inputBox">
          <FontAwesomeIcon icon={faUser} className="inputBox__icon" />
          <input
            type="text"
            placeholder="Company Name"
            required
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaSignature className="inputBox__icon" />
          <input
            type="text"
            placeholder="Registration Number"
            required
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaEnvelope className="inputBox__icon" />
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="inputBox">
          <FaSignature className="inputBox__icon" />
          <input
            type="text"
            placeholder="Industry"
            required
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaKey className="inputBox__icon" />
          <input
            type="text"
            placeholder="Capital"
            required
            value={capital}
            onChange={(e) => {
              setCapital(+e.target.value);
            }}
          />
        </div>

        <div className="inputBox">
          <FaPhoneAlt className="inputBox__icon" />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div className="inputBox">
          <FaGlobe className="inputBox__icon" />
          <input
            type="text"
            placeholder="Website"
            required
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FormCompany;
