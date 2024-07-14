import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaEllipsisV, FaReceipt, FaTrash } from "react-icons/fa";

interface OptionsDropDownRowProps {
  index: number;
  onToggle: (index: number) => void;
  onDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
}
        
const OptionsDropDownDrivers: React.FC<OptionsDropDownRowProps> = ({
  index,
  onToggle,
  onDetails,
  onEdit,
  onDelete,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      className="dropdown"
      onClick={() => {
        handleSelect();
      }}
      ref={dropdownRef}
    >
      <div className="dropdown__toggle" id={`dropdown-${index}`}>
        <FaEllipsisV />
      </div>

        <ul className={isActive === false ? "dropdown__menu":"dropdown__menu active"}>
          <li onClick={()=>onDetails()}>
              <FaReceipt className="dropdonw__icon" />
              <button>Details</button>
          </li>

          <li onClick={()=>onEdit()}>
              <FaEdit className="dropdonw__icon" />
              <button>Edit</button>
          </li>

          <li onClick={()=>onDelete()}>
              <FaTrash className="dropdonw__icon" />
              <button>Delete</button>
          </li>
        </ul>
    </div>
  );
};

export default OptionsDropDownDrivers;
