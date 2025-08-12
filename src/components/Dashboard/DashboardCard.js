import React from "react";
import CircularProgress from "./CircularProgress";
import StatusBadge from "./StatusBadge";
import "./DashboardCard.css";

const DashboardCard = ({ card, onViewDashboard }) => {
  const handleCardClick = () => {
    onViewDashboard(card.id);
  };

  return (
    <div className="dashboard-card" onClick={handleCardClick}>
      {/* Card Header */}
      <div className="card-header">
        <div className="card-title">
          <div
            className="card-indicator"
            style={{ backgroundColor: card.indicatorColor }}
          ></div>
          <span>{card.title}</span>
        </div>
        <StatusBadge
          type={card.status.type}
          text={card.status.text}
          className={card.status.className}
        />
      </div>

      {/* Progress Section */}
      <div className="progress-container">
        <CircularProgress
          percentage={card.progress.percentage}
          color={card.progress.color}
          strokeWidth={card.progress.strokeWidth}
        />
      </div>

      {/* Metrics Section */}
      <div className="metrics-container">
        <div className="metric-row">
          <span className="metric-label">
            {card.metrics.totalTransactions.label}
          </span>
          <span className="metric-value">
            {card.metrics.totalTransactions.value}
          </span>
        </div>

        <div className="metric-row">
          <span className="metric-label">{card.metrics.matched.label}</span>
          <span
            className="metric-value"
            style={{ color: card.metrics.matched.color }}
          >
            {card.metrics.matched.value}
          </span>
        </div>

        <div className="metric-row">
          <span className="metric-label">{card.metrics.unmatched.label}</span>
          <span
            className="metric-value"
            style={{ color: card.metrics.unmatched.color }}
          >
            {card.metrics.unmatched.value}
          </span>
        </div>

        <div className="metric-row">
          <span className="metric-label">{card.metrics.exceptions.label}</span>
          <span
            className="metric-value"
            style={{ color: card.metrics.exceptions.color }}
          >
            {card.metrics.exceptions.value}
          </span>
        </div>
      </div>

      {/* View Dashboard Button */}
      <button className="view-dashboard-btn">View Dashboard →</button>
    </div>
  );
};

export default DashboardCard;
