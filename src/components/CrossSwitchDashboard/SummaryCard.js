import React from "react";
import {
  DollarSignIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  TrendingUpIcon,
} from "../../Icons/PeachDashboardIcons";
import "../../styles/SummaryCard.css";

const SummaryCard = ({
  id,
  title,
  value,
  icon,
  iconColor,
  valueColor,
  backgroundColor,
  className,
}) => {
  // Function to render the appropriate icon based on the icon prop
  const renderIcon = () => {
    const iconProps = {
      width: 24,
      height: 24,
      color: iconColor,
    };

    switch (icon) {
      case "DollarSign":
        return <DollarSignIcon {...iconProps} />;
      case "CheckCircle":
        return <CheckCircleIcon {...iconProps} />;
      case "AlertTriangle":
        return <AlertTriangleIcon {...iconProps} />;
      case "TrendingUp":
        return <TrendingUpIcon {...iconProps} />;
      default:
        return <DollarSignIcon {...iconProps} />;
    }
  };

  return (
    <div className={`summary-card ${className}`} style={{ backgroundColor }}>
      <div className="card-header">
        <div className="card-title">{title}</div>
        <div className="card-icon" style={{ backgroundColor: iconColor }}>
          {renderIcon()}
        </div>
      </div>
      <div className="card-value" style={{ color: valueColor }}>
        {value}
      </div>
    </div>
  );
};

export default SummaryCard;
