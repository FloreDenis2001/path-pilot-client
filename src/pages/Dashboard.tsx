import React from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faEnvelope,
  faMoneyBill,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";

const DashBoard = () => {
  return (
    <section className="dashboard">
      <Sidebar />
      <div className="dashboard__container">
        <div className="dashboard__header">
          <h1 className="heading-primary">Dashboard</h1>
          {/* <div className="dashboard__notification">
            <FontAwesomeIcon
              className="dashboard__notification__icon"
              icon={faEnvelope}
            />
            <span>4</span>
          </div> */}
        </div>
        <div className="dashboard__stats">
          <div className="dashboard__stats__box">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconS"
              icon={faTruckRampBox}
            />
            <h2 className="heading-card">Services</h2>
            <p>$ 206.200,85</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconE"
              icon={faChartColumn}
            />
            <h2 className="heading-card">Expenses</h2>
            <p>$ 153.060,85</p>
            <span>Last Month</span>
          </div>
          <div className="dashboard__stats__box">
            <FontAwesomeIcon
              className="dashboard__stats__box__iconP"
              icon={faMoneyBill}
            />
            <h2 className="heading-card">Profit</h2>
            <p>$ 200.000,85</p>
            <span>Last Month</span>
          </div>
        </div>

        <div className="dashboard__recent">
          <h2 className="heading-primary">Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Customer</th>
                <th>Origin Address</th>
                <th>Destination Address</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>Details</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__pending">Pending</span>
                </td>
                <td>Details</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__refused">Refused</span>
                </td>
                <td>Details</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>Details</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>Details</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__completed">Completed</span>
                </td>
                <td>Details</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>Germany</td>
                <td>Romania</td>
                <td>2021-10-10</td>
                <td>2021-10-20</td>
                <td className="td__status ">
                  <span className="td__status__pending">Pending</span>
                </td>
                <td>Details</td>
              </tr>
            </tbody>
          </table>
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
