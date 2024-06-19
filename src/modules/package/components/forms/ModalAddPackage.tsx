import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import PackageRequest from "../../dto/PackageRequest";
import Address from "../../../address/model/Address";
import PackageService from "../../service/PackageService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import FormPickUp from "./FormPickUp";
import FormDelivery from "./FormDelivery";
import { useMultistepForm } from "../../../core/hooks/useMultistepForm";
import QontoConnector from "../../../core/components/QontoConnector";
import PackageAddress from "../../dto/PackageAddress";
import PackageDetails from "../../dto/PackageDetails";
import FormPackageDelivery from "./FormPackageDelivery";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { retrievePackagesLoading } from "../../../../store/packages/packages.reducers";

interface ModalAddPackageProps {
  handleOpenModalAddOrder: () => void;
}

const ModalAddPackage: React.FC<ModalAddPackageProps> = ({
  handleOpenModalAddOrder,
}) => {
  const { user } = useContext(LoginContext) as LoginContextType;
  const dispatch = useDispatch();
  let [originDetails, setOriginDetails] = useState<PackageAddress>({
    name: "",
    phone: "",
    addressDTO: {} as Address,
  });

  let [destinationDetails, setDestinationDetails] = useState<PackageAddress>({
    name: "",
    phone: "",
    addressDTO: {} as Address,
  });

  let [packageDetailsInfo, setPackageDetailsInfo] = useState<PackageDetails>({
    totalAmount: 0,
    weight: 0,
    height: 0,
    width: 0,
    length: 0,
    deliveryDescription: "",
  });

  let [packageRequest, setPackageRequest] = useState<PackageRequest>({
    customerEmail: user.email,
    packageDetails: packageDetailsInfo,
    origin: originDetails,
    destination: destinationDetails,
  });

  let servicePackage = new PackageService();

  const handleCreatePackage = async () => {
    try {
      const response = await servicePackage.createPackage(packageRequest);
      if (response) {
        toast.success("Package created successfully");
        dispatch(retrievePackagesLoading());
        handleOpenModalAddOrder();
      }
    } catch (error) {
      toast.error("Error creating package");
      dispatch(retrievePackagesLoading());
    }
  };

  const updatePackageDetails = (data: PackageDetails) => {
    setPackageDetailsInfo(data);
  };

  const updatePickUp = (data: PackageAddress) => {
    setOriginDetails(data);
  };

  const updateDelivery = (data: PackageAddress) => {
    setDestinationDetails(data);
  };

  useEffect(() => {
    setPackageRequest({
      customerEmail: user.email,
      origin: originDetails,
      destination: destinationDetails,
      packageDetails: packageDetailsInfo,
    });
  }, [originDetails, destinationDetails, packageDetailsInfo]);

  const {
    currentStepIndex,
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <FormPackageDelivery
      {...packageDetailsInfo}
      updatePackageDetails={updatePackageDetails}
    />,
    <FormPickUp {...originDetails} updatePickUp={updatePickUp} />,
    <FormDelivery {...destinationDetails} updateDelivery={updateDelivery} />,
  ]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const nameSteps = ["Package Delivery", "Pick Up Address", "Delivery Address"];

  return (
    <form className="modal" onSubmit={onSubmit}>
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Create Package</span>
            <button
              className="button__close"
              onClick={() => handleOpenModalAddOrder()}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
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
            <button type="submit" className=" button button__next">
              Next
            </button>
          )}
        </div>

        {isLastStep && (
          <div className="register__center__button">
            <button
              className="button button__first"
              onClick={() => handleCreatePackage()}
            >
              Create Package
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ModalAddPackage;
