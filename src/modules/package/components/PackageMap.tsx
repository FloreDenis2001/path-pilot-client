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
import LoaderSpin from "../../core/components/LoaderSpin";
import { FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import UploadFile from "../../core/components/UploadFile";
import useExportPacksCSV from "../hooks/useExportPacksCSV";
import RouteService from "../../route/services/RouteService";

const PackageMap = () => {
  const {user} = useContext(LoginContext) as LoginContextType;
  const routeService = new RouteService();
  const myPackages = useSelector(selectPackages);
  const retrievePackagesState = useSelector(selectRetrievePackagesState);
  const dispatch = useDispatch();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [packClicked, setPackClicked] = useState<Package>();
  const [searchInput, setSearchInput] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const { exportCSV} = useExportPacksCSV();
  const handlePackageClick = (pack: Package) => {
    setPackClicked(pack);
  };

  const userLogin = useContext(LoginContext) as LoginContextType;
  const packService = new PackageService();

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenModalAddOrder = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUploadModal = () => {
    setShowUploadModal(true);
  };

  const openMenu = (): void => {
    const sidebar = document.querySelector(
      ".sidebar__mobile__overlay"
    ) as HTMLElement;
    sidebar.style.display = "flex";
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(retrievePackagesLoading());
      try {
        const packs = await packService.allPackages(
          userLogin.user.id as number
        );
        dispatch(loadPackages(packs));
        setFilteredPackages(packs);
        dispatch(retrievePackagesSuccess());
      } catch (err) {
        dispatch(retrievePackagesError());
        toast.error("Error loading packages");
      }
    };

    if (retrievePackagesState !== LoadingState.SUCCES) {
      fetchData();
    }

  }, [retrievePackagesState]);

  useEffect(() => {
    if (searchInput.length >= 2) {
      const filtered = myPackages.filter((pack) =>
        pack.awb.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredPackages(filtered);
    } else {
      setFilteredPackages(myPackages);
    }
  }, [searchInput, myPackages]);

  const handleExportCSV = async (packages: Package[]): Promise<void> => {
    try {
      await exportCSV(packages, "packages.csv");
    } catch (error) {
      toast.error("Error exporting packages");
    }
  };

  const handleGenerateRoute = async() => {
    try {
      await routeService.generateRoute(user.companyRegistrationNumber);
      toast.success("Route generated successfully");
    } catch (err) {
      toast.error("Error generating route");
    }
  };

  return (
    <section className="order">
      <Sidebar />
      <SidebarMobile />

      <div className="order__container">
        <div className="order__container__header">
          <div className="order__container__header__left">
            <FontAwesomeIcon icon={faBars} onClick={openMenu} />
            <h1 className="heading-primary">Packages</h1>
          </div>

          <OptionsPackage
            index={3}
            onToggle={handleDropdownToggle}
            onAdd={handleOpenModalAddOrder}
            onImport={handleOpenUploadModal}
            onExport={() => handleExportCSV(myPackages)}
          />
        </div>

        <div className="order__container__search">
          <div className="searchBox">
            <label htmlFor="packageSearch">
              Search for a package by AWB number :
            </label>
            <div className="searchBox__input2">
              <FaSearch className="searchBox__icon" />
              <input
                type="search"
                placeholder="Write the AWB..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="order__container__maps">
          {retrievePackagesState === LoadingState.LOADING && <LoaderSpin />}
          {retrievePackagesState === LoadingState.SUCCES &&
            filteredPackages
              .slice()
              .reverse()
              .map((pack, index) => (
                <PackageCard
                  key={index}
                  pack={pack}
                  onClick={() => handlePackageClick(pack)}
                />
              ))}
        </div>

        {retrievePackagesState === LoadingState.SUCCES && (
          <div className="order__container__footer">
            <button className="button button__first" onClick={handleGenerateRoute} >Generate Route</button>
          </div>
        )}
      </div>

      {packClicked && <PackageInfo pack={packClicked} />}

      {openModal && (
        <ModalAddPackage handleOpenModalAddOrder={handleOpenModalAddOrder} />
      )}

      {showUploadModal && (
        <UploadFile onClose={() => setShowUploadModal(false)} />
      )}
    </section>
  );
};

export default PackageMap;
