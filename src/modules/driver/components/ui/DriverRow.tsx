import React, { useContext, useState } from "react";
import Driver from "../../models/Driver";
import ModalDriversDetails from "../froms/ModalDriversDetails";
import ModalEditDriver from "../froms/ModalEditDriver";
import UserService from "../../../user/service/UserService";
import Dialog from "../../../core/components/Dialog";
import DriverService from "../../service/DriverService";
import { LoginContext } from "../../../context/LoginProvider";
import LoginContextType from "../../../user/models/LoginContextType";
import OptionsDropDownDrivers from "./OptionsDropDownDrivers";
import { toast } from "react-toastify";

interface DriverRowProps {
  driver: Driver;
}

const DriverRow: React.FC<DriverRowProps> = ({ driver }) => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openDriverDetails, setOpenDriverDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const driverService= new DriverService();
  const {user}= useContext(LoginContext) as LoginContextType;

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenDriverDetails = () => {
    setOpenDriverDetails(!openDriverDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };

  const handleOpenDialog= async () => {
    setOpenDialogDelete(!openDialogDelete);
  };

  const handleDeleteDriver = async () => {
    try {
      await driverService.deleteDriver(driver.licenseNumber,driver.email,user.companyRegistrationNumber);
      toast.success("Driver deleted successfully");
    } catch (err) {
      toast.error("Error deleting driver");
    }
    window.location.reload();
    handleOpenDialog();
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
            <span className="td__status__active">On Drive</span>
          ) : (
            <span className="td__status__inActive">Off Drive</span>
          )}
        </td>

        <td>
          <OptionsDropDownDrivers
            index={3}
            onToggle={handleDropdownToggle}
            onDetails={handleOpenDriverDetails}
            onEdit={handleOpenModalEdit}
            onDelete={handleOpenDialog}
          />
        </td>
      </tr>

      {openDriverDetails && (
        <ModalDriversDetails
          driver={driver}
          handleOpenModal={handleOpenDriverDetails}
        />
      )}

      {openModalEdit && (
        <ModalEditDriver driver={driver} handleOpenModal={handleOpenModalEdit} />
      )}

      {openDialogDelete && (
        <Dialog
          title="Are you sure ?"
          handleOpenModal={handleOpenDialog}
          handleConfirm={handleDeleteDriver}
        />
      )}
    </>
  );
};

export default DriverRow;
