import React, { useState } from "react";
import Vehicle from "../../models/Vehicle";
import ModalVehicleDetails from "../forms/ModalVehicleDetails";
import ModalEditVehicle from "../forms/ModalEditVehicle";
import VehicleService from "../../service/VehicleService";
import { set } from "react-hook-form";
import Dialog from "../../../core/components/Dialog";
import OptionsDropDownDrivers from "../../../driver/components/ui/OptionsDropDownDrivers";
import { toast } from "react-toastify";

interface VehicleRowProps {
  vehicle: Vehicle;
}

const VehicleRow: React.FC<VehicleRowProps> = ({ vehicle }) => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openVehicleDetails, setOpenVehicleDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenVehicleDetails = () => {
    setOpenVehicleDetails(!openVehicleDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };
  const handleOpenDialog = async () => {
    setOpenDialogDelete(!openDialogDelete);
  };

  const vehicleService = new VehicleService();

  const handleConfirm = async () => {
    try {
      let mesaj = await vehicleService.deleteVehicle(
        vehicle.registrationNumber
      );
      toast.success(mesaj);
    } catch (err) {
      toast.error("Error deleting vehicle");
    }
    window.location.reload();
    handleOpenDialog();
  };

  return (
    <>
      <tr>
        <td>{vehicle.registrationNumber}</td>
        <td>{vehicle.make}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.year}</td>
        <td>{vehicle.km}</td>
        <td>{vehicle.lastService.toString()}</td>
        <td className="td__status ">
          {vehicle.active === true ? (
            <span className="td__status__active">Active</span>
          ) : (
            <span className="td__status__inActive">InActive</span>
          )}
        </td>
        <td>
          <OptionsDropDownDrivers
            index={3}
            onToggle={handleDropdownToggle}
            onDetails={handleOpenVehicleDetails}
            onEdit={handleOpenModalEdit}
            onDelete={handleOpenDialog}
          />
        </td>
      </tr>

      {openVehicleDetails && (
        <ModalVehicleDetails
          vehicle={vehicle}
          handleOpenModal={() => handleOpenVehicleDetails()}
        />
      )}

      {openModalEdit && (
        <ModalEditVehicle
          vehicle={vehicle}
          handleOpenModal={() => handleOpenModalEdit()}
        />
      )}

      {openDialogDelete && (
        <Dialog
          title="Are you sure ?"
          handleOpenModal={handleOpenDialog}
          handleConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default VehicleRow;
