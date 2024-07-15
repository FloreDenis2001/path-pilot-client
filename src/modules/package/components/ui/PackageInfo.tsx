import React, { useState } from "react";
import InvoicesInformation from "../information/InvoiceInformation";
import Package from "../../model/Package";
import PackInformation from "../information/PackInformation";
import PackageService from "../../service/PackageService";
import ModalEditPackage from "../forms/ModalEditPackage";
import jsPDF from "jspdf";
import Dialog from "../../../core/components/Dialog";
import { toast } from "react-toastify";
import OptionsOrderDetails from "../../../route/components/ui/OptionsOrderDetails";
interface PackProps {
  pack: Package;
}

const PackageInfo: React.FC<PackProps> = ({ pack }) => {
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
      toast.success("Package deleted successfully");
      window.location.reload();
    } catch (err) {
      toast.error("Error deleting package");
    }
    handleOpenDialog();
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };

  const handlePrintOrder = () => {
    const doc = new jsPDF();

    doc.setFillColor("#e0f7fa");
    doc.rect(0, 0, 210, 30, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor("#00796b");
    doc.text("Invoice", 10, 20);

    doc.setFontSize(12);
    doc.setTextColor("#00796b");
    doc.text(`${pack.status}`, 150, 20);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#00796b");
    doc.text("Package Details", 10, 40);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#333");

    const packageStartY = 50;
    const column1X = 10;
    const column2X = 110;

    doc.text(`AWB: ${pack.awb}`, column1X, packageStartY);
    doc.text(
      `Width: ${pack.packageDetails.width} cm`,
      column1X,
      packageStartY + 10
    );
    doc.text(
      `Height: ${pack.packageDetails.height} cm`,
      column1X,
      packageStartY + 20
    );
    doc.text(
      `Length: ${pack.packageDetails.length} cm`,
      column1X,
      packageStartY + 30
    );
    doc.text(
      `Weight: ${pack.packageDetails.weight} g`,
      column1X,
      packageStartY + 40
    );
    doc.text(`Type: ${pack.status}`, column1X, packageStartY + 50);
    doc.text(
      `Total Amount:$ ${pack.packageDetails.totalAmount} `,
      column1X,
      packageStartY + 60
    );
    doc.text(
      `Delivery Description: ${pack.packageDetails.deliveryDescription}`,
      column1X,
      packageStartY + 70,
      { maxWidth: 90 }
    );

    doc.setLineWidth(0.5);
    doc.setDrawColor("#999");
    doc.line(10, packageStartY + 80, 200, packageStartY + 80);

    const originStartY = packageStartY + 90;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#00796b");
    doc.text("Origin Information", column1X, originStartY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#333");

    doc.text(
      `Name: ${pack.shipmentDTO.originName}`,
      column1X,
      originStartY + 10
    );
    doc.text(
      `Phone: ${pack.shipmentDTO.originPhone}`,
      column1X,
      originStartY + 20
    );
    doc.text(
      `Address: ${pack.shipmentDTO.origin.streetNumber}, ${pack.shipmentDTO.origin.street}, ${pack.shipmentDTO.origin.city}, ${pack.shipmentDTO.origin.country}, ${pack.shipmentDTO.origin.postalCode}`,
      column1X,
      originStartY + 30,
      { maxWidth: 90 }
    );

    const destinationStartY = originStartY;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#00796b");
    doc.text("Destination Information", column2X, destinationStartY);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#333");

    doc.text(
      `Name: ${pack.shipmentDTO.destinationName}`,
      column2X,
      destinationStartY + 10
    );
    doc.text(
      `Phone: ${pack.shipmentDTO.destinationPhone}`,
      column2X,
      destinationStartY + 20
    );
    doc.text(
      `Address: ${pack.shipmentDTO.destination.streetNumber}, ${pack.shipmentDTO.destination.street}, ${pack.shipmentDTO.destination.city}, ${pack.shipmentDTO.destination.country}, ${pack.shipmentDTO.destination.postalCode}`,
      column2X,
      destinationStartY + 30,
      { maxWidth: 90 }
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor("#00796b");
    doc.text(
      `Total Distance: ${pack.shipmentDTO.totalDistance} km`,
      column1X,
      originStartY + 70
    );

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
        <iframe
          title="map"
          src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyAbyUrZndq4ZPLjIvBO_HeFy4r3heapRg0&origin=${original}&destination=${destination}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
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
