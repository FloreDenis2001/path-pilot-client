import { faRightFromBracket, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoDefault from "../../../assets/logoDefault.png";

import React from "react";
import {
  FaBox,
  FaCubes,
  FaFile,
  FaFileInvoice,
  FaHome,
  FaIdCard,
  FaRoute,
  FaTruck,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const SidebarMobile = () => {
  let nav = useNavigate();
  const handleNavigation = (path: string) => {
    nav(path);
  };

  function closeSidebar(): void {
    const sidebar = document.querySelector(
      ".sidebar__mobile__overlay"
    ) as HTMLElement;
    sidebar.style.display = "none";
  }

  return (
    <header className="sidebar__mobile__overlay">
      <div className="sidebar__mobile">
        <div className="sidebar__header">
          <div className="sidebar__header__imageBox">
            <img
              src={LogoDefault}
              alt="Company Logo"
              className="sidebar__header__imageBox__image"
            />
          </div>

          <p className="sidebar__header__text"> PATHPILOT</p>
        </div>

        <div className="sidebar__close" onClick={() => closeSidebar()}>
          <FontAwesomeIcon icon={faXmark} className="sidebar__close__icon" />
        </div>

        <div className="sidebar__menuBar">
          <ul className="sidebar__menuBar__menu">
            <li
              className="sidebar__menuBar__menu__link"
              onClick={() => handleNavigation("/dashboard")}
            >
              <FaHome className="sidebar__menuBar__menu__link__icon blue" />
              <p>Dashboard</p>
            </li>
            <li
              className="sidebar__menuBar__menu__link"
              onClick={() => handleNavigation("/dashboard/orders")}
            >
              <FaCubes className="sidebar__menuBar__menu__link__icon yellow" />
              <p>Orders</p>
            </li>

            <li className="sidebar__menuBar__menu__link" onClick={() => handleNavigation("/dashboard/packages")}>
              <FaBox className="sidebar__menuBar__menu__link__icon brown " />
              <p>Packages</p>
            </li>
            <li
              className="sidebar__menuBar__menu__link"
              onClick={() => handleNavigation("/dashboard/drivers")}
            >
              <FaIdCard className="sidebar__menuBar__menu__link__icon green" />
              <p>Drivers</p>
            </li>
            <li
              className="sidebar__menuBar__menu__link"
              onClick={() => handleNavigation("/dashboard/vehicles")}
            >
              <FaTruck className="sidebar__menuBar__menu__link__icon orange" />
              <p>Vehicle</p>
            </li>

            <li className="sidebar__menuBar__menu__link" onClick={() => handleNavigation("/dashboard/invoices")}>
              <FaFileInvoice className="sidebar__menuBar__menu__link__icon purple" />
              <p>Invoices</p>
            </li>

            <li className="sidebar__menuBar__menu__link" onClick={() => handleNavigation("/dashboard/reports")}>
              <FaFile className="sidebar__menuBar__menu__link__icon red" />
              <p>Reports</p>
            </li>
          </ul>
        </div>

        <div className="sidebar__menuBar__bottomMenu">
          <li
            className="sidebar__menuBar__menu__link"
            onClick={() => handleNavigation("/")}
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="sidebar__menuBar__menu__link__icon blue"
            />
            <p>Logout</p>
          </li>
        </div>
      </div>
    </header>
  );
};

export default SidebarMobile;
