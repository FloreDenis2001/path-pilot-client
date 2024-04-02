import React, { useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
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
            <Badge badgeContent={4} color="primary">
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
            <FontAwesomeIcon
              className="dashboard__stats__box__iconS"
              icon={faTruckRampBox}
            />
            <h2 className="heading-card">Services</h2>
            <p>${priceService}</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconE"
              icon={faChartColumn}
            />
            <h2 className="heading-card">Expenses</h2>
            <p>${priceExpenses}</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconP"
              icon={faMoneyBill}
            />
            <h2 className="heading-card">Profit</h2>
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
          
          <div className="dashboard__bar__box">
            <h2>Bar Chart Example</h2>
            <BarChartComponent
              labels={labelsData}
              expensesData={expensesData}
              profitData={profitData}
            />
          </div>

        </div>
    
      </div>

      <div className="dashboard__updates">
        <h2 className="heading-primary">Recent Updates</h2>
        <div className="dashboard__updates__box">
          <div className="dashboard__updates__box__header">
            <h3>Order #3456</h3>
            <span>2021-10-10</span>
          </div>
          <div className="dashboard__updates__box__body">
            <p>
              The order #3456 has been completed and the payment has been
              received.
            </p>
          </div>
        </div>
        <div className="dashboard__updates__box">
          <div className="dashboard__updates__box__header">
            <h3>Order #3456</h3>
            <span>2021-10-10</span>
          </div>
          <div className="dashboard__updates__box__body">
            <p>
              The order #3456 has been completed and the payment has been
              received.
            </p>
          </div>
        </div>
        <div className="dashboard__updates__box">
          <div className="dashboard__updates__box__header">
            <h3>Order #3456</h3>
            <span>2021-10-10</span>
          </div>
          <div className="dashboard__updates__box__body">
            <p>
              The order #3456 has been completed and the payment has been
              received.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
