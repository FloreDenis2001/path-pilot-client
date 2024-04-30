import {
  faArrowDown91,
  faBuilding,
  faCalendarAlt,
  faCarAlt,
  faGasPump,
  faSignature,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Vehicle from "../../models/Vehicle";
import VehicleService from "../../service/VehicleService";
import { FuelType } from "../../models/FuelType";
interface ModalVehicleProps {
  handleOpenModal: () => void;
  vehicle: Vehicle;
}
const ModalEditVehicle: React.FC<ModalVehicleProps> = ({
  handleOpenModal,
  vehicle,
}) => {
  let [make, setMake] = useState<string>(vehicle.make);

  let [model, setModel] = useState<string>(vehicle.model);
  let [year, setYear] = useState<number>(vehicle.year);
  let [fuelType, setFuelType] = useState<FuelType>(vehicle.fuelType);
  let [fuelConsumption, setFuelConsumption] = useState<number>(
    vehicle.fuelConsumption
  );
  let [lastService, setLastService] = useState<Date>(new Date(vehicle.lastService));
  let [nextService, setNextService] = useState<Date>(new Date(vehicle.nextService));
  let [km, setKm] = useState<number>(vehicle.km);
  let [capacity, setCapacity] = useState<number>(vehicle.capacity);

  const vehicleService = new VehicleService();

  useEffect(() => {
    console.log(vehicle);
  }
  , []);

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
      registrationNumber: vehicle.registrationNumber,
      capacity,
    } as Vehicle;

    console.log(data);
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

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={make}
                    placeholder="Enter the make"
                    onChange={(e) => setMake(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Model</label>
                <div className="inputBox">
                  <FontAwesomeIcon icon={faCarAlt} className="inputBox__icon" />
                  <input
                    type="text"
                    value={model}
                    placeholder="Enter the model"
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Year</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="inputBox__icon"
                  />

                  <input
                    type="text"
                    value={year}
                    placeholder="Enter the year"
                    onChange={(e) => setYear(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Type</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faGasPump}
                    className="inputBox__icon"
                  />
                   <select
                    name="fuelType"
                    id="fuelType"
                    value={fuelType}
                    onChange={(e) =>
                      setFuelType(parseInt(e.target.value) as FuelType)
                    }
                  >
                    {Object.keys(FuelType).map((key) => {
                      const fuelTypeValue =
                        FuelType[key as keyof typeof FuelType];
                      return (
                        <option key={fuelTypeValue} value={fuelTypeValue}>
                          {key}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Consumption</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={fuelConsumption}
                    placeholder="Enter the fuel consumption"
                    onChange={(e) =>
                      setFuelConsumption(parseInt(e.target.value))
                    }
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Last Service</label>

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="inputBox__icon"
                  />
                  <input
                    type="date"
                    value={lastService instanceof Date ? lastService.toISOString().split("T")[0]  : ''}

                    placeholder="Enter the last service"
                    onChange={(e) => setLastService(new Date(e.target.value))}
                  />

                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Next Service</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="inputBox__icon"
                  />
                  <input
                    type="date"
                    value={nextService instanceof Date ? nextService.toISOString().split("T")[0]  : ''}
                    placeholder="Enter the next service"
                    onChange={(e) => setNextService(new Date(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Kilometers</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    value={km}
                    placeholder="Enter the kilometers"
                    onChange={(e) => setKm(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Capacity(cm3)</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
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
            <button
              className="button__modal  button__modal__save"
              onClick={updateVehicle}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalEditVehicle;
