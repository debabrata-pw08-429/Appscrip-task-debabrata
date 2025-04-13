import React, { useState } from "react";
import "./SidebarAccordion.css";

const SidebarAccordion = ({ title, options, isCheckbox = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleCheckbox = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleOpen}>
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {isCheckbox ? (
            <>
              <p className="sub-option" onClick={() => setSelected([])}>
                Unselect all
              </p>
              {options.map((opt, idx) => (
                <label key={idx} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt)}
                    onChange={() => handleCheckbox(opt)}
                  />
                  {opt}
                </label>
              ))}
            </>
          ) : (
            <p>All</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarAccordion;
