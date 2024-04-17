import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import VehicleService from "../../service/VehicleService";
import Vehicle from "../../models/Vehicle";

interface ModalAddVehicleProps {
  handleOpenModalAddVehicle: () => void;
}

const ModalAddVehicle: React.FC<ModalAddVehicleProps> = ({
  handleOpenModalAddVehicle,
}) => {
  let [make, setMake] = useState<string>("");
  let [model, setModel] = useState<string>("");
  let [year, setYear] = useState<number>(0);
  let [fuelType, setFuelType] = useState<string>("");
  let [fuelConsumption, setFuelConsumption] = useState<number>(0);
  let [lastService, setLastService] = useState<Date>(new Date());
  let [nextService, setNextService] = useState<Date>(new Date());
  let [km, setKm] = useState<number>(0);
  let [registrationNumber, setRegistrationNumber] = useState<string>("");
  let [capacity, setCapacity] = useState<number>(0);

  const vehicleService = new VehicleService();

  const handleCreateVehicle = async () => {
    let data = {
      make,
      model,
      year,
      fuelType,
      fuelConsumption,
      lastService,
      nextService,
      km,
      registrationNumber,
      capacity,
    } as Vehicle;

    try {
      await vehicleService.createVehicle(data);
    } catch (err) {
      console.log((err as Error).message);
    }

    handleOpenModalAddVehicle();
  };

  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>New Vehicle</span>
          </div>

          <button
            className="button__close"
            onClick={() => handleOpenModalAddVehicle()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Vehicle information</h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Make</label>
                <input
                  type="text"
                  placeholder="Enter the make"
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Model</label>
                <input
                  type="text"
                  placeholder="Enter the model"
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Year</label>
                <input
                  type="text"
                  placeholder="Enter the year"
                  onChange={(e) => setYear(parseInt(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Type</label>
                <input
                  type="text"
                  placeholder="Enter the fuel type"
                  onChange={(e) => setFuelType(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Consumption</label>
                <input
                  type="text"
                  placeholder="Enter the fuel consumption"
                  onChange={(e) => setFuelConsumption(parseInt(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Last Service</label>
                <input
                  type="date"
                  placeholder="Enter the last service"
                  onChange={(e) => setLastService(new Date(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Next Service</label>
                <input
                  type="date"
                  placeholder="Enter the next service"
                  onChange={(e) => setNextService(new Date(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Kilometers</label>
                <input
                  type="text"
                  placeholder="Enter the kilometers"
                  onChange={(e) => setKm(parseInt(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Registration Number</label>
                <input
                  type="text"
                  placeholder="Enter the registration number"
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Capacity(cm3)</label>
                <input
                  type="text"
                  placeholder="Enter the capacity"
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModalAddVehicle()}
          >
            Cancel
          </button>
          <button
            className="button__modal  button__modal__save"
            onClick={handleCreateVehicle}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModalAddVehicle;
