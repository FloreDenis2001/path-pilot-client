import { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTruckRampBox,
  faBoxesStacked,
  faChartColumn,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
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
import CompanyDataDashboard from "../dto/CompanyDataDashboard";
import PackRowDashboard from "./forms/PackRowDashboard";
import StatsBox from "./forms/StateBox";

const DashBoard = () => {
  Chart.register(...registerables);
  const labelsData = ["January", "February", "March", "April", "May", "June"];
  const expensesData = [65, 59, 80, 81, 56, 55];
  const profitData = [28, 48, 40, 19, 86, 27];
  const [userImage, setUserImage] = useState<string>("");
  const { user } = useContext(LoginContext) as LoginContextType;
  const nav = useNavigate();
  const [companyDataDashboard, setCompanyDataDashboard] = useState<CompanyDataDashboard>({
    totalSumLastMonthPackages: 0,
    totalNumberOfPackagesLastMonth: 0,
    totalSumLastMonthOfSalary: 0,
    totalSumLastMonthProfit: 0,
    bestFiveDriversByRanking: [],
    lastFivePackagesAdded: [],
  });

  

  const userService = useMemo(() => new UserService(), []);
  const companyService = useMemo(() => new CompanyService(), []);

  useEffect(() => {
    const fetchUserAndCompanyData = async () => {
      try {
        const [userImage, companyData] = await Promise.all([
          userService.getImage(user.email),
          companyService.getDataCompanyDashboard(user.companyRegistrationNumber),
        ]);

        setUserImage(userImage);
        setCompanyDataDashboard(companyData);
      } catch (err) {
      }
    };

    fetchUserAndCompanyData();
  }, [user.email, user.companyRegistrationNumber, userService, companyService]);

  const statsData = [
    {
      icon: faTruckRampBox,
      heading: "Services",
      value: `$${companyDataDashboard.totalSumLastMonthPackages}`,
      label: "Last Month",
      className: "dashboard__stats__box__iconS",
    },
    {
      icon: faBoxesStacked,
      heading: "Shipments",
      value: companyDataDashboard.totalNumberOfPackagesLastMonth,
      label: "Last Month",
      className: "dashboard__stats__box__iconShip",
    },
    {
      icon: faChartColumn,
      heading: "Expenses",
      value: `$${companyDataDashboard.totalSumLastMonthOfSalary}`,
      label: "Last Month",
      className: "dashboard__stats__box__iconE",
    },
    {
      icon: faMoneyBill,
      heading: "Profit",
      value: `$${companyDataDashboard.totalSumLastMonthProfit}`,
      label: "Last Month",
      className: "dashboard__stats__box__iconP",
    },
  ];

  function openMenu(): void {
    const sidebar = document.querySelector(".sidebar__mobile__overlay") as HTMLElement;
    if (sidebar) {
      sidebar.style.display = "flex";
    }
  }

  return (
    <section className="dashboard">
      <Sidebar />
      <SidebarMobile  />
      <div className="dashboard__header">
        <div className="dashboard__header__left">
          <FontAwesomeIcon icon={faBars} onClick={openMenu} />
          <h1 className="heading-primary">Dashboard</h1>
        </div>

        <div className="dashboard__header__options">
          <div
            className="dashboard__header__options__profile"
            onClick={() => nav("/profile")}
          >
            {userImage ? (
              <>
                <img
                  src={`data:image/jpeg;base64,${userImage}`}
                  alt={`${user.username}'s profile`}
                  width={25}
                />
                <p>{user.username}</p>
              </>
            ) : (
              <>
                <img src={image} alt="Default user profile" width={25} />
                <p>{user.username}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="dashboard__container">
        <div className="dashboard__stats">
          {statsData.map((stat, index) => (
            <StatsBox
              icon={stat.icon}
              heading={stat.heading}
              value={stat.value}
              label={stat.label}
              className={stat.className}
              key={index}
            />
          ))}
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
              {companyDataDashboard.bestFiveDriversByRanking.map((driver, index) => (
                <CardTopDrivers key={index} driver={driver} />
              ))}
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
              <Link to="/dashboard/packages">
                <button className="button__secondary">See All</button>
              </Link>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Packages AWB</th>
                  <th>Customer</th>
                  <th>Distance</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {companyDataDashboard.lastFivePackagesAdded.map((pack, index) => (
                  <PackRowDashboard key={index} pack={pack} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
