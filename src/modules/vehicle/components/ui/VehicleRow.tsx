import React, { useState } from "react";
import OptionsDropDownDrivers from "../../../../components/driver/OptionsDropDownDrivers";
import Vehicle from "../../models/Vehicle";
import ModalAddVehicle from "../forms/ModalAddVehicle";
import ModalVehicleDetails from "../forms/ModalVehicleDetails";
import ModalEditVehicle from "../forms/ModalEditVehicle";
import VehicleService from "../../service/VehicleService";

interface VehicleRowProps {
  vehicle: Vehicle;
}

const VehicleRow: React.FC<VehicleRowProps> = ({ vehicle }) => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openVehicleDetails, setOpenVehicleDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const vehicleService = new VehicleService();

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

    
    try {
      await vehicleService.deleteVehicle(vehicle.registrationNumber);
    } catch (err) {
      console.log((err as Error).message);
    }


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
        <ModalEditVehicle vehicle={vehicle} handleOpenModal={() => handleOpenModalEdit()} />
      )}
    </>
  );
};

export default VehicleRow;
