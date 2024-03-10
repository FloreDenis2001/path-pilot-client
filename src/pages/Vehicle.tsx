import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEllipsisV, FaPlus, FaSearch } from "react-icons/fa";
import Pagination from "../components/Pagination";
import ModalAddOrders from "../components/order/ModalAddOrders";
import OptionsDropDownDrivers from "../components/driver/OptionsDropDownDrivers";
import ModalDriversDetails from "../components/driver/ModalDriversDetails";
import ModalEditDriver from "../components/driver/ModalEditDriver";
import OptionsDropDownVehicle from "../components/vehicle/OptionsDropDownVehicle";
import ModalAddVehicle from "../components/vehicle/ModalAddVehicle";
import ModalVehicleDetails from "../components/vehicle/ModalVehicleDetails";
import ModalEditVehicle from "../components/vehicle/ModalEditVehicle";

const Vehicle = () => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [openVehicleDetails, setOpenVehicleDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenModalAddVehicle = () => {
    setOpenModal(!openModal);
  };

  const handleOpenVehicleDetails = () => {
    setOpenVehicleDetails(!openVehicleDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handleDeleteVehicle = () => {
    console.log("Print Order");
  };

  return (
    <section className="drivers">
      <Sidebar />
      <div className="drivers__container">
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
                <th>Type</th>
                <th>Capacity(cm3)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__inActive">Inactive</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>994127721522</td>
                <td>Truck</td>
                <td>700</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenVehicleDetails}
                    onEdit={handleOpenModalEdit}
                    onDelete={handleDeleteVehicle}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
      {openModal && (
        <ModalAddVehicle
          handleOpenModalAddVehicle={() => handleOpenModalAddVehicle()}
        />
      )}
      {openVehicleDetails && (
        <ModalVehicleDetails
          handleOpenModal={() => handleOpenVehicleDetails()}
        />
      )}

      {openModalEdit && (
        <ModalEditVehicle handleOpenModal={() => handleOpenModalEdit()} />
      )}
    </section>
  );
};

export default Vehicle;
