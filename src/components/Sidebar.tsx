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
import { useNavigate } from "react-router";



const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  let nav = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);


  const handleNavigation = (path: string) =>{
    nav(path);
  }

  return (
    <header className={sidebar === true ? "sidebar" : "sidebar sidebar__collapse"}>
      <div className="sidebar__box">
        <div className="sidebar__header">
          <div className="sidebar__header__imageBox">
            <img
              src={LogoDefault}
              alt="Company Logo"
              className="sidebar__header__imageBox__image"
            />
          </div>

          <div className="sidebar__header__text">
            <p className="sidebar__header__text__companyName">
              SC FLORIANI MODE SRL
            </p>
            <p className="sidebar__header__text__adminName">Flore Denis</p>
          </div>
        </div>
      </div>

      <div className="sidebar__close" onClick={()=>showSidebar()}>
        <FaCaretRight className="sidebar__close__icon" />
      </div>

      <div className="sidebar__menuBar">
        <div className="sidebar__menuBar__menu">
          <li className="sidebar__menuBar__menu__links__searchBox">
            <FaSearch className="sidebar__menuBar__menu__links__item__icon" />
            <input type="search" placeholder="Search..." />
          </li>
          <ul className="sidebar__menuBar__menu__links">
            <li className="sidebar__menuBar__menu__links__item" onClick={()=>handleNavigation("/dashboard")}>
              <div className="sidebar__menuBar__menu__links__item__box" >
                <FaHome className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Dashboard
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box" onClick={()=>handleNavigation("/dashboard/routes")}>
                <FaRoute className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                 Routes
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item" onClick={()=>handleNavigation("/dashboard/orders")}>
              <div className="sidebar__menuBar__menu__links__item__box" >
                <FaCubes className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Orders
                </p>
              </div>
            </li>
            {/* <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box" onClick={()=>handleNavigation("/dashboard/packages")}>
                <FaBox className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Packages
                </p>
              </div>
            </li> */}
            <li className="sidebar__menuBar__menu__links__item" onClick={()=>handleNavigation("/dashboard/drivers")}>
              <div className="sidebar__menuBar__menu__links__item__box" >
                <FaIdCard className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Drivers
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item"  onClick={()=>handleNavigation("/dashboard/vehicles")}>
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaTruck className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Vehicle
                </p>
              </div>
            </li>
       
            {/* <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box" onClick={()=>handleNavigation("/dashboard/invoices")}>
                <FaFileInvoice className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Invoices
                </p>
              </div>
            </li>
        
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box" onClick={()=>handleNavigation("/dashboard/reports")}>
                <FaFile className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Reports
                </p> 
              </div>
            </li> */}
          </ul>
        </div>

        <div className="sidebar__menuBar__bottomMenu">
          <li className="sidebar__menuBar__menu__links__item" onClick={()=>handleNavigation("/")}>
            <div className="sidebar__menuBar__menu__links__item__box" >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="sidebar__menuBar__menu__links__item__icon"
              />
              <p className="siderBar__menuBar__menu__links__item__text">
                Logout
              </p>
            </div>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
