import { useContext, useEffect, useState } from "react";
import Sidebar from "../../core/components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SidebarMobile from "../../core/components/SidebarMobile";
import OptionsPackage from "./ui/OptionsPackage";
import Package from "../model/Package";
import PackageService from "../service/PackageService";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../user/models/LoginContextType";
import PackageCard from "./ui/PackageCard";
import PackageInfo from "./ui/PackageInfo";
import ModalAddPackage from "./forms/ModalAddPackage";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPackages,
  selectRetrievePackagesState,
} from "../../../store/packages/packages.selectors";
import {
  loadPackages,
  retrievePackagesError,
  retrievePackagesLoading,
  retrievePackagesSuccess,
} from "../../../store/packages/packages.reducers";
import { LoadingState } from "../../../actionType/LoadingState";
import LoaderSpin from "../../core/components/states/LoaderSpin";
import { FaSearch } from "react-icons/fa";

const PackageMap = () => {
  const myPackages = useSelector(selectPackages);
  const retrivePackagesState = useSelector(selectRetrievePackagesState);
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [packClicked, setPackClicked] = useState<Package>();

  const hanlderPackageClick = (pack: Package) => {
    setPackClicked(pack);
  };

  let userLogin = useContext(LoginContext) as LoginContextType;

  let packService = new PackageService();

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenModalAddOrder = () => {
    setOpenModal(!openModal);
  };

  function openMenu(): void {
    const sidebar = document.querySelector(
      ".sidebar__mobile__overlay"
    ) as HTMLElement;
    sidebar.style.display = "flex";
  }

  let allPackages = async (): Promise<void> => {
    dispatch(retrievePackagesLoading());
    await new Promise((resolve) => setTimeout(resolve, 400));
    try {
      let packs = await packService.allPackages(userLogin.user.id as number);
      dispatch(retrievePackagesSuccess());
      dispatch(loadPackages(packs));
    } catch (err) {
      dispatch(retrievePackagesError());
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    if (!(retrivePackagesState === LoadingState.SUCCES)) allPackages();
  }, []);

  return (
    <section className="order">
      <Sidebar />
      <SidebarMobile />

      <div className="order__container">
        <div className="order__container__header">
          <div className="order__container__header__left">
            <FontAwesomeIcon icon={faBars} onClick={() => openMenu()} />
            <h1 className="heading-primary" onClick={() => allPackages()}>
              Packages
            </h1>
          </div>

          <OptionsPackage
            index={3}
            onToggle={handleDropdownToggle}
            onAdd={handleOpenModalAddOrder}
            onImport={() => console.log("Import Orders")}
            onExport={() => console.log("Export Orders")}
          />
        </div>

        <div className="order__container__search">
          <div className="searchBox">
            <label htmlFor="">What are you looking for ?</label>

            <div className="searchBox__input2">
              <FaSearch className="searchBox__icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>
        </div>

        <div className="order__container__maps">
          {retrivePackagesState === LoadingState.LOADING && <LoaderSpin />}
          {retrivePackagesState === LoadingState.SUCCES &&
            myPackages.map((pack, index) => {
              return (
                <PackageCard
                  key={index}
                  pack={pack}
                  onClick={() => hanlderPackageClick(pack)}
                />
              );
            })}
        </div>

        {retrivePackagesState === LoadingState.SUCCES && (
          <div className="order__container__footer">
            <button className="button button__first">Generate Route</button>
          </div>
        )}
      </div>

      {packClicked && <PackageInfo pack={packClicked} />}

      {openModal && (
        <ModalAddPackage handleOpenModalAddOrder={handleOpenModalAddOrder} />
      )}
    </section>
  );
};

export default PackageMap;
