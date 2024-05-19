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
import Papa from "papaparse";
import { toast } from "react-toastify";
import UploadFile from "../../core/components/UploadFile";

const PackageMap = () => {
  const myPackages = useSelector(selectPackages);
  const retrievePackagesState = useSelector(selectRetrievePackagesState);
  const dispatch = useDispatch();
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [packClicked, setPackClicked] = useState<Package>();
  const [searchInput, setSearchInput] = useState("");
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);

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

  const allPackages = async (): Promise<void> => {
    dispatch(retrievePackagesLoading());
    await new Promise((resolve) => setTimeout(resolve, 400));
    try {
      const packs = await packService.allPackages(userLogin.user.id as number);
      dispatch(retrievePackagesSuccess());
      dispatch(loadPackages(packs));
      setFilteredPackages(packs);
    } catch (err) {
      dispatch(retrievePackagesError());
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    if (retrievePackagesState !== LoadingState.SUCCES) allPackages();
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

  const handleExportCSV = async () => {
    const packService = new PackageService();
    try {
      const packages = await packService.allPackages(
        userLogin.user.id as number
      );

      const csvData = packages.map((pack) => ({
        AWB: pack.awb,
        "Origin Name": pack.shipmentDTO.originName,
        "Origin Phone": pack.shipmentDTO.originPhone,
        "Origin City": pack.shipmentDTO.origin.city,
        "Origin Country": pack.shipmentDTO.origin.country,
        "Origin Street": pack.shipmentDTO.origin.street,
        "Origin Street Number": pack.shipmentDTO.origin.streetNumber,
        "Destination Name": pack.shipmentDTO.destinationName,
        "Destination Phone": pack.shipmentDTO.destinationPhone,
        "Destination City": pack.shipmentDTO.destination.city,
        "Destination Country": pack.shipmentDTO.destination.country,
        "Destination Street": pack.shipmentDTO.destination.street,
        "Destination Street Number": pack.shipmentDTO.destination.streetNumber,
        "Total Distance": pack.shipmentDTO.totalDistance,
        Status: pack.status,
        "Total Amount": pack.packageDetails.totalAmount,
        Weight: pack.packageDetails.weight,
        Height: pack.packageDetails.height,
        Width: pack.packageDetails.width,
        Length: pack.packageDetails.length,
        "Delivery Description": pack.packageDetails.deliveryDescription,
      }));

      const csv = Papa.unparse(csvData, { header: true });
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "packages.csv");
      link.click();
      toast.success("Packages exported successfully");
    } catch (error) {
      toast.error("Error exporting packages");
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
            <h1 className="heading-primary" onClick={allPackages}>
              Packages
            </h1>
          </div>

          <OptionsPackage
            index={3}
            onToggle={handleDropdownToggle}
            onAdd={handleOpenModalAddOrder}
            onImport={handleOpenUploadModal}
            onExport={handleExportCSV}
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
            filteredPackages.map((pack, index) => (
              <PackageCard
                key={index}
                pack={pack}
                onClick={() => handlePackageClick(pack)}
              />
            ))}
        </div>

        {retrievePackagesState === LoadingState.SUCCES && (
          <div className="order__container__footer">
            <button className="button button__first">Generate Route</button>
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
