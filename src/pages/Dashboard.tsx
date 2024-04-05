import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faBell,
  faBoxesStacked,
  faChartColumn,
  faLocationDot,
  faMoneyBill,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";
import image from "../assets/logoDefault.png";
import { FaSearch } from "react-icons/fa";
import BarChartComponent from "../components/BarChartComponent";
import { Chart, registerables } from "chart.js";
import DoughnutChart from "../components/DoughnutChart";
import SidebarMobile from "../components/SidebarMobile";

Chart.register(...registerables);
const DashBoard = () => {
  const labelsData = ["January", "February", "March", "April", "May", "June"];
  const expensesData = [65, 59, 80, 81, 56, 55];
  const profitData = [28, 48, 40, 19, 86, 27];

  let priceService = 206.85;
  let shipments = 500;
  let priceExpenses = 153.85;
  let priceProfit = 200.85;

  function openMenu(): void {
    const sidebar = document.querySelector(".sidebar__mobile__overlay") as HTMLElement;
    sidebar.style.display = "flex";

  }

  return (
    <section className="dashboard">
      <Sidebar />
      <SidebarMobile />
      <div className="dashboard__header">
        <div className="dashboard__header__left">
          <FontAwesomeIcon icon={faBars}  onClick={()=>openMenu()}/>
          <h1 className="heading-primary">Dashboard</h1>
        </div>

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
            <h2>Expense and Profit Analysis</h2>
            <BarChartComponent
              labels={labelsData}
              expensesData={expensesData}
              profitData={profitData}
            />
          </div>

          <div className="dashboard__bar__drivers">
            <div className="dashboard__bar__drivers__header">
              <h2>Drivers</h2>

              <button className="button__secondary">See All</button>
            </div>

            <ul className="dashboard__bar__drivers__content">
              <li className="dashboard__bar__drivers__content__notification">
                <img src={image} alt="" width={50} />

                <div className="dashboard__bar__drivers__content__notification__main">
                  <div className="dashboard__bar__drivers__content__notification__info">
                    <h3>John Doe</h3>
                    <p className="done">Done</p>
                  </div>
                  <div className="dashboard__bar__drivers__content__notification__details">
                    <FontAwesomeIcon className="brown" icon={faLocationDot} />
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                <div className="dashboard__bar__drivers__content__notification__more">
                  <FontAwesomeIcon className="blue" icon={faArrowRight} />
                </div>
              </li>
              <li className="dashboard__bar__drivers__content__notification">
                <img src={image} alt="" width={50} />

                <div className="dashboard__bar__drivers__content__notification__main">
                  <div className="dashboard__bar__drivers__content__notification__info">
                    <h3>Flore Denis</h3>
                    <p className="cancelled">Canceled</p>
                  </div>
                  <div className="dashboard__bar__drivers__content__notification__details">
                    <FontAwesomeIcon className="brown" icon={faLocationDot} />
                    <p>Bucharest , Romania</p>
                  </div>
                </div>
                <div className="dashboard__bar__drivers__content__notification__more">
                  <FontAwesomeIcon className="blue" icon={faArrowRight} />
                </div>
              </li>
              <li className="dashboard__bar__drivers__content__notification">
                <img src={image} alt="" width={50} />

                <div className="dashboard__bar__drivers__content__notification__main">
                  <div className="dashboard__bar__drivers__content__notification__info">
                    <h3>Dan Caraba</h3>
                    <p className="done">Done</p>
                  </div>
                  <div className="dashboard__bar__drivers__content__notification__details">
                    <FontAwesomeIcon className="brown" icon={faLocationDot} />
                    <p>Paris, France</p>
                  </div>
                </div>
                <div className="dashboard__bar__drivers__content__notification__more">
                  <FontAwesomeIcon className="blue" icon={faArrowRight} />
                </div>
              </li>
              <li className="dashboard__bar__drivers__content__notification">
                <img src={image} alt="" width={50} />

                <div className="dashboard__bar__drivers__content__notification__main">
                  <div className="dashboard__bar__drivers__content__notification__info">
                    <h3>John Doe</h3>
                    <p className="intransit">In Transit</p>
                  </div>
                  <div className="dashboard__bar__drivers__content__notification__details">
                    <FontAwesomeIcon className="brown" icon={faLocationDot} />
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                <div className="dashboard__bar__drivers__content__notification__more">
                  <FontAwesomeIcon className="blue" icon={faArrowRight} />
                </div>
              </li>
              <li className="dashboard__bar__drivers__content__notification">
                <img src={image} alt="" width={50} />

                <div className="dashboard__bar__drivers__content__notification__main">
                  <div className="dashboard__bar__drivers__content__notification__info">
                    <h3>John Doe</h3>
                    <p className="ongoing">On Going</p>
                  </div>
                  <div className="dashboard__bar__drivers__content__notification__details">
                    <FontAwesomeIcon className="brown" icon={faLocationDot} />
                    <p>San Francisco, CA</p>
                  </div>
                </div>
                <div className="dashboard__bar__drivers__content__notification__more">
                  <FontAwesomeIcon className="blue" icon={faArrowRight} />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="dashboard__orders">
          <div className="dashboard__orders__pie">
            <h2>Orders Analysis</h2>
            <DoughnutChart />
          </div>

          <div className="dashboard__orders__table">
            <div className="dashboard__bar__drivers__header">
              <h2>Recent Orders</h2>

              <button className="button__secondary">See All</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Order No.</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2021-10-10</td>
                  <td>$20</td>
                  <td className="td__status ">
                    <span className="td__status__refused">Cancelled</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2021-10-10</td>
                  <td>$20</td>
                  <td className="td__status ">
                    <span className="td__status__pending ">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2021-10-10</td>
                  <td>$20</td>
                  <td className="td__status ">
                    <span className="td__status__completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2021-10-10</td>
                  <td>$20</td>
                  <td className="td__status ">
                    <span className="td__status__completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>2021-10-10</td>
                  <td>$20</td>
                  <td className="td__status ">
                    <span className="td__status__completed">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
