import React, { useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import Pagination from "../../core/components/Pagination";
import Vehicle from "../models/Vehicle";
import VehicleService from "../service/VehicleService";
import VehicleRow from "./ui/VehicleRow";
import ModalAddVehicle from "./forms/ModalAddVehicle";

const VehicleMap = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 8;

  let [myVehicles, setMyVehicles] = useState<Vehicle[]>([]);

  const vehicleService = new VehicleService();

  const fetchVehicles = async () => {
    try {
      let vehicles = await vehicleService.allVehicles();
      setMyVehicles(vehicles);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleOpenModalAddVehicle = () => {
    setOpenModal(!openModal);
  };

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = myVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="drivers">
      <Sidebar />
      <div className="drivers__header">
        <h1 className="heading-primary">Vehicles</h1>
        <div
          onClick={() => handleOpenModalAddVehicle()}
          className="button__box__second"
        >
          <FaPlus />
          <button>New Vehicle </button>
        </div>
      </div>

      <div className="drivers__filters">
        <div className="searchBox">
          <label htmlFor="">What are you looking for ?</label>

          <div className="searchBox__input">
            <FaSearch className="searchBox__icon" />
            <input type="search" placeholder="Search..." />
          </div>
        </div>

        <div className="filtersBox">
          <label>Sort : </label>
          <select name="" id="">
            <option value="default">Default</option>
            <option value="romanian">Ascending</option>
            <option value="germany">Descending</option>
          </select>
        </div>

        <div className="filtersBox">
          <label>Status</label>
          <select name="" id="">
            <option value="all">All</option>
            <option value="pending">Active</option>
            <option value="completed">Inactive</option>
          </select>
        </div>

        <button className="button__search">
          <FaSearch className="button__search__icon" />
        </button>
      </div>

      <div className="vehicle__table">
        <table>
          <thead>
            <tr>
              <th>Vehicle No.</th>
              <th>Registration Number</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Kilometers</th>
              <th>Fuel Type</th>
              <th>Fuel Consumtion</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentVehicles.map((vehicle, index) => (
              <VehicleRow vehicle={vehicle} key={index} />
            ))}
          </tbody>
        </table>
        <Pagination
          totalPages={Math.ceil(myVehicles.length / vehiclesPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {openModal && (
        <ModalAddVehicle
          handleOpenModalAddVehicle={handleOpenModalAddVehicle}
        />
      )}
    </section>
  );
};

export default VehicleMap;