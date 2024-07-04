import { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import DriverService from "../service/DriverService";
import DriverRow from "./ui/DriverRow";
import Pagination from "../../core/components/Pagination";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";
import { toast } from "react-toastify";
import ModalAddDriver from "./froms/ModalAddDriver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Driver from "../models/Driver";
import LoaderSpin from "../../core/components/LoaderSpin";

const Drivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const driverService = new DriverService();
  let { user } = useContext(LoginContext) as LoginContextType;

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const fetchedDrivers = await driverService.getAllDriversByCompany(
          user.companyRegistrationNumber
        );
        console.log(fetchedDrivers);
        setDrivers(fetchedDrivers);
      } catch (err) {
        toast.error("Unable to retrieve drivers");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchDrivers();
  }, [user]);

  useEffect(() => {
    filterAndSortDrivers();
  }, [searchTerm, sortOrder, statusFilter]);

  const filterAndSortDrivers = () => {
    let filteredDrivers = drivers;

    if (searchTerm) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        driver.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filteredDrivers = filteredDrivers.filter(
        (driver) => driver.isAvailable === (statusFilter === "Active")
      );
    }

    if (sortOrder === "Ascending") {
      filteredDrivers = [...filteredDrivers].sort(
        (a, b) =>
          a.firstName.localeCompare(b.firstName) ||
          a.lastName.localeCompare(b.lastName)
      );
    } else if (sortOrder === "Descending") {
      filteredDrivers = [...filteredDrivers].sort(
        (a, b) =>
          b.firstName.localeCompare(a.firstName) ||
          b.lastName.localeCompare(a.lastName)
      );
    }

    return filteredDrivers;
  };

  const refreshFilters = () => {
    window.location.reload();
    toast.info("Filters reset");
  };

  const filteredDrivers = filterAndSortDrivers();
  const indexOfLastDrivers = currentPage * driversPerPage;
  const indexOfFirstDrivers = indexOfLastDrivers - driversPerPage;
  const currentDrivers = filteredDrivers.slice(
    indexOfFirstDrivers,
    indexOfLastDrivers
  );

  return (
    <section className="drivers">
      <Sidebar />
      <div className="drivers__header">
        <h1 className="heading-primary">Drivers</h1>
        <div
          onClick={() => setOpenModal(!openModal)}
          className="button__box__second"
        >
          <FaPlus />
          <button>New Driver</button>
        </div>
      </div>

      <div className="drivers__filters">
        <div className="searchBox">
          <label htmlFor="">What are you looking for ?</label>
          <div className="searchBox__input">
            <FaSearch className="searchBox__icon" />
            <input
              type="search"
              placeholder="Search by username ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="filtersBox">
          <label>Sort by name</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>

        <div className="filtersBox">
          <label>Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button onClick={refreshFilters} className="button__search">
          <FontAwesomeIcon
            icon={faArrowsRotate}
            className="button__search__icon"
          />
        </button>
      </div>

      <div className="drivers__table">
        {loading ? (
          <LoaderSpin />
        ) : filteredDrivers.length > 0 ? (
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

            <Pagination
              totalPages={Math.ceil(filteredDrivers.length / driversPerPage)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <h1 className="heading-primary">
            No drivers found with these filters...
          </h1>
        )}
      </div>

      {openModal && (
        <ModalAddDriver
          handleOpenModalAddDriver={() => setOpenModal(!openModal)}
        />
      )}
    </section>
  );
};

export default Drivers;
