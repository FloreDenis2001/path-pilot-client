import { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMobile from "../../core/components/SidebarMobile";
import RouteService from "../services/RouteService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LoaderSpin from "../../core/components/LoaderSpin";
import RouteCard from "./ui/RouteCard";
import Route from "../model/Route";
import LoginContextType from "../../user/models/LoginContextType";
import { LoginContext } from "../../context/LoginProvider";
import RouteInfo from "./ui/RouteInfo";

const RouteMap = () => {
  const [myRoutes, setMyRoutes] = useState<Route[]>([]);
  let user = useContext(LoginContext) as LoginContextType;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllRoutesForCompany = async () => {
      const routeService = new RouteService();

      try {
        const routes =
          await routeService.getAllRoutesByCompanyRegistrationNumber(
            user.user.companyRegistrationNumber
          );
        setMyRoutes(routes);
      } catch (error) {
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };

    fetchAllRoutesForCompany();
  }, [user]);

  const [routeClicked, setRouteClicked] = useState<Route>();

  const handleRouteClick = (route: Route) => {
    setRouteClicked(route);
  };

  function openMenu(): void {
    const sidebar = document.querySelector(
      ".sidebar__mobile__overlay"
    ) as HTMLElement;
    sidebar.style.display = "flex";
  }

  return (
    <section className="order">
      <Sidebar />
      <SidebarMobile />

      <div className="order__container">
        <div className="order__container__header">
          <div className="order__container__header__left">
            <FontAwesomeIcon icon={faBars} onClick={() => openMenu()} />
            <h1 className="heading-primary">Routes</h1>
          </div>
        </div>

        <div className="order__container__maps">
          {loading ? (
            <LoaderSpin />
          ) : myRoutes.length > 0 ? (
            myRoutes.map((route, index) => (
              <RouteCard
                key={index}
                route={route}
                onClick={() => handleRouteClick(route)}
              />
            ))
          ) : (
            <h1>No routes found</h1>
          )}
        </div>
      </div>
      {routeClicked && <RouteInfo route={routeClicked} />}
    </section>
  );
};

export default RouteMap;
