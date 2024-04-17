import React, { useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import {  FaPlus, FaSearch } from "react-icons/fa";
import Pagination from "../../core/components/Pagination";

import OptionsDropDownDrivers from "../../../components/driver/OptionsDropDownDrivers";
import ModalDriversDetails from "../../../components/driver/ModalDriversDetails";
import ModalEditDriver from "../../../components/driver/ModalEditDriver";
import ModalAddDriver from "../../../components/driver/ModalAddDriver";

const Drivers = () => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [openDriverDetails, setOpenDriverDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenModalAddDriver = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDriverDetails = () => {
    setOpenDriverDetails(!openDriverDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
 
  const handleDeleteDriver = () => {
    console.log("Delete Driver");
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
                    onDelete={handleDeleteDriver}

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
                    onDelete={handleDeleteDriver}

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
                    onDelete={handleDeleteDriver}

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
                    onDelete={handleDeleteDriver}

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
                    onDelete={handleDeleteDriver}

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
                    onDelete={handleDeleteDriver}

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
                    onDelete={handleDeleteDriver}

                  />
                </td>
              </tr>

           
           
            </tbody>
          </table>
          {/* <Pagination /> */}
        </div>
      {openModal && (
        <ModalAddDriver
          handleOpenModalAddDriver={() => handleOpenModalAddDriver()}
        />
      )}
      {openDriverDetails && (
        <ModalDriversDetails handleOpenModal={() => handleOpenDriverDetails()} />
      )}

      {openModalEdit && (
        <ModalEditDriver handleOpenModal={()=>handleOpenModalEdit()} />
      )}


    </section>
  );
};

export default Drivers;
