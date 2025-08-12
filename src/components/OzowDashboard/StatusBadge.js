import React from "react";
import "../../styles/StatusBadge.css";

const StatusBadge = ({ type, text, className = "" }) => {
  const getBadgeClass = (statusType) => {
    switch (statusType) {
      case "matched":
        return "matched";
      case "unmatched":
        return "unmatched";
      case "flagged":
        return "flagged";
      default:
        return "matched";
    }
  };

  return (
    <span className={`status-badge ${getBadgeClass(type)} ${className}`}>
      {text}
    </span>
  );
};

export default StatusBadge;
