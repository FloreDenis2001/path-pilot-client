import React from "react";
import VehicleService from "../modules/vehicle/service/VehicleService";

interface DialogProps {
  vehicleRegistrationNumber: string;
  title: string;
  handleOpenModal: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  vehicleRegistrationNumber,
  handleOpenModal,
}) => {
  const vehicleService = new VehicleService();

  const handleDeleteVehicle = async () => {
    try {
      await vehicleService.deleteVehicle(vehicleRegistrationNumber);
    } catch (err) {
      console.log((err as Error).message);
    }
    handleOpenModal();
  };

  return (
    <section className="modal">
      <div className="modal__dialog">
        <div className="modal__dialog__content">
          <h2>{title}</h2>
          <div className="modal__dialog__content__actions">
            <button className="button__modal" onClick={handleOpenModal}>
              Cancel
            </button>
            <button
              className="button__modal button__modal__confirm"
              onClick={handleDeleteVehicle}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialog;
