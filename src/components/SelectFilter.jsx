import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./SelectFilter.css";

const SelectFilter = ({ options = [], defaultValue = "", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="select-filter">
      <div className="select-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className="select-dropdown">
          {options.map((option, idx) => (
            <li
              key={idx}
              className={`option-item ${option === selected ? "selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option === selected && <FaCheck className="check-icon" />}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectFilter;
