import React, { useEffect, useState } from "react";
import { useMultistepForm } from "../../../core/hooks/useMultistepForm";
import FormAddress from "../../../address/components/FormAddress";
import FormDriver from "./FormDriver";
import Address from "../../../address/model/Address";
import DriverCreateRequest from "../../dto/DriverCreateRequest";
import { useLocation, useNavigate } from "react-router";
import DriverService from "../../service/DriverService";
import QontoConnector from "../../../core/components/QontoConnector";
import EmailService from "../../../email/services/EmailService";
import InvalidToken from "../../../core/components/InvalidToken";

const RegistrationDriver = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const expires = searchParams.get("expires");
  const companyRegistrationNumber = searchParams.get("identifier");
  const emailService = new EmailService();
  const driverService = new DriverService();

  let handleRemoveLinkAfterCreate = async () => {
    await emailService.removeLink(code as string);
  };
  const nav = useNavigate();

  const [isValid, setIsValid] = useState(false);

  const handlerVerificationCode = async () => {
    try {
      if (code && expires) {
        let response = await emailService.isValid(code);
        setIsValid(response);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  useEffect(() => {
    handlerVerificationCode();
  }, [code, expires]);

  let [dataAddress, setDataAddress] = useState({
    street: "",
    city: "",
    country: "",
    postalCode: "",
  } as Address);

  let [dataDriver, setDataDriver] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    licenseNumber: "",
    companyRegistrationNumber: companyRegistrationNumber,
    address: dataAddress,
  } as DriverCreateRequest);

  function updateDataDriver(data: DriverCreateRequest) {
    setDataDriver(data);
  }

  function updateDataAddress(data: Address) {
    setDataAddress(data);
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  useEffect(() => {
    setDataDriver((prevDriver) => ({
      ...prevDriver,
      address: dataAddress,
    }));
  }, [dataAddress]);

  useEffect(() => {
    if (companyRegistrationNumber !== null) {
      setDataDriver((prevDriver) => ({
        ...prevDriver,
        companyRegistrationNumber: companyRegistrationNumber,
      }));
    }
  }, [companyRegistrationNumber]);

  const handleCreateAccount = async () => {
    handlerVerificationCode();
    try {
      await driverService.addDriver(dataDriver);
      handleRemoveLinkAfterCreate();
    } catch (error) {
      console.log((error as Error).message);
    }
    nav("/login");
  };

  const nameSteps = ["Driver Details", "Address Details"];

  const {
    currentStepIndex,
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <FormDriver {...dataDriver} updateDataDriver={updateDataDriver} />,
    <FormAddress
      {...dataAddress}
      title="Driver Address"
      updateDataAddress={updateDataAddress}
    />,
  ]);
  return isValid ? (
    <form id="register" onSubmit={onSubmit}>
      <div className="register__container">
        <QontoConnector
          key={currentStepIndex}
          step={currentStepIndex}
          nameSteps={nameSteps}
        />
        {step}

        <div className="register__bottom">
          {!isFirstStep && (
            <button
              type="button"
              className="button button__prev"
              onClick={prevStep}
            >
              Back
            </button>
          )}

          {!isLastStep && (
            <button type="submit" className=" button button__next">
              Next
            </button>
          )}
        </div>

        {isLastStep && (
          <div className="register__center__button">
            <button
              className="button button__first"
              onClick={() => handleCreateAccount()}
            >
              Create Account
            </button>
          </div>
        )}
      </div>
    </form>
  ) : (
    <InvalidToken />
  );
};

export default RegistrationDriver;
