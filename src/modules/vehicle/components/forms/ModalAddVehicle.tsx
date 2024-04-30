import {
  faArrowDown91,
  faBuilding,
  faCalendar,
  faCalendarAlt,
  faCarAlt,
  faGasPump,
  faSignature,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import VehicleService from "../../service/VehicleService";
import Vehicle from "../../models/Vehicle";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import { FuelType } from "../../models/FuelType";

interface ModalAddVehicleProps {
  handleOpenModalAddVehicle: () => void;
}

const ModalAddVehicle: React.FC<ModalAddVehicleProps> = ({
  handleOpenModalAddVehicle,
}) => {
  let [make, setMake] = useState<string>("");
  let [model, setModel] = useState<string>("");
  let [year, setYear] = useState<number>(0);
  let [fuelType, setFuelType] = useState<FuelType>(FuelType.DIESEL);
  let [fuelConsumption, setFuelConsumption] = useState<number>(0);
  let [fuelCapacity, setFuelCapacity] = useState<number>(0);
  let [lastService, setLastService] = useState<Date>(new Date());
  let [nextService, setNextService] = useState<Date>(new Date());
  let [km, setKm] = useState<number>(0);
  let [registrationNumber, setRegistrationNumber] = useState<string>("");
  let [capacity, setCapacity] = useState<number>(0);
  let [height, setHeight] = useState<number>(0);
  let [width, setWidth] = useState<number>(0);
  let [length, setLength] = useState<number>(0);
  let [weight, setWeight] = useState<number>(0);

  let { user } = useContext(LoginContext) as LoginContextType;

  const vehicleService = new VehicleService();

  const handleCreateVehicle = async () => {
    let data = {
      make,
      model,
      year,
      fuelType,
      fuelConsumption,
      fuelCapacity,
      lastService,
      nextService,
      km,
      registrationNumber,
      capacity,
      height,
      width,
      length,
      weight,
      companyRegistrationNumber: user.companyRegistrationNumber,
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

                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
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
                    onChange={(e) =>
                      setFuelType(parseInt(e.target.value) as FuelType)
                    }
                  >
                    {Object.keys(FuelType)
                      .filter((key) => isNaN(Number(key)))
                      .map((key) => {
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
                    placeholder="Enter the fuel consumption"
                    onChange={(e) =>
                      setFuelConsumption(parseInt(e.target.value))
                    }
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Fuel Capacity</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the fuel capacity"
                    onChange={(e) => setFuelCapacity(parseInt(e.target.value))}
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
                    placeholder="Enter the kilometers"
                    onChange={(e) => setKm(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Registration Number</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faSignature}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the registration number"
                    onChange={(e) => setRegistrationNumber(e.target.value)}
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
                    onChange={(e) => setCapacity(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Height</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the height"
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Width</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the width"
                    onChange={(e) => setWidth(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Length</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the length"
                    onChange={(e) => setLength(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">Weight</label>
                <div className="inputBox">
                  <FontAwesomeIcon
                    icon={faArrowDown91}
                    className="inputBox__icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter the weight"
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                  />
                </div>
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
