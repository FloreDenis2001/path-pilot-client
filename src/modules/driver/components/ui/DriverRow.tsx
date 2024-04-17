import React, { useState } from "react";
import OptionsDropDownDrivers from "../../../../components/driver/OptionsDropDownDrivers";

const DriverRow = () => {
  const [openDropdown, setOpenDropdown] = useState(-1);
  const [openDriverDetails, setOpenDriverDetails] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? -1 : index);
  };

  const handleOpenDriverDetails = () => {
    setOpenDriverDetails(!openDriverDetails);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(!openModalEdit);
  };

  const handleDeleteDriver = () => {
    console.log("Delete Driver");
  };

  return (
    <tr>
      <td>1</td>
      <td>Flore Denis</td>
      <td>floredenis907@yahoo.com</td>
      <td>994127721522</td>
      <td>0756789012</td>
      <td className="td__status ">
        <span className="td__status__active">Active</span>
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
  );
};

export default DriverRow;
