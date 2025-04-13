import React from "react";
import SidebarAccordion from "./SidebarAccordion";

const filterData = [
  { title: "CUSTOMIZBLE", options: [], isCheckbox: false },
  {
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
    isCheckbox: true,
  },
  { title: "OCCASION", options: [], isCheckbox: false },
  { title: "WORK", options: [], isCheckbox: false },
  { title: "FABRIC", options: [], isCheckbox: false },
  { title: "SEGMENT", options: [], isCheckbox: false },
  { title: "SUITABLE FOR", options: [], isCheckbox: false },
  { title: "RAW MATERIALS", options: [], isCheckbox: false },
  { title: "PATTERN", options: [], isCheckbox: false },
];

const Sidebar = () => {
  return (
    <div
      style={{ width: "350px", padding: "10px", borderRight: "1px solid #eee" }}
    >
      {filterData.map((section, index) => (
        <SidebarAccordion
          key={index}
          title={section.title}
          options={section.options}
          isCheckbox={section.isCheckbox}
        />
      ))}
    </div>
  );
};

export default Sidebar;
