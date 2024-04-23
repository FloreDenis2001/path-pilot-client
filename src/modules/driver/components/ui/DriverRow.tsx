import React, { useState } from "react";
import OptionsDropDownDrivers from "../../../../components/driver/OptionsDropDownDrivers";
import Driver from "../../models/Driver";
import ModalDriversDetails from "../froms/ModalDriversDetails";
import ModalEditDriver from "../froms/ModalEditDriver";
import UserService from "../../../user/service/UserService";

interface DriverRowProps {
  driver: Driver;
}

const DriverRow: React.FC<DriverRowProps> = ({ driver }) => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openDriverDetails, setOpenDriverDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const userServices = new UserService();

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenDriverDetails = () => {
    setOpenDriverDetails(!openDriverDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };

  const handleDeleteDriver = async () => {
    try {
      // await userServices.deleteUser(driver.id);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  return (
    <>
      <tr>
        <td>
          {driver.firstName} {driver.lastName}
        </td>
        <td>{driver.username}</td>
        <td>{driver.email}</td>
        <td>{driver.licenseNumber}</td>
        <td>{driver.phone}</td>
        <td>{driver.salary}</td>
        <td className="td__status ">
          {!driver.isAvailable ? (
            <span className="td__status__active">Active</span>
          ) : (
            <span className="td__status__inActive">InActive</span>
          )}
        </td>

        <td>
          <OptionsDropDownDrivers
            index={3}
            onToggle={handleDropdownToggle}
            onDetails={handleOpenDriverDetails}
            onEdit={handleOpenModalEdit}
            onDelete={handleDeleteDriver}
          />
        </td>
      </tr>

      {openDriverDetails && (
        <ModalDriversDetails
          handleOpenModal={() => handleOpenDriverDetails()}
        />
      )}

      {openModalEdit && (
        <ModalEditDriver driver={driver} handleOpenModal={() => handleOpenModalEdit()} />
      )}
    </>
  );
};

export default DriverRow;
