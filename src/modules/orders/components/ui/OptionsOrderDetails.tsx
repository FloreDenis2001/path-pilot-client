// OptionsDropDownRow.tsx

import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaEllipsisV, FaPrint, FaReceipt } from "react-icons/fa";

interface OptionsOrderDetailsProps {
  index: number;
  onToggle: (index: number) => void;
  onDelete: () => void;
  onEdit: () => void;
  onPrint: () => void;
}

const OptionsOrderDetails: React.FC<OptionsOrderDetailsProps> = ({
  index,
  onToggle,
  onDelete,
  onEdit,
  onPrint,
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
      className="dropdown"
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
          isActive === false ? "dropdown__menu" : "dropdown__menu active"
        }
      >
        <li onClick={() => onPrint()}>
          <a href="#">
            <FaPrint className="dropdonw__icon" />
            <button>Print Order</button>
          </a>
        </li>
        <li onClick={() => onEdit()}>
          <a href="#">
            <FaEdit className="dropdonw__icon" />
            <button>Edit</button>
          </a>
        </li>

        <li onClick={() => onDelete()}>
          <a href="#">
            <FaReceipt className="dropdonw__icon" />
            <button>Delete</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OptionsOrderDetails;
