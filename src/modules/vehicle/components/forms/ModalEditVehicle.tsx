import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Vehicle from "../../models/Vehicle";
import VehicleService from "../../service/VehicleService";
interface ModalVehicleProps {
  handleOpenModal: () => void;
  vehicle: Vehicle;
}
const ModalEditVehicle: React.FC<ModalVehicleProps> = ({ handleOpenModal , vehicle }) => {
  let [make, setMake] = useState<string>(vehicle.make);
  let [model, setModel] = useState<string>(vehicle.model);
  let [year, setYear] = useState<number>(vehicle.year);
  let [fuelType, setFuelType] = useState<string>(vehicle.fuelType);
  let [fuelConsumption, setFuelConsumption] = useState<number>(vehicle.fuelConsumption);
  let [lastService, setLastService] = useState<Date>(vehicle.lastService);
  let [nextService, setNextService] = useState<Date>(vehicle.nextService);
  let [km, setKm] = useState<number>(vehicle.km);
  let [registrationNumber, setRegistrationNumber] = useState<string>(vehicle.registrationNumber);
  let [capacity, setCapacity] = useState<number>(vehicle.capacity);

  const vehicleService = new VehicleService();


  const updateVehicle = async () => {
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
      await vehicleService.updateVehicle(data);
    } catch (err) {
      console.log((err as Error).message);
    }

    handleOpenModal();

  };

  
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container__header">
          <div className="modal__container__header__title">
            <span>Edit Vehicle</span>
          </div>

          <button className="button__close" onClick={() => handleOpenModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modal__container__body">
          <div className="modal__container__body__content">
            <h2>Vehicle Information </h2>
            <div className="modal__container__body__content__main">
              <div className="modal__container__body__content__input">
                <label htmlFor="">Make</label>
                <input
                  type="text"
                  placeholder="Enter the make"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Model</label>
                <input
                  type="text"
                  placeholder="Enter the model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Year</label>
                <input
                  type="text"
                  placeholder="Enter the year"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Type</label>
                <input
                  type="text"
                  placeholder="Enter the fuel type"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Consumption</label>
                <input
                  type="text"
                  placeholder="Enter the fuel consumption"
                  value={fuelConsumption}
                  onChange={(e) => setFuelConsumption(parseInt(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Last Service</label>
                <input
                  type="date"
                  placeholder="Enter the last service"
                  value={lastService.toString()}
                  onChange={(e) => setLastService(new Date(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Next Service</label>
                <input
                  type="date"
                  placeholder="Enter the next service"
                  value={nextService.toString()}
                  onChange={(e) => setNextService(new Date(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Kilometers</label>
                <input
                  type="text"
                  placeholder="Enter the kilometers"
                  value={km}
                  onChange={(e) => setKm(parseInt(e.target.value))}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Registration Number</label>
                <input
                  type="text"
                  placeholder="Enter the registration number"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                />
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Capacity(cm3)</label>
                <input
                  type="text"
                  placeholder="Enter the capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="modal__container__footer">
          <button
            className="button__modal   button__modal__cancel"
            onClick={() => handleOpenModal()}
          >
            Cancel
          </button>
          <button className="button__modal  button__modal__save" onClick={updateVehicle}>Update</button>
        </div>
      </div>
    </section>
  );
};

export default ModalEditVehicle;
