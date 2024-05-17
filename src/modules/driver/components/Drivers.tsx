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

const Drivers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const driverService = new DriverService();
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 8;
  const indexOfLastDrivers = currentPage * driversPerPage;
  const indexOfFirstDrivers = indexOfLastDrivers - driversPerPage;
  const currentDrivers = drivers.slice(indexOfFirstDrivers, indexOfLastDrivers);

  let {user} =useContext(LoginContext) as LoginContextType;
  const fetchDrivers = async () => {
    try {
      let drivers = await driverService.getAllDriversByCompany(user.companyRegistrationNumber);
      setDrivers(drivers);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
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
            {currentDrivers.map((driver,key) => (
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
