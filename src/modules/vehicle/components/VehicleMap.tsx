import { useCallback, useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FaPlus, FaSearch } from "react-icons/fa";
import Pagination from "../../core/components/Pagination";
import VehicleService from "../service/VehicleService";
import VehicleRow from "./ui/VehicleRow";
import ModalAddVehicle from "./forms/ModalAddVehicle";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";
import LoaderSpin from "../../core/components/LoaderSpin";
import Vehicle from "../models/Vehicle";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const VehicleMap = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [myVehicles, setMyVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const vehiclesPerPage = 8;
  const { user } = useContext(LoginContext) as LoginContextType;

  const applyFilters = useCallback(() => {
    let filtered = [...myVehicles];

    if (searchTerm) {
      filtered = filtered.filter((vehicle) =>
        vehicle.registrationNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (vehicle) => vehicle.active === (statusFilter === "active")
      );
    }

    if (sortOrder !== "default") {
      filtered.sort((a, b) => {
        if (sortOrder === "Ascending") {
          return a.registrationNumber.localeCompare(b.registrationNumber);
        } else {
          return b.registrationNumber.localeCompare(a.registrationNumber);
        }
      });
    }

    setFilteredVehicles(filtered);
  }, [searchTerm, sortOrder, statusFilter, myVehicles]); 

  useEffect(() => {
    const vehicleService = new VehicleService();

    const fetchVehicles = async () => {
      try {
        const vehicles = await vehicleService.allVehiclesByCompany(
          user.companyRegistrationNumber
        );
        setMyVehicles(vehicles);
        setFilteredVehicles(vehicles);
      } catch (err) {
        console.error(err);
      } finally {
        setTimeout(() => setLoading(false), 400);
      }
    };

    fetchVehicles();
 
  }, [user]); 

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const refreshFilters = () => {
    window.location.reload();
    toast.info("Filters reseted");
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenModalAddVehicle = () => {
    setOpenModal(!openModal);
  };

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = filteredVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  ) as Vehicle[];

  return (
    <section className="drivers">
      <Sidebar />
      <header className="drivers__header">
        <h1 className="heading-primary">Vehicles</h1>
        <button
          onClick={handleOpenModalAddVehicle}
          className="button__box__second"
        >
          <FaPlus />
          <span>New Vehicle</span>
        </button>
      </header>

      <div className="drivers__filters">
        <div className="searchBox">
          <label htmlFor="search">What are you looking for?</label>
          <div className="searchBox__input">
            <FaSearch className="searchBox__icon" />
            <input
              id="search"
              type="search"
              placeholder="Write the registration number ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="filtersBox">
          <label>Sort by registration number</label>
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button onClick={refreshFilters} className="button__search">
          <FontAwesomeIcon
            icon={faArrowsRotate}
            className="button__search__icon"
          />
        </button>
      </div>

      <div className="vehicle__table">
        {loading ? (
          <LoaderSpin />
        ) : currentVehicles.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Registration Number</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Kilometers</th>
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
              totalPages={Math.ceil(
                (filteredVehicles ?? []).length / vehiclesPerPage
              )}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <h1 className="heading-primary">
            No vehicles found with this filters ...
          </h1>
        )}
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
