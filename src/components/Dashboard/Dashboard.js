import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData] = useState([
    {
      id: "peach",
      title: "Peach",
      status: {
        type: "success",
        text: "On Track",
        className: "status-success",
      },
      progress: {
        percentage: 94.2,
        color: "#22C55E",
        strokeWidth: 8,
      },
      metrics: {
        totalTransactions: {
          label: "Total Transactions",
          value: "15,420",
          className: "metric-total",
        },
        matched: {
          label: "Matched",
          value: "14,526",
          className: "metric-matched",
          color: "#22C55E",
        },
        unmatched: {
          label: "Unmatched",
          value: "894",
          className: "metric-unmatched",
          color: "#EF4444",
        },
        exceptions: {
          label: "Exceptions",
          value: "12",
          className: "metric-exceptions",
          color: "#F59E0B",
        },
      },
      indicatorColor: "#FFA07A",
    },
    {
      id: "ozow",
      title: "OZOW",
      status: {
        type: "warning",
        text: "Late",
        className: "status-warning",
      },
      progress: {
        percentage: 88.7,
        color: "#F59E0B",
        strokeWidth: 8,
      },
      metrics: {
        totalTransactions: {
          label: "Total Transactions",
          value: "8,756",
          className: "metric-total",
        },
        matched: {
          label: "Matched",
          value: "7,767",
          className: "metric-matched",
          color: "#22C55E",
        },
        unmatched: {
          label: "Unmatched",
          value: "989",
          className: "metric-unmatched",
          color: "#EF4444",
        },
        exceptions: {
          label: "Exceptions",
          value: "8",
          className: "metric-exceptions",
          color: "#F59E0B",
        },
      },
      indicatorColor: "#F59E0B",
    },
    {
      id: "crossswitch",
      title: "CrossSwitch",
      status: {
        type: "success",
        text: "On Track",
        className: "status-success",
      },
      progress: {
        percentage: 96.8,
        color: "#2D6A5A",
        strokeWidth: 8,
      },
      metrics: {
        totalTransactions: {
          label: "Total Transactions",
          value: "23,104",
          className: "metric-total",
        },
        matched: {
          label: "Matched",
          value: "22,365",
          className: "metric-matched",
          color: "#22C55E",
        },
        unmatched: {
          label: "Unmatched",
          value: "739",
          className: "metric-unmatched",
          color: "#EF4444",
        },
        exceptions: {
          label: "Exceptions",
          value: "4",
          className: "metric-exceptions",
          color: "#F59E0B",
        },
      },
      indicatorColor: "#2D6A5A",
    },
  ]);

  const handleViewDashboard = (cardId) => {
    if (cardId === "peach") {
      navigate("/peach");
    } else if (cardId === "ozow") {
      navigate("/ozow");
    } else if (cardId === "crossswitch") {
      navigate("/crossswitch");
    } else {
      console.log(`Navigating to ${cardId} dashboard`);
      // Future implementation for other dashboards
    }
  };

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1 className="main-title" style={{ color: "#2d6a5a" }}>
          Reconciliation <span className="dashboard-word">Dashboard</span>
        </h1>
        <p
          className="subtitle"
          style={{
            fontSize: "1.25rem",
            color: "#64748b",
            margin: "0",
            lineHeight: "1.6",
            maxWidth: "600px",
          }}
        >
          Monitor transaction matching across all payment sources
        </p>
      </div>

      {/* Dashboard Cards Grid */}
      <div className="dashboard-grid">
        {dashboardData.map((card) => (
          <DashboardCard
            key={card.id}
            card={card}
            onViewDashboard={handleViewDashboard}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
