import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import PackageRequest from "../../dto/PackageRequest";
import Address from "../../../address/model/Address";
import PackageService from "../../service/PackageService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import FormPackageDelivery from "./FormPackageDelivery";
import FormPickUp from "./FormPickUp";
import FormDelivery from "./FormDelivery";
import { useMultistepForm } from "../../../core/hooks/useMultistepForm";
import QontoConnector from "../../../core/components/QontoConnector";
import PackageAddress from "../../dto/PackageAddress";
import PackageDetails from "../../dto/PackageDetails";

interface ModalAddPackageProps {
  handleOpenModalAddOrder: () => void;
}

const ModalAddPackage: React.FC<ModalAddPackageProps> = ({
  handleOpenModalAddOrder,
}) => {
  const { user } = useContext(LoginContext) as LoginContextType;

  const originAddress: Address = {
    country: "",
    city: "",
    street: "",
    streetNumber: "",
    postalCode: "",
  };

  const originDetails: PackageAddress = {
    name: "",
    phone: "",
    address: originAddress,
  };

  const destinationAddress: Address = {
    country: "",
    city: "",
    street: "",
    streetNumber: "",
    postalCode: "",
  };


  const destinationDetails: PackageAddress = {
    name: "",
    phone: "",
    address: destinationAddress,
  };

  const packageDetail: PackageDetails= {
    totalAmount: 0,
    weight: 0,
    height: 0,
    width: 0,
    length: 0,
  };


  const packageRequest: PackageRequest = {
    customerId: user.id,
    originDetails: originDetails,
    destinationDetails: destinationDetails,
    packageDetails: packageDetail,
  };

  let servicePackage = new PackageService();

  const handleCreatePackage = async () => {
    const response = await servicePackage.createPackage(packageRequest);
    if (response) {
      handleOpenModalAddOrder();
    }
  };

  const {
    currentStepIndex,
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    // <FormPackageDelivery />,
    <FormPickUp />,
    <FormDelivery />,
  ]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const nameSteps = ["Package Delivery", "Pick Up Address", "Delivery Address"];

  function handleCreateAccount(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <form className="modal" onSubmit={onSubmit}>
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Create Package</span>
          </div>

          <button
            className="button__close"
            onClick={() => handleOpenModalAddOrder()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <QontoConnector
            key={currentStepIndex}
            step={currentStepIndex}
            nameSteps={nameSteps}
          />
          {step}
        </div>

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
            <button
              type="submit"
              className=" button button__next"
            >
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

export default ModalAddPackage;
