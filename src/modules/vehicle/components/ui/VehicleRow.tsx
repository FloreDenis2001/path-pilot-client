import React, { useState } from "react";
import OptionsDropDownDrivers from "../../../../components/driver/OptionsDropDownDrivers";
import Vehicle from "../../models/Vehicle";
import ModalVehicleDetails from "../forms/ModalVehicleDetails";
import ModalEditVehicle from "../forms/ModalEditVehicle";
import VehicleService from "../../service/VehicleService";
import { set } from "react-hook-form";
import Toast from "../../../../components/Dialog";
import Dialog from "../../../../components/Dialog";

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
  const handleDeleteVehicle = async () => {
    setOpenDialogDelete(!openDialogDelete);
  };

  return (
    <>
      <tr>
        <td>{vehicle.id}</td>
        <td>{vehicle.registrationNumber}</td>
        <td>{vehicle.make}</td>
        <td>{vehicle.model}</td>
        <td>{vehicle.year}</td>
        <td>{vehicle.km}</td>
        <td>{vehicle.fuelType}</td>
        <td>{vehicle.fuelConsumption}</td>
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
            onDelete={handleDeleteVehicle}
          />
        </td>
      </tr>

      {openVehicleDetails && (
        <ModalVehicleDetails
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
          vehicleRegistrationNumber={vehicle.registrationNumber}
          title="Are you sure ?"
          handleOpenModal={() => handleDeleteVehicle()}
        />
      )}
    </>
  );
};

export default VehicleRow;
