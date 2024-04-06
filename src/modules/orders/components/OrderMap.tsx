import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCirclePlay,
  faCircleStop,
  faClock,
  faIdCard,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import ProgressSteps from "./ui/ProgressSteps";
import OrderInformation from "./information/OrderInformation";
import DriverInformation from "./information/DriverInformation";
import VehicleInformation from "./information/VehicleInformation";
import InvoicesInformation from "./information/InvoicesInformation";
import SidebarMobile from "../../../components/SidebarMobile";
import ModalAddOrders from "./forms/ModalAddOrders";
import ModalOrderDetails from "./forms/ModalOrderDetails";
import ModalEditOrder from "./forms/ModalEditOrder";
import OptionsOrders from "./ui/OptionsOrders";
import OptionsOrderDetails from "./ui/OptionsOrderDetails";

const OrderMap = () => {
  const [activeButton, setActiveButton] = useState("order");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
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

  function openMenu(): void {
    const sidebar = document.querySelector(
      ".sidebar__mobile__overlay"
    ) as HTMLElement;
    sidebar.style.display = "flex";
  }

  return (
    <section className="order">
      <Sidebar />
      <SidebarMobile />

      <div className="order__container">
        <div className="order__container__header">
          <div className="order__container__header__left">
            <FontAwesomeIcon icon={faBars} onClick={() => openMenu()} />
            <h1 className="heading-primary">Orders</h1>
          </div>

          <OptionsOrders
              index={3}
              onToggle={handleDropdownToggle}
              onAdd={handleOpenModalAddOrder}
              onImport={() => console.log("Import Orders")}
              onExport={() => console.log("Export Orders")}
            />
        </div>

        <div className="order__container__maps">
          <div className="order__card">
            <div className="order__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>

            <div className="order__card__body">
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="order__card__body__infoItem__icon green"
                />
                <span>New York</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="order__card__body__infoItem__icon red"
                />
                <span>Los Angeles</span>
              </div>
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="order__card__body__infoItem__icon orange"
                />
                <span>2,800 km</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="order__card__body__infoItem__icon purple"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="order__card__status">
              <button className="button__status intransit">In Transit</button>
            </div>
          </div>
          <div className="order__card">
            <div className="order__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="order__card__body">
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="order__card__body__infoItem__icon green"
                />
                <span>New York</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="order__card__body__infoItem__icon red"
                />
                <span>Los Angeles</span>
              </div>
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="order__card__body__infoItem__icon orange"
                />
                <span>2,800 km</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="order__card__body__infoItem__icon purple"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="order__card__status">
              <button className="button__status cancelled">Cancelled</button>
            </div>
          </div>
          <div className="order__card">
            <div className="order__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="order__card__body">
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="order__card__body__infoItem__icon green"
                />
                <span>New York</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="order__card__body__infoItem__icon red"
                />
                <span>Los Angeles</span>
              </div>
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="order__card__body__infoItem__icon orange"
                />
                <span>2,800 km</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="order__card__body__infoItem__icon purple"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="order__card__status">
              <button className="button__status done">Done</button>
            </div>
          </div>
          <div className="order__card active">
            <div className="order__card__header">
              <h2>Order Id </h2>
              <span># AVS332A5A52</span>
            </div>
            <div className="order__card__body">
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="order__card__body__infoItem__icon green"
                />
                <span>New York</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faCircleStop}
                  className="order__card__body__infoItem__icon red"
                />
                <span>Los Angeles</span>
              </div>
              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faRoad}
                  className="order__card__body__infoItem__icon orange"
                />
                <span>2,800 km</span>
              </div>

              <div className="order__card__body__infoItem">
                <FontAwesomeIcon
                  icon={faClock}
                  className="order__card__body__infoItem__icon purple"
                />
                <span>2 days</span>
              </div>
            </div>

            <div className="order__card__status">
              <button className="button__status ongoing">On Going</button>
            </div>
          </div>
        </div>
      </div>

      <div className="order__map">
        <div className="order__map__header">
          <div className="order__map__header__info">
            <h3>
              Order Id : <span>#AAEWGGGAWAEKW</span>
            </h3>
            <OptionsOrderDetails
              index={3}
              onToggle={handleDropdownToggle}
              onDelete={handleOpenOrdersDetails}
              onEdit={handleOpenModalEdit}
              onPrint={handlePrintOrder}
            />
          </div>

          <div className="order__map__header__progress">
            <ProgressSteps />
          </div>
        </div>

        <div className="order__map__body">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.157346343137!2d-74.0059740857363!3d40.71277683932555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f3e4f8d33%3A0x8a5f6f0f7f3e1f4a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sco!4v1623346407229!5m2!1sen!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="order__map__details">
          <div className="order__map__details__actions">
            <button
              className={`button__details ${
                activeButton === "order" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("order")}
            >
              Order Info
            </button>
            <button
              className={`button__details ${
                activeButton === "driver" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("driver")}
            >
              Driver
            </button>
            <button
              className={`button__details ${
                activeButton === "vehicle" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("vehicle")}
            >
              Vehicle
            </button>
            <button
              className={`button__details ${
                activeButton === "invoices" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("invoices")}
            >
              Invoices
            </button>
          </div>
          {activeButton === "order" && <OrderInformation />}
          {activeButton === "driver" && <DriverInformation />}
          {activeButton === "vehicle" && <VehicleInformation />}
          {activeButton === "invoices" && <InvoicesInformation />}
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
        <ModalEditOrder handleOpenModal={() => handleOpenModalEdit()} />
      )}
    </section>
  );
};

export default OrderMap;
