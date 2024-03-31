import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { FaEllipsisV, FaPlus, FaSearch } from "react-icons/fa";
import OptionsDropDownRow from "../../../components/order/OptionsDropDownRow";
import Pagination from "../../../components/Pagination";
import ModalAddOrders from "./ModalAddOrders";
import ModalOrderDetails from "./ModalOrderDetails";
import ModalEditOrder from "./ModalEditOrder";

const Orders = () => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenModalAddOrder = () => {
    setOpenModal(!openModal);
  };

  const handleOpenOrdersDetails = () => {
    setOpenOrderDetails(!openOrderDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handlePrintOrder = () => {
    console.log("Print Order");
  };

  return (
    <section className="orders">
      <Sidebar />
      <div className="orders__container">
        <div className="orders__header">
          <h1 className="heading-primary">Orders</h1>
          <div
            onClick={() => handleOpenModalAddOrder()}
            className="button__box__second"
          >
            <FaPlus />
            <button>New Order</button>
          </div>
        </div>

        <div className="orders__filters">
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

        <div className="orders__table">
          <table>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Customer</th>
                <th>Origin Address</th>
                <th>Destination Address</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__pending">Pending</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__refused">Refused</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
                    onEdit={handleOpenModalEdit}
                    onPrint={handlePrintOrder}
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__pending">Pending</span>
                </td>
                <td>
                  <OptionsDropDownRow
                    index={3}
                    onToggle={handleDropdownToggle}
                    onDetails={handleOpenOrdersDetails}
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
      {openOrderDetails && (
        <ModalOrderDetails handleOpenModal={() => handleOpenOrdersDetails()} />
      )}

      {openModalEdit && (
        <ModalEditOrder handleOpenModal={()=>handleOpenModalEdit()} />
      )}


    </section>
  );
};

export default Orders;
