import React, { useState } from "react";
import OptionsOrderDetails from "./OptionsOrderDetails";
import ProgressSteps from "./ProgressSteps";
import DriverInformation from "../information/DriverInformation";
import VehicleInformation from "../information/VehicleInformation";
import Route from "../../model/Route";
import OrderInformation from "../information/OrderInformation";

interface RouteProps {
    route:Route;
  }

const RouteInfo: React.FC<RouteProps>  = ({route}) => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [activeButton, setActiveButton] = useState("order");


  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
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
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };


  return (
    <div className="order__map">
      <div className="order__map__header">
        <div className="order__map__header__info">
          <h3>
            Route Id : <span>{route.id}</span>
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
         
        </div>
        {activeButton === "order" && <OrderInformation orders={route.orders}/>}
        {activeButton === "driver" && <DriverInformation driver={route.driver} />}
        {activeButton === "vehicle" && <VehicleInformation vehicle={route.vehicle} />}
      </div>
    </div>
  );
};

export default RouteInfo;
