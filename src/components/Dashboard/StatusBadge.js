import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ type, text, className }) => {
  return <span className={`status-badge ${className}`}>{text}</span>;
};

export default StatusBadge;
