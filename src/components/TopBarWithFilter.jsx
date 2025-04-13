import React from "react";
import SelectFilter from "./SelectFilter";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./TopBarWithFilter.css";

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const TopBarWithFilter = ({
  totalItems = 0,
  onSortChange,
  showFilter,
  onShowFilter,
}) => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <span className="item-count">{totalItems} ITEMS</span>

        {showFilter ? (
          <span className="show-filter" onClick={onShowFilter}>
            <FaAngleLeft size={12} /> HIDE FILTER
          </span>
        ) : (
          <span className="show-filter" onClick={onShowFilter}>
            <FaAngleRight size={12} /> SHOW FILTER
          </span>
        )}
      </div>
      <div className="topbar-right">
        <SelectFilter
          options={sortOptions}
          defaultValue="RECOMMENDED"
          onSelect={onSortChange}
        />
      </div>
    </div>
  );
};

export default TopBarWithFilter;
