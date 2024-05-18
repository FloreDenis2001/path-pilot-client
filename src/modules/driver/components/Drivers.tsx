import { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import ModalAddDriver from "./froms/ModalAddDriver";
import Driver from "../models/Driver";
import DriverService from "../service/DriverService";
import DriverRow from "./ui/DriverRow";
import Pagination from "../../core/components/Pagination";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDrivers,
  selectRetrieveDriversState,
} from "../../../store/drivers/drivers.selectors";
import {
  loadDrivers,
  retrieveDriversError,
  retrieveDriversLoading,
  retrieveDriversSuccess,
} from "../../../store/drivers/drivers.reducers";
import { LoadingState } from "../../../actionType/LoadingState";
import LoaderSpin from "../../core/components/states/LoaderSpin";

const Drivers = () => {
  const drivers = useSelector(selectDrivers);
  const retriveState = useSelector(selectRetrieveDriversState);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const driverService = new DriverService();
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 8;
  const indexOfLastDrivers = currentPage * driversPerPage;
  const indexOfFirstDrivers = indexOfLastDrivers - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDrivers, indexOfLastDrivers);

  let { user } = useContext(LoginContext) as LoginContextType;
  const fetchDrivers = async () => {
    dispatch(retrieveDriversLoading());
    await new Promise((resolve) => setTimeout(resolve, 400));
    try {
      let drivers = await driverService.getAllDriversByCompany(
        user.companyRegistrationNumber
      );
      dispatch(retrieveDriversSuccess());
      dispatch(loadDrivers(drivers));
    } catch (err) {
      dispatch(retrieveDriversError());
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    if (!(retriveState === LoadingState.SUCCES))
    fetchDrivers();
  }, []);

  const handleOpenModalAddDriver = () => {
    setOpenModal(!openModal);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="drivers">
      <Sidebar />
      <div className="drivers__header">
        <h1 className="heading-primary">Drivers</h1>
        <div
          onClick={() => handleOpenModalAddDriver()}
          className="button__box__second"
        >
          <FaPlus />
          <button>New Driver </button>
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
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>

        <div className="filtersBox">
          <label>Status</label>
          <select name="" id="">
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button className="button__search">
          <FaSearch className="button__search__icon" />
        </button>
      </div>
      <div className="drivers__table">
        {retriveState === LoadingState.LOADING && <LoaderSpin />}

        {retriveState === LoadingState.ERROR && (
          <div className="error__message">
            <h1>Something went wrong</h1>
            <p>Unable to retrieve drivers</p>
          </div>
        )}

        {retriveState === LoadingState.SUCCES && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>License Number</th>
                  <th>Phone</th>
                  <th>Salary</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentDrivers.map((driver, key) => (
                  <DriverRow key={key} driver={driver} />
                ))}
              </tbody>
            </table>

            {drivers.length && (
              <Pagination
                totalPages={Math.ceil(drivers.length / driversPerPage)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>

      {openModal && (
        <ModalAddDriver
          handleOpenModalAddDriver={() => handleOpenModalAddDriver()}
        />
      )}
    </section>
  );
};

export default Drivers;
