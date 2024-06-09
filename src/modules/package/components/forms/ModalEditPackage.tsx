import React, { useContext, useEffect, useState } from "react";
import Package from "../../model/Package";
import PackageService from "../../service/PackageService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import { PackageStatus } from "../../model/PackageStatus";
import { useMultistepForm } from "../../../core/hooks/useMultistepForm";
import FormPackageDelivery from "./FormPackageDelivery";
import FormPickUp from "./FormPickUp";
import FormDelivery from "./FormDelivery";
import QontoConnector from "../../../core/components/QontoConnector";
import PackageAddress from "../../dto/PackageAddress";
import PackageDetails from "../../dto/PackageDetails";
import Address from "../../../address/model/Address";
import PackageRequest from "../../dto/PackageRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { retrievePackagesLoading } from "../../../../store/packages/packages.reducers";
interface ModalEditPackageProps {
  handleOpenModal: () => void;
  pack: Package;
}

const ModalEditPackage: React.FC<ModalEditPackageProps> = ({
  handleOpenModal,
  pack,
}) => {
  const { user } = useContext(LoginContext) as LoginContextType;
  const dispatch = useDispatch();

  let [originDetails, setOriginDetails] = useState<PackageAddress>({
    name: pack.shipmentDTO.originName,
    phone: pack.shipmentDTO.originPhone,
    addressDTO: pack.shipmentDTO.origin,
  });

  let [destinationDetails, setDestinationDetails] = useState<PackageAddress>({
    name: pack.shipmentDTO.destinationName,
    phone: pack.shipmentDTO.destinationPhone,
    addressDTO: pack.shipmentDTO.destination,
  });

  let [packageDetailsInfo, setPackageDetailsInfo] = useState<PackageDetails>({
    totalAmount: pack.packageDetails.totalAmount,
    weight: pack.packageDetails.weight,
    height: pack.packageDetails.height,
    width: pack.packageDetails.width,
    length: pack.packageDetails.length,
    deliveryDescription: pack.packageDetails.deliveryDescription,
  });

  let [packageRequest, setPackageRequest] = useState<PackageRequest>({
    customerEmail: user.email,
    packageDetails: packageDetailsInfo,
    origin: originDetails,
    destination: destinationDetails,
  });

  let servicePackage = new PackageService();

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

  const handleEditPackage = async () => {

    try {
      await servicePackage.updatePackage(pack.awb, packageRequest);
      toast.success("Package updated successfully");
      dispatch(retrievePackagesLoading());
    }
    catch (error) {
      toast.error("Error updating package");
      dispatch(retrievePackagesLoading());
    }
    handleOpenModal();
  };

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

  const nameSteps = ["Package Delivery", "Pick Up Address", "Delivery Address"];
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <form onSubmit={onSubmit} className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Package</span>
            <div className="modal__container__header__actions">
              {pack.status === PackageStatus.ASSIGNED ? (
                <span className="modal__container__header__actions__status done">
                  {pack.status}
                </span>
              ) : (
                <span className="modal__container__header__actions__status cancelled">
                  {pack.status}
                </span>
              )}
              <button
                className="button__close"
                onClick={() => handleOpenModal()}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
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
              onClick={() => handleEditPackage()}
            >
              Updated Package
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ModalEditPackage;
