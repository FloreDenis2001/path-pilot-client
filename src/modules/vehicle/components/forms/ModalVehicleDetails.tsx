import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Vehicle from "../../models/Vehicle";
interface ModalVehicleProps {
  vehicle: Vehicle;
  handleOpenModal: () => void;
}

const ModalVehicleDetails: React.FC<ModalVehicleProps> = ({
  vehicle,
  handleOpenModal,
}) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Vehicle Profile</span>
          </div>
          <button className="button__close" onClick={() => handleOpenModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__vehicleDetails__box">
            <div className="modal__container__body__vehicleDetails__box__details">
              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Make</h3>
                <p className="modal__text">{vehicle.make}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Model</h3>
                <p className="modal__text">{vehicle.model}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Year</h3>
                <p className="modal__text">{vehicle.year}</p>
              </div>
              
              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Registration Number</h3>
                <p className="modal__text">{vehicle.registrationNumber}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">FuelType</h3>
                <p className="modal__text">{vehicle.fuelType}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Kilometers</h3>
                <p className="modal__text">{vehicle.km}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Fuel Consumption</h3>
                <p className="modal__text">{vehicle.fuelConsumption}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Capacity</h3>
                <p className="modal__text">{vehicle.capacity}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Status</h3>
                {vehicle.active ? (
                  <p className="modal__text done">Active</p>
                ) : (
                  <p className="modal__text cancelled">Inactive</p>
                )}
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Width</h3>
                <p className="modal__text">{vehicle.width}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Height</h3>
                <p className="modal__text">{vehicle.height}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Length</h3>
                <p className="modal__text">{vehicle.length}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Max Weight</h3>
                <p className="modal__text">{vehicle.weight}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Last Service</h3>
                <p className="modal__text">{String(vehicle.lastService)}</p>
              </div>

              <div className="modal__container__body__vehicleDetails__box__details__textBox">
                <h3 className="modal__subhead">Next Service</h3>
                <p className="modal__text">{String(vehicle.nextService)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalVehicleDetails;
