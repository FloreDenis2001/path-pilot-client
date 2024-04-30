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

const PackageMap = () => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [packClicked, setPackClicked] = useState<Package>();

  const hanlderPackageClick = (pack: Package) => {
    setPackClicked(pack);
  };

  let [myPackages, setMyPackages] = useState(Array<Package>);

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
    try {
      let packs = await packService.allPackages(userLogin.user.id as number);
      console.log(packs);
      setMyPackages(packs);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    allPackages();
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

        <div className="order__container__maps">
          {myPackages.map((pack, index) => {
            return (
              <PackageCard
                key={index}
                pack={pack}
                onClick={() => hanlderPackageClick(pack)}
              />
            );
          })}
        </div>

        {/* BUTTON GENERATE ROUTES */}
        {/* <div className="order__container__footer">
          <button className="button button__first">Generate Routes</button>
        </div> */}
      </div>

      {packClicked && <PackageInfo pack={packClicked} />}

      {openModal && (
        <ModalAddPackage handleOpenModalAddOrder={handleOpenModalAddOrder} />
      )}
    </section>
  );
};

export default PackageMap;
