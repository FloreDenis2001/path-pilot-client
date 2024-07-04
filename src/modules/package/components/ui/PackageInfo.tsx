import React, { useState } from "react";
import InvoicesInformation from "../information/InvoiceInformation";
import Package from "../../model/Package";
import PackInformation from "../information/PackInformation";
import PackageService from "../../service/PackageService";
import ModalEditPackage from "../forms/ModalEditPackage";
import jsPDF from "jspdf";
import Dialog from "../../../core/components/Dialog";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { retrievePackagesLoading } from "../../../../store/packages/packages.reducers";
import OptionsOrderDetails from "../../../route/components/ui/OptionsOrderDetails";
interface PackProps {
  pack: Package;
}

const PackageInfo: React.FC<PackProps> = ({ pack }) => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("package");
  const original =
    pack.shipmentDTO.origin.city +
    " , " +
    pack.shipmentDTO.origin.country +
    " , " +
    pack.shipmentDTO.origin.street +
    " , " +
    pack.shipmentDTO.origin.streetNumber;
  const destination =
    pack.shipmentDTO.destination.city +
    " , " +
    pack.shipmentDTO.destination.country +
    " , " +
    pack.shipmentDTO.destination.street +
    " , " +
    pack.shipmentDTO.destination.streetNumber;

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const handleOpenDialog = async () => {
    setOpenDialogDelete(!openDialogDelete);
  };

  let packService = new PackageService();

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  let handleDeletePackage = async () => {
    try {
      await packService.deletePackage(pack.awb);
      dispatch(retrievePackagesLoading());
      toast.success("Package deleted successfully");
    } catch (err) {
      dispatch(retrievePackagesLoading());
      toast.error("Error deleting package");
    }
    handleOpenDialog();
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handlePrintOrder = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor("#333");
    doc.text("Package Details", 10, 15);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#666");
    doc.text(`Package AWB: ${pack.awb}`, 10, 30);
    doc.text(`Width: ${pack.packageDetails.width} cm`, 10, 40);
    doc.text(`Height: ${pack.packageDetails.height} cm`, 10, 50);
    doc.text(`Weight: ${pack.packageDetails.weight} g`, 10, 60);
    doc.text(`Type: ${pack.status}`, 10, 70);
    doc.text(`Total Amount: ${pack.packageDetails.totalAmount} RON`, 10, 80);
    doc.text(
      `Delivery Description: ${pack.packageDetails.deliveryDescription}`,
      10,
      90
    );

    doc.setTextColor("#333");
    doc.text("Origin Information:", 10, 110);
    doc.setFontSize(10);
    doc.setTextColor("#666");
    doc.text(`Name: ${pack.shipmentDTO.originName}`, 10, 120);
    doc.text(`Phone: ${pack.shipmentDTO.originPhone}`, 10, 130);
    doc.text(
      `Address: ${pack.shipmentDTO.origin.streetNumber}, ${pack.shipmentDTO.origin.street}, ${pack.shipmentDTO.origin.city}, ${pack.shipmentDTO.origin.country}, ${pack.shipmentDTO.origin.postalCode}`,
      10,
      140
    );

    doc.setTextColor("#333");
    doc.text("Destination Information:", 10, 160);
    doc.setFontSize(10);
    doc.setTextColor("#666");
    doc.text(`Name: ${pack.shipmentDTO.destinationName}`, 10, 170);
    doc.text(`Phone: ${pack.shipmentDTO.destinationPhone}`, 10, 180);
    doc.text(
      `Address: ${pack.shipmentDTO.destination.streetNumber}, ${pack.shipmentDTO.destination.street}, ${pack.shipmentDTO.destination.city}, ${pack.shipmentDTO.destination.country}, ${pack.shipmentDTO.destination.postalCode}`,
      10,
      190
    );

    doc.setTextColor("#333");
    doc.text(`Total Distance: ${pack.shipmentDTO.totalDistance} km`, 10, 220);

    doc.setLineWidth(0.5);
    doc.setDrawColor("#999");
    doc.line(10, 105, 200, 105);
    doc.line(10, 155, 200, 155);
    doc.line(10, 210, 200, 210);

    doc.save(`pack_info_${pack.awb}.pdf`);
  };

  return (
    <div className="order__map">
      <div className="order__map__header">
        <div className="order__map__header__info">
          <h3>
            Package AWB : <span>{pack.awb}</span>
          </h3>
          <OptionsOrderDetails
            index={3}
            onToggle={handleDropdownToggle}
            onDelete={handleOpenDialog}
            onEdit={handleOpenModalEdit}
            onPrint={handlePrintOrder}
          />
        </div>
      </div>

      <div className="order__map__body">
        {/* <iframe
          title="map"
          src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyAbyUrZndq4ZPLjIvBO_HeFy4r3heapRg0&origin=${original}&destination=${destination}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe> */}
      </div>

      <div className="order__map__details">
        <div className="order__map__details__actions">
          <button
            className={`button__details ${
              activeButton === "package" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("package")}
          >
            Package Info
          </button>

          <button
            className={`button__details ${
              activeButton === "invoices" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("invoices")}
          >
            Invoices
          </button>
        </div>
        {activeButton === "package" && <PackInformation pack={pack} />}
        {activeButton === "invoices" && <InvoicesInformation pack={pack} />}
      </div>

      {openModalEdit && (
        <ModalEditPackage
          pack={pack}
          handleOpenModal={() => handleOpenModalEdit()}
        />
      )}

      {openDialogDelete && (
        <Dialog
          title="Are you sure ?"
          handleOpenModal={handleOpenDialog}
          handleConfirm={handleDeletePackage}
        />
      )}
    </div>
  );
};

export default PackageInfo;
