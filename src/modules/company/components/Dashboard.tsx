import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faTruckRampBox,
  faBoxesStacked,
  faChartColumn,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
import { Badge } from "@mui/material";
import { Chart, registerables } from "chart.js";
import Sidebar from "../../core/components/Sidebar";
import SidebarMobile from "../../core/components/SidebarMobile";
import BarChartComponent from "../../core/components/BarChartComponent";
import DoughnutChart from "../../core/components/DoughnutChart";
import CardTopDrivers from "./forms/CardTopDrivers";
import image from "../../../assets/logoDefault.png";
import { Link } from "react-router-dom";
import LoginContextType from "../../user/models/LoginContextType";
import { LoginContext } from "../../context/LoginProvider";
import UserService from "../../user/service/UserService";
import CompanyService from "../services/CompanyServer";
import CompanyDataDashboard from "../models/CompanyDataDashboard";
import PackRowDashboard from "./forms/PackRowDashboard";

Chart.register(...registerables);

const DashBoard = () => {
  const labelsData = ["January", "February", "March", "April", "May", "June"];
  const expensesData = [65, 59, 80, 81, 56, 55];
  const profitData = [28, 48, 40, 19, 86, 27];
  const [userImage, setUserImage] = useState("");
  let { user } = useContext(LoginContext) as LoginContextType;

  const [companyDataDashboard, setCompanyDataDashboard] =
    useState<CompanyDataDashboard>({
      totalSumLastMonthPackages: 0,
      totalNumberOfPackagesLastMonth: 0,
      totalSumLastMonthOfSalary: 0,
      totalSumLastMonthProfit: 0,
      bestFiveDriversByRanking: [],
      lastFivePackagesAdded: [],
    });

  function openMenu(): void {
    const sidebar = document.querySelector(
      ".sidebar__mobile__overlay"
    ) as HTMLElement;
    sidebar.style.display = "flex";
  }

  const userService = new UserService();
  const companyService = new CompanyService();
  const nav = useNavigate();
  const fetchUserImage = async () => {
    try {
      let userImage = await userService.getImage(user.email);
      setUserImage(userImage);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  const fetchCompanyDataDashboard = async () => {
    try {
      let companyData = await companyService.getDataCompanyDashboard(
        user.companyRegistrationNumber
      );
      setCompanyDataDashboard(companyData);
    } catch (err) {
      console.log((err as Error).message);
    }
  };
  useEffect(() => {
    fetchUserImage();
    fetchCompanyDataDashboard();
  }, [user]);

  const handlerNavProfile = () => {
    nav("/profile");
  };
  return (
    <section className="dashboard">
      <Sidebar />
      <SidebarMobile />
      <div className="dashboard__header">
        <div className="dashboard__header__left">
          <FontAwesomeIcon icon={faBars} onClick={() => openMenu()} />
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

          <div
            className="dashboard__header__options__profile"
            onClick={handlerNavProfile}
          >
            {userImage ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${userImage}`}
                  alt="user-photo"
                  width={25}
                />
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </>
            ) : (
              <>
                <img src={image} alt="default-user" width={25} />
                <p>
                  {user.firstName} {user.lastName}
                </p>
              </>
            )}
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

            <p>${companyDataDashboard.totalSumLastMonthPackages}</p>
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
            <p>{companyDataDashboard.totalNumberOfPackagesLastMonth}</p>
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
            <p>${companyDataDashboard.totalSumLastMonthOfSalary}</p>
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
            <p>${companyDataDashboard.totalSumLastMonthProfit}</p>
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

              <Link to="/dashboard/drivers">
                <button className="button__secondary">See All</button>
              </Link>
            </div>

            <ul className="dashboard__bar__drivers__content">
              {companyDataDashboard.bestFiveDriversByRanking.map(
                (driver, index) => (
                  <CardTopDrivers key={index} driver={driver} />
                )
              )}
            </ul>
          </div>
        </div>

        <div className="dashboard__orders">
          <div className="dashboard__orders__pie">
            <h2>Orders Analysis</h2>
            <DoughnutChart companyData={companyDataDashboard} />
          </div>

          <div className="dashboard__orders__table">
            <div className="dashboard__bar__drivers__header">
              <h2>Recent Packages</h2>
              <Link to="/dashboard/pacakges">
                <button className="button__secondary">See All</button>
              </Link>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Packages AWB </th>
                  <th>Customer</th>
                  <th>Distance</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {
                  companyDataDashboard.lastFivePackagesAdded.map((pack, index) => (
                    <PackRowDashboard key={index} pack={pack} />
                  ))
                }
           
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
