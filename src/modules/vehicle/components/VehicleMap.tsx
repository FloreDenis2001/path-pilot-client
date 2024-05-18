import { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import Pagination from "../../core/components/Pagination";

import VehicleService from "../service/VehicleService";
import VehicleRow from "./ui/VehicleRow";
import ModalAddVehicle from "./forms/ModalAddVehicle";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRetrieveVehiclesState,
  selectVehicles,
  selectVehiclesState,
} from "../../../store/vehicles/vehicles.selectors";
import {
  loadVehicles,
  retriveVehiclesLoading,
  retriveVehiclesSuccess,
  retrieveVehiclesError,
} from "../../../store/vehicles/vehicles.reducers";
import { LoadingState } from "../../../actionType/LoadingState";
import LoadingTable from "../../core/components/states/LoaderSpin";
import LoaderSpin from "../../core/components/states/LoaderSpin";

const VehicleMap = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const myVehicles = useSelector(selectVehicles);
  const retriveState = useSelector(selectRetrieveVehiclesState);
  const dispatch = useDispatch();
  const vehiclesPerPage = 8;
  let { user } = useContext(LoginContext) as LoginContextType;
  const vehicleService = new VehicleService();

 
  const fetchVehicles = async () => {
    dispatch(retriveVehiclesLoading());
    await new Promise((resolve) => setTimeout(resolve, 400));
    try {
      let vehicles = await vehicleService.allVehiclesByCompany(
        user.companyRegistrationNumber
      );
      dispatch(retriveVehiclesSuccess());
      dispatch(loadVehicles(vehicles));
    } catch (err) {
      dispatch(retrieveVehiclesError());
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    if (!(retriveState === LoadingState.SUCCES)) {
      fetchVehicles();
     }   
  }, [retriveState]);

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
        <button
          onClick={() => handleOpenModalAddVehicle()}
          className="button__box__second"
        >
          <FaPlus />
          <span>New Vehicle </span>
        </button>
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
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>

        <div className="filtersBox">
          <label>Status</label>
          <select name="" id="">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button className="button__search">
          <FaSearch className="button__search__icon" />
        </button>
      </div>

      <div className="vehicle__table">
        {retriveState === LoadingState.SUCCES && (
          <>
            <table>
              <thead>
                <tr>
              
                  <th>Registration Number</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Kilometers</th>
                  <th>Fuel Type</th>
                  <th>Fuel Consumtion</th>
                  <th>Last Service</th>

                 
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
          </>
        )}

        {retriveState === LoadingState.LOADING &&
        
        <LoaderSpin />}



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
