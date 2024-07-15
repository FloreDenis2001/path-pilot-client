// OptionsDropDownRow.tsx

import {
  faFileExport,
  faFileImport,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";

interface OptionsPackageProps {
  index: number;
  onToggle: (index: number) => void;
  onAdd: () => void;
  onImport: () => void;
  onExport: () => void;
}

const OptionsPackage: React.FC<OptionsPackageProps> = ({
  index,
  onToggle,
  onAdd,
  onImport,
  onExport,
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
        <li onClick={() => onAdd()}>
          <FontAwesomeIcon className="dropdonw__icon" icon={faPlus} />
          <button>Add Package</button>
        </li>

        <li onClick={() => onImport()}>
          <FontAwesomeIcon className="dropdonw__icon" icon={faFileImport} />
          <button>Imports XML</button>
        </li>

        <li onClick={() => onExport()}>
          <FontAwesomeIcon className="dropdonw__icon" icon={faFileExport} />
          <button>Exports XML</button>
        </li>
      </ul>
    </div>
  );
};

export default OptionsPackage;
