import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEllipsisV, FaPlus, FaSearch } from "react-icons/fa";
import OptionsDropDownRow from "../components/order/OptionsDropDownRow";
import Pagination from "../components/Pagination";
import ModalAddOrders from "../components/order/ModalAddOrders";
import ModalOrderDetails from "../components/order/ModalOrderDetails";
import ModalEditOrder from "../components/order/ModalEditOrder";
import OptionsDropDownDrivers from "../components/driver/OptionsDropDownDrivers";
import ModalDriversDetails from "../components/driver/ModalDriversDetails";

const Drivers = () => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [openDriverDetails, setOpenDriverDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenModalAddOrder = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDriverDetails = () => {
    setOpenDriverDetails(!openDriverDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handlePrintOrder = () => {
    console.log("Print Order");
  };

  return (
    <section className="drivers">
      <Sidebar />
      <div className="drivers__container">
        <div className="drivers__header">
          <h1 className="heading-primary">Drivers</h1>
          <div
            onClick={() => handleOpenModalAddOrder()}
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
            <label htmlFor="">Country</label>
            <select name="" id="">
              <option value="all">All</option>
              <option value="romanian">Romanian</option>
              <option value="germany">Germany</option>
            </select>
          </div>

          <div className="filtersBox">
            <label htmlFor="">Status</label>
            <select name="" id="">
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
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
                <th>Driver No.</th>
                <th>Driver</th>
                <th>Email</th>
                <th>License Number</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
             
            
            
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}

                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}

                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}

                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__inActive">Inactive</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}

                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}

                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Flore Denis</td>
                <td>floredenis907@yahoo.com</td>
                <td>994127721522</td>
                <td>0756789012</td>
                <td className="td__status ">
                  <span className="td__status__active">Active</span>
                </td>
                <td>
                  <OptionsDropDownDrivers
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenDriverDetails}

                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>

           
           
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
      {openModal && (
        <ModalAddOrders
          handleOpenModalAddOrder={() => handleOpenModalAddOrder()}
        />
      )}
      {openDriverDetails && (
        <ModalDriversDetails handleOpenModal={() => handleOpenDriverDetails()} />
      )}

      {openModalEdit && (
        <ModalEditOrder handleOpenModal={()=>handleOpenModalEdit()} />
      )}


    </section>
  );
};

export default Drivers;