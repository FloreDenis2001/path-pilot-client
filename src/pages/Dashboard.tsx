import React, { useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBoxesStacked,
  faChartColumn,
  faEnvelope,
  faMoneyBill,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import image from "../assets/logoDefault.png";
import { FaSearch } from "react-icons/fa";
import BarChartComponent from "../components/BarChartComponent";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const DashBoard = () => {
  const labelsData = ["January", "February", "March", "April", "May", "June"];
  const expensesData = [65, 59, 80, 81, 56, 55];
  const profitData = [28, 48, 40, 19, 86, 27];

  let priceService = 206.85;
  let shipments = 500;
  let priceExpenses = 153.85;
  let priceProfit = 200.85;
  return (
    <section className="dashboard">
      <Sidebar />
      <div className="dashboard__header">
        <h1 className="heading-primary">Dashboard</h1>

        <div className="dashboard__header__options">
          <div className="dashboard__header__searchBox">
            <FaSearch />
            <input type="search" placeholder="Search anything..." />
          </div>

          <div className="dashboard__header__options__notification">
            <Badge badgeContent={4} color="primary" >
              <FontAwesomeIcon icon={faBell} />
            </Badge>
          </div>

          <div className="dashboard__header__options__profile">
            <img src={image} alt="" width={25} />
          </div>
        </div>
      </div>

      <div className="dashboard__container">
        <div className="dashboard__stats">
          <div className="dashboard__stats__box">
            <div className="dashboard__stats__box__header">
              <FontAwesomeIcon
                className="dashboard__stats__box__iconS"
                icon={faTruckRampBox}
              />
              <h2 className="heading-card">Services</h2>
            </div>

            <p>${priceService}</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">

          <div className="dashboard__stats__box__header">
            <FontAwesomeIcon
              icon={faBoxesStacked}
              className="dashboard__stats__box__iconShip"
            />
            <h2 className="heading-card">Shipments</h2>
          </div>
            <p>{shipments}</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">

          <div className="dashboard__stats__box__header">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconE"
              icon={faChartColumn}
            />
            <h2 className="heading-card">Expenses</h2>
          </div>
            <p>${priceExpenses}</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">
          <div className="dashboard__stats__box__header">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconP"
              icon={faMoneyBill}
            />
            <h2 className="heading-card">Profit</h2>
          </div>
            <p>${priceProfit}</p>
            <span>Last Month</span>
          </div>
        </div>

        <div className="dashboard__bar">
          <div className="dashboard__bar__box">
            <h2>Bar Chart Example</h2>
            <BarChartComponent
              labels={labelsData}
              expensesData={expensesData}
              profitData={profitData}
            />
          </div>


          <div className="dashboard__bar__pie">

          </div>
        </div>
      </div>


    </section>
  );
};

export default DashBoard;
