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
import React, { useContext, useEffect, useState } from "react";
import VehicleService from "../../service/VehicleService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import { FuelType } from "../../models/FuelType";
import roData from "../../../../resources/ro.json";
import CityData from "../../../core/models/CityData";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaGlobe } from "react-icons/fa";
import VehicleCreateRequest from "../../dto/VehicleCreateRequest";

interface ModalAddVehicleProps {
  handleOpenModalAddVehicle: () => void;
}

const ModalAddVehicle: React.FC<ModalAddVehicleProps> = ({
  handleOpenModalAddVehicle,
}) => {
  let [make, setMake] = useState<string>();
  let [model, setModel] = useState<string>();
  let [year, setYear] = useState<number>();
  let [fuelType, setFuelType] = useState<FuelType>();
  let [fuelConsumption, setFuelConsumption] = useState<number>();
  let [fuelCapacity, setFuelCapacity] = useState<number>();
  let [lastService, setLastService] = useState<Date>();
  let [nextService, setNextService] = useState<Date>();
  let [km, setKm] = useState<number>(0);
  let [registrationNumber, setRegistrationNumber] = useState<string>();
  let [capacity, setCapacity] = useState<number>();
  let [height, setHeight] = useState<number>();
  let [width, setWidth] = useState<number>();
  let [length, setLength] = useState<number>();
  let [weight, setWeight] = useState<number>();
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<string[]>([]);
  const [cities, setCities] = useState<{ [key: string]: string[] }>({});
  let { user } = useContext(LoginContext) as LoginContextType;
  useEffect(() => {
    const countrySet = new Set<string>();
    const cityMap: { [key: string]: string[] } = {};

    roData.forEach((item: CityData) => {
      countrySet.add(item.country);
      if (!cityMap[item.country]) {
        cityMap[item.country] = [];
      }
      cityMap[item.country].push(item.city);
    });

    setCurrentLocation(Array.from(countrySet));
    setCities(cityMap);
  }, []);
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
      currentLocation: city,
      companyRegistrationNumber: user.companyRegistrationNumber,
    } as VehicleCreateRequest;

    try {
      await vehicleService.createVehicle(data);
      toast.success("The car has been added to the system.");
    } catch (err) {
      toast.error("An error occurred while adding the car to the system.");
    }
    window.location.reload();
    handleOpenModalAddVehicle();
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    setCity("");
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
                <label htmlFor="">Country</label>
                <div className="inputBox">
                  <FaGlobe className="inputBox__icon" />
                  <select
                    id="country"
                    value={country}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select a country</option>
                    {currentLocation.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="modal__container__body__content__input">
                <label htmlFor="">City</label>
                <div className="inputBox">
                  <FaGlobe className="inputBox__icon" />
                  <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled={!country}
                  >
                    <option value="">Select a city</option>
                    {country &&
                      cities[country]?.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
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
                    onChange={(e) => setFuelType(e.target.value as FuelType)}
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
                <label htmlFor="">Max Weight</label>
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
