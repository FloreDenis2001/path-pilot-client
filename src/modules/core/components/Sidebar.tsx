import { useEffect, useState } from "react";
import LogoDefault from "../../../assets/logoDefault.png";
import {
  FaHome,
  FaCubes,
  FaIdCard,
  FaTruck,
  FaRoute,
} from "react-icons/fa";

import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  let nav = useNavigate();

  const handleNavigation = (path: string) => {
    nav(path);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 900) {
        setSidebar(false);
      } else {
        setSidebar(true);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


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
            onClick={() => handleNavigation("/dashboard/routes")}
          >
            <FaRoute className="sidebar__menuBar__menu__link__icon brown " />

            <p>Routes</p>
          </li>

          <li
            className="sidebar__menuBar__menu__link"
            onClick={() => handleNavigation("/dashboard/packages")}
          >
            <FaCubes className="sidebar__menuBar__menu__link__icon yellow" />
            
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

        
        </ul>
      </div>

      <div className="sidebar__menuBar__bottomMenu">
          <li
          className="sidebar__menuBar__menu__link"
          onClick={() => handleNavigation("/profile")}
        >
          <FontAwesomeIcon
            icon={faUser}
            className="sidebar__menuBar__menu__link__icon yellow"
          />
          <p>My Account</p>
        </li>
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
    </header>
  );
};

export default Sidebar;
