import FormUser from "../../user/components/FormUser";
import FormAddress from "../../address/components/FormAddress";
import FormCompany from "../../company/components/forms/FormCompany";
import { useMultistepForm } from "../../core/hooks/useMultistepForm";
import QontoConnector from "./ui/QontoConnector";
import { FormEvent, useEffect, useState } from "react";
import RegisterRequest from "../../user/dto/RegisterRequest";
import { Company } from "../../company/models/Company";
import Address from "../../address/model/Address";
import UserService from "../../user/service/UserService";
import { useNavigate } from "react-router";

const Registration = () => {
  let [dataAddressUser, setDataAddressUser] = useState({
    street: "",
    city: "",
    country: "",
    postalCode: "",
  } as Address);

  let [dataUser, setDataUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    address: dataAddressUser,
  } as RegisterRequest);


  let [dataAddress, setDataAddress] = useState({
    street: "",
    city: "",
    country: "",
    postalCode: "",
  } as Address);

  let [dataCompany, setDataCompany] = useState({
    name: "",
    registrationNumber: "",
    industry: "",
    capital: 0,
    phone: "",
    email: "",
    website: "",
    address: dataAddress,
  } as Company);

  let [data, setData] = useState({
    user: dataUser,
    company: dataCompany,
  });

  const nav = useNavigate();

  const userService = new UserService();

  function updateDataUser(data: RegisterRequest) {
    setDataUser(data);
  }

  function updateDataCompany(data: Company) {
    setDataCompany(data);
  }

  function updateDataAddress(data: Address) {
    setDataAddress(data);
  }

  function updateDataAddressUser(data: Address) {
    setDataAddressUser(data);
  }

  const {
    currentStepIndex,
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <FormUser {...dataUser} updateDataUser={updateDataUser} />,
    <FormAddress
      title="User Address"
      {...dataAddressUser}
      updateDataAddress={updateDataAddressUser}
    />,
    <FormCompany {...dataCompany} updateDataCompany={updateDataCompany} />,
    <FormAddress
      title="Company Address"
      {...dataAddress}
      updateDataAddress={updateDataAddress}
    />,
  ]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    nextStep();
  }
  
  useEffect(() => {
    setDataCompany((prevCompany) => ({
      ...prevCompany,
      address: dataAddress,
    }));
  }, [dataAddress]);

  useEffect(() => {
    setDataUser((prevUser) => ({
      ...prevUser,
      address: dataAddressUser,
    }));
  }, [dataAddressUser]);

  useEffect(() => {
    setData({ user: dataUser, company: dataCompany });
  }, [dataUser, dataCompany]);

  const handleCreateAccount = async () => {
    console.log(data);

    try {
      let response = await userService.register(data);
      alert("Account created successfully");
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    nav("/login");
  };

  return (
    <form id="register" onSubmit={onSubmit}>
      <div className="register__container">
        <QontoConnector key={currentStepIndex} step={currentStepIndex} />
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
  );
};

export default Registration;
