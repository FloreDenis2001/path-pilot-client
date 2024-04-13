import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCirclePlay,
  faCircleStop,
  faClock,
  faIdCard,
  faMoneyBill,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import SidebarMobile from "../../core/components/SidebarMobile";
import OptionsOrders from "./ui/OptionsPackage";
import OptionsOrderDetails from "../../orders/components/ui/OptionsOrderDetails";
import ProgressSteps from "../../orders/components/ui/ProgressSteps";
import OrderInformation from "../../orders/components/information/OrderInformation";
import DriverInformation from "../../orders/components/information/DriverInformation";
import VehicleInformation from "../../orders/components/information/VehicleInformation";
import InvoicesInformation from "../../orders/components/information/InvoicesInformation";
import ModalAddOrders from "./forms/ModalAddPackage";
import ModalEditOrder from "./forms/ModalEditOrder";
import ModalOrderDetails from "./forms/ModalOrderDetails";
import OptionsPackage from "./ui/OptionsPackage";
import ModalAddPackage from "./forms/ModalAddPackage";
import Package from "../model/Package";
import PackageService from "../service/PackageService";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";
import PackageCard from "./ui/PackageCard";

const PackageMap = () => {
  const [activeButton, setActiveButton] = useState("order");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  let [myPackages, setMyPackages] = useState(Array<Package>);

  
  let userLogin = useContext(LoginContext) as LoginContextType;


  let packService = new PackageService();

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

  let allPackages = async (): Promise<void> => {
    try {
      let packs = await packService.allPackages(userLogin.user.id as number);
      console.log(packs);
      setMyPackages(packs);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    allPackages();
  }, []);

  return (
    <section className="order">
      <Sidebar />
      <SidebarMobile />

      <div className="order__container">
        <div className="order__container__header">
          <div className="order__container__header__left">
            <FontAwesomeIcon icon={faBars} onClick={() => openMenu()} />
            <h1 className="heading-primary" onClick={()=>allPackages()}>Packages</h1>
          </div>

          <OptionsPackage
            index={3}
            onToggle={handleDropdownToggle}
            onAdd={handleOpenModalAddOrder}
            onImport={() => console.log("Import Orders")}
            onExport={() => console.log("Export Orders")}
          />
        </div>

        <div className="order__container__maps">
          {myPackages.map((pack, index) => {
            return <PackageCard key={index} pack={pack} />;
          })}
        </div>
      </div>

      <div className="order__map">
        <div className="order__map__header">
          <div className="order__map__header__info">
            <h3>
              Package Id : <span>#AAEWGGGAWAEKW</span>
            </h3>
            <OptionsOrderDetails
              index={3}
              onToggle={handleDropdownToggle}
              onDelete={handleOpenOrdersDetails}
              onEdit={handleOpenModalEdit}
              onPrint={handlePrintOrder}
            />
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
              Package Info
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
          {activeButton === "invoices" && <InvoicesInformation />}
        </div>
      </div>

      {openModal && (
        <ModalAddPackage
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

export default PackageMap;
