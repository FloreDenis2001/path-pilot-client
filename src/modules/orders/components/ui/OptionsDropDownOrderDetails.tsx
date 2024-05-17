// OptionsDropDownRow.tsx

import { faFilePdf, faTrash, faTruckRampBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaEllipsisV, FaPrint, FaReceipt } from "react-icons/fa";

interface OptionsDropDownRowProps {
  index: number;
  onToggle: (index: number) => void;
  onMarkDevivered: () => void;
  onDownload: () => void;
  onPrint: () => void;
  onDelete: () => void;
}

const OptionsDropDownOrderDetails: React.FC<OptionsDropDownRowProps> = ({
  index,
  onToggle,
  onMarkDevivered,
  onDownload,
  onPrint,
  onDelete,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = () => {
    setIsActive(!isActive);
    onToggle(index);
  };

  return (
    <div
      className="dropdown dropdown__order-details"
      onClick={() => {
        handleSelect();
      }}
      ref={dropdownRef}
    >
      <div className="dropdown__toggle" id={`dropdown-${index}`}>
        <FaEllipsisV />
      </div>

      <ul
        className={
          isActive === false ? "dropdown__menu " : "dropdown__menu dropdown__menu__modal active"
        }
      >
        <li onClick={() => onMarkDevivered()}>
          <a href="#">
           <FontAwesomeIcon icon={faTruckRampBox} className="dropdonw__icon"  />
            <button>Mark as Assigned</button>
          </a>
        </li>


        <li onClick={() => onPrint()}>
          <a href="#">
          <FontAwesomeIcon icon={faTrash} className="dropdonw__icon" />
            <button>Delete</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OptionsDropDownOrderDetails;
