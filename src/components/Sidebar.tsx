import React, { useState } from "react";
import LogoDefault from "../assets/logoDefault.png";
import {
  FaCaretRight,
  FaHome,
  FaMap,
  FaSearch,
  FaCubes,
  FaIdCard,
  FaTruck,
  FaFile,
  FaRoute,
  FaFileInvoice,
  FaBox,
} from "react-icons/fa";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  let nav = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleNavigation = (path: string) => {
    nav(path);
  };

  return (
    <header
      className={sidebar === true ? "sidebar" : "sidebar sidebar__collapse"}
    >
      <div className="sidebar__box">
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
      </div>

      <div className="sidebar__close" onClick={() => showSidebar()}>
        <FaCaretRight className="sidebar__close__icon" />
      </div>

      <div className="sidebar__menuBar">
        <ul className="sidebar__menuBar__menu">
          <li
            className="sidebar__menuBar__menu__link"
            onClick={() => handleNavigation("/dashboard")}
          >
            <FaHome className="sidebar__menuBar__menu__link__icon" />
            <p>Dashboard</p>
          </li>
          <li className="sidebar__menuBar__menu__link">
            <FaRoute className="sidebar__menuBar__menu__link__icon" />
            <p>Routes</p>
          </li>
          <li
            className="sidebar__menuBar__menu__link"
            onClick={() => handleNavigation("/dashboard/orders")}
          >
            <FaCubes className="sidebar__menuBar__menu__link__icon" />
            <p>Orders</p>
          </li>
          <li className="sidebar__menuBar__menu__link">
            <FaBox className="sidebar__menuBar__menu__link__icon" />
            <p>Packages</p>
          </li>
          <li
            className="sidebar__menuBar__menu__link"
            onClick={() => handleNavigation("/dashboard/drivers")}
          >
            <FaIdCard className="sidebar__menuBar__menu__link__icon" />
            <p>Drivers</p>
          </li>
          <li
            className="sidebar__menuBar__menu__link"
            onClick={() => handleNavigation("/dashboard/vehicles")}
          >
            <FaTruck className="sidebar__menuBar__menu__link__icon" />
            <p>Vehicle</p>
          </li>

          <li className="sidebar__menuBar__menu__link">
            <FaFileInvoice className="sidebar__menuBar__menu__link__icon" />
            <p>Invoices</p>
          </li>

          <li className="sidebar__menuBar__menu__link">
            <FaFile className="sidebar__menuBar__menu__link__icon" />
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
            className="sidebar__menuBar__menu__link__icon"
          />
          <p>Logout</p>
        </li>
      </div>
    </header>
  );
};

export default Sidebar;
