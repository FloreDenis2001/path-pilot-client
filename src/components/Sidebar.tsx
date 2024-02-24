import React from "react";
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
} from "react-icons/fa";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <header className="sidebar">
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

        <div className="sidebar__toggle">
          <FaCaretRight />
        </div>
      </div>

      <div className="sidebar__menuBar">
        <div className="sidebar__menuBar__menu">
          <li className="sidebar__menuBar__menu__links__searchBox">
            <FaSearch className="sidebar__menuBar__menu__links__item__icon" />
            <input type="search" placeholder="Search..." />
          </li>
          <ul className="sidebar__menuBar__menu__links">
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaHome className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Dashboard
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaMap className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Maps
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaCubes className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Orders
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaIdCard className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Drivers
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaTruck className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Vehicle
                </p>
              </div>
            </li>
            <li className="sidebar__menuBar__menu__links__item">
              <div className="sidebar__menuBar__menu__links__item__box">
                <FaFile className="sidebar__menuBar__menu__links__item__icon" />
                <p className="siderBar__menuBar__menu__links__item__text">
                  Reports
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="sidebar__menuBar__bottomMenu">
          <li className="sidebar__menuBar__menu__links__item">
            <div className="sidebar__menuBar__menu__links__item__box">
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
