import { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMobile from "../../core/components/SidebarMobile";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRetrieveRoutesState,
  selectRoutes,
} from "../../../store/routes/routes.selectors";
import RouteService from "../services/RouteService";
import {
  loadRoutes,
  retrieveRoutesError,
  retrieveRoutesLoading,
  retrieveRoutesSuccess,
} from "../../../store/routes/routes.reducers";
import { LoadingState } from "../../../actionType/LoadingState";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LoaderSpin from "../../core/components/LoaderSpin";
import RouteCard from "./ui/RouteCard";
import Route from "../model/Route";
import LoginContextType from "../../user/models/LoginContextType";
import { LoginContext } from "../../context/LoginProvider";
import RouteInfo from "./ui/RouteInfo";

const RouteMap = () => {
  const dispatch = useDispatch();
  const myRoutes = useSelector(selectRoutes);
  const retriverRoutesState = useSelector(selectRetrieveRoutesState);
  const retriverDriversState = useSelector(selectRetrieveRoutesState);
  const retriverVehiclesState = useSelector(selectRetrieveRoutesState);
  const routeService = new RouteService();

  const userLogin = useContext(LoginContext) as LoginContextType;
  const fetchAllRoutesForCompany = async () => {
    dispatch(retrieveRoutesLoading());
    try {
      const routes = await routeService.getAllRoutesByCompanyRegistrationNumber(
        userLogin.user.companyRegistrationNumber
      );

      dispatch(retrieveRoutesSuccess());
      dispatch(loadRoutes(routes));
    } catch (error) {
      dispatch(retrieveRoutesError());
    }
  };

  useEffect(() => {
    if (
      retriverRoutesState !== LoadingState.SUCCES &&
      retriverDriversState !== LoadingState.SUCCES &&
      retriverVehiclesState !== LoadingState.SUCCES
    )
      fetchAllRoutesForCompany();
  }, [retriverRoutesState, retriverDriversState, retriverVehiclesState]);

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
          {retriverRoutesState === LoadingState.LOADING && <LoaderSpin />}
          {retriverRoutesState === LoadingState.SUCCES &&
            myRoutes.map((route, index) => (
              <RouteCard
                key={index}
                route={route}
                onClick={() => handleRouteClick(route)}
              />
            ))}
        </div>
      </div>
      {routeClicked && <RouteInfo route={routeClicked} />}
    </section>
  );
};

export default RouteMap;
