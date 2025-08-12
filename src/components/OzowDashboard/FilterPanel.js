import React from "react";
import {
  FilterIcon,
  CalendarIcon,
  SearchIcon,
  ChevronDownIcon,
  XIcon,
} from "../../Icons/PeachDashboardIcons";
import "../../styles/FilterPanel.css";

const FilterPanel = ({
  filters,
  filterOptions,
  onFilterChange,
  onClearFilters,
}) => {
  const handleInputChange = (name, value) => {
    onFilterChange(name, value);
  };

  const handleDateRangeChange = (type, value) => {
    onFilterChange("dateRange", {
      ...filters.dateRange,
      [type]: value,
    });
  };

  const hasActiveFilters = () => {
    return Object.values(filters).some((value) => {
      if (typeof value === "object") {
        return Object.values(value).some((v) => v !== "");
      }
      return value !== "";
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <FilterIcon
          className="filter-header-icon"
          width={24}
          height={24}
          color="#2D6A5A"
        />
        <span>Filters</span>
      </div>

      <div className="filter-grid">
        {/* Date Range */}
        <div className="filter-input date-input">
          <label>Date Range</label>
          <div className="date-range-inputs">
            <div className="date-input-group">
              <CalendarIcon
                className="input-icon"
                width={16}
                height={16}
                color="#6B7280"
              />
              <input
                type="date"
                value={filters.dateRange.start}
                onChange={(e) => handleDateRangeChange("start", e.target.value)}
                placeholder="Start date"
              />
            </div>
            <div className="date-input-group">
              <CalendarIcon
                className="input-icon"
                width={16}
                height={16}
                color="#6B7280"
              />
              <input
                type="date"
                value={filters.dateRange.end}
                onChange={(e) => handleDateRangeChange("end", e.target.value)}
                placeholder="End date"
              />
            </div>
          </div>
        </div>

        {/* Payment Type */}
        <div className="filter-input select-input">
          <label>Payment Type</label>
          <div className="select-wrapper">
            <select
              value={filters.paymentType}
              onChange={(e) => handleInputChange("paymentType", e.target.value)}
            >
              {filterOptions.paymentTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              className="select-arrow"
              width={16}
              height={16}
              color="#6B7280"
            />
          </div>
        </div>

        {/* Status */}
        <div className="filter-input select-input">
          <label>Status</label>
          <div className="select-wrapper">
            <select
              value={filters.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
            >
              {filterOptions.statuses.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              className="select-arrow"
              width={16}
              height={16}
              color="#6B7280"
            />
          </div>
        </div>

        {/* Reference/CS+ ID */}
        <div className="filter-input search-input">
          <label>Reference/CS+ ID</label>
          <div className="search-input-group">
            <SearchIcon
              className="input-icon"
              width={16}
              height={16}
              color="#6B7280"
            />
            <input
              type="text"
              value={filters.reference}
              onChange={(e) => handleInputChange("reference", e.target.value)}
              placeholder="Search reference..."
            />
          </div>
        </div>

        {/* Amount Min */}
        <div className="filter-input number-input">
          <label>Amount (Min)</label>
          <input
            type="number"
            value={filters.amountMin}
            onChange={(e) => handleInputChange("amountMin", e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </div>

        {/* Amount Max */}
        <div className="filter-input number-input">
          <label>Amount (Max)</label>
          <input
            type="number"
            value={filters.amountMax}
            onChange={(e) => handleInputChange("amountMax", e.target.value)}
            placeholder="999999.99"
            step="0.01"
            min="0"
          />
        </div>

        {/* Merchant Group */}
        <div className="filter-input select-input">
          <label>Merchant Group</label>
          <div className="select-wrapper">
            <select
              value={filters.merchantGroup}
              onChange={(e) =>
                handleInputChange("merchantGroup", e.target.value)
              }
            >
              {filterOptions.merchantGroups.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon
              className="select-arrow"
              width={16}
              height={16}
              color="#6B7280"
            />
          </div>
        </div>

        {/* Merchant Name */}
        <div className="filter-input text-input">
          <label>Merchant Name</label>
          <input
            type="text"
            value={filters.merchantName}
            onChange={(e) => handleInputChange("merchantName", e.target.value)}
            placeholder="Search merchant..."
          />
        </div>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters() && (
        <button className="clear-filters-btn" onClick={onClearFilters}>
          <XIcon width={16} height={16} color="#374151" />
          <span>Clear Filters</span>
        </button>
      )}
    </div>
  );
};

export default FilterPanel;
