import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  HomeIcon,
  ReportsIcon,
  LogoutIcon,
  EnvelopeIcon,
  BellIcon,
} from "../../Icons/SVGicons";
import crossSwitchLogo from "../../assets/cross-switch-logo-new.png";

const Navbar = ({ onLogout, activePage = "home" }) => {
  const navigate = useNavigate();
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  const toggleNotificationPopup = () => {
    setShowNotificationPopup(!showNotificationPopup);
  };

  const closeNotificationPopup = () => {
    setShowNotificationPopup(false);
  };

  // Sample transaction alerts for the popup
  const transactionAlerts = [
    {
      id: 1,
      type: "warning",
      status: "unmatched",
      title: "Unmatched Peach Payment Detected",
      description:
        "Transaction TXN1002 ($2,500.50) requires attention - amount discrepancy detected",
      timestamp: "2h ago",
      actionButton: "Investigate",
      actionRequired: true,
    },
    {
      id: 2,
      type: "info",
      status: "maintenance",
      title: "CrossSwitch System Maintenance",
      description: "Scheduled maintenance window starting at 2:00 AM UTC",
      timestamp: "1h ago",
      actionButton: null,
      actionRequired: false,
    },
    {
      id: 3,
      type: "error",
      status: "flagged",
      title: "Suspicious Activity Detected",
      description: "Transaction CS001237 flagged for review - R 450.75",
      timestamp: "3h ago",
      actionButton: "Investigate",
      actionRequired: true,
    },
    {
      id: 4,
      type: "warning",
      status: "unmatched",
      title: "Payment Verification Needed",
      description:
        "Transaction CS001245 unmatched - R 750.00 verification required",
      timestamp: "4h ago",
      actionButton: "Investigate",
      actionRequired: true,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "maintenance":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 12l2 2 4-4" />
            <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z" />
          </svg>
        );
      case "flagged":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        );
      case "unmatched":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        );
      default:
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "maintenance":
        return "#10b981"; // Green
      case "flagged":
        return "#f59e0b"; // Orange
      case "unmatched":
        return "#ef4444"; // Red
      default:
        return "#6b7280"; // Gray
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={crossSwitchLogo} alt="CrossSwitch" className="logo-image" />
        </div>

        {/* Navigation Items */}
        <div className="navbar-nav">
          <div
            className={`nav-item ${activePage === "home" ? "active" : ""}`}
            onClick={handleHomeClick}
          >
            <HomeIcon />
            <span>Home</span>
          </div>

          {activePage === "peach" && (
            <div className="nav-item active">
              <span>Peach Dashboard</span>
            </div>
          )}

          {activePage === "ozow" && (
            <div className="nav-item active">
              <span>Ozow Dashboard</span>
            </div>
          )}

          {activePage === "crossswitch" && (
            <div className="nav-item active">
              <span>CrossSwitch Dashboard</span>
            </div>
          )}

          {activePage === "absa" && (
            <div className="nav-item active">
              <span>ABSA Dashboard</span>
            </div>
          )}

          <div
            className={`nav-item ${activePage === "reports" ? "active" : ""}`}
            onClick={() => navigate("/reports")}
          >
            <ReportsIcon />
            <span>Reports</span>
          </div>

          <div
            className={`nav-item ${
              activePage === "notifications" ? "active" : ""
            }`}
            onClick={() => navigate("/notifications")}
          >
            <div className="notification-wrapper">
              <EnvelopeIcon />
            </div>
            <span>Notifications</span>
          </div>

          {/* Right Side Bell Icon */}
          <div className="navbar-right">
            <div
              className="nav-item bell-item"
              onClick={toggleNotificationPopup}
            >
              <div className="notification-wrapper">
                <BellIcon hasNotification={true} />
                <span className="notification-badge">9</span>
              </div>
            </div>
          </div>

          <div className="nav-item logout-item" onClick={onLogout}>
            <LogoutIcon />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Notification Popup */}
      {showNotificationPopup && (
        <div className="notification-popup-overlay">
          <div className="notification-popup">
            {/* Popup Header */}
            <div className="popup-header">
              <div className="popup-title">
                <BellIcon hasNotification={false} />
                <span>Notifications</span>
                <span className="notification-count">9</span>
              </div>
              <div className="popup-actions">
                <span className="mark-all-read">Mark all read</span>
                <button
                  className="close-popup"
                  onClick={closeNotificationPopup}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Popup Content */}
            <div className="popup-content">
              {transactionAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`notification-item ${alert.status}`}
                >
                  <div
                    className="notification-icon"
                    style={{ color: getStatusColor(alert.status) }}
                  >
                    {getStatusIcon(alert.status)}
                  </div>
                  <div className="notification-details">
                    <div className="notification-title">{alert.title}</div>
                    <div className="notification-description">
                      {alert.description}
                    </div>
                    <div className="notification-timestamp">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      {alert.timestamp}
                    </div>
                  </div>
                  {alert.actionButton && (
                    <button className="action-button">
                      {alert.actionButton}
                    </button>
                  )}
                  <div className="status-indicator"></div>
                </div>
              ))}
            </div>

            {/* Popup Footer */}
            <div className="popup-footer">
              <span
                className="go-to-notifications"
                onClick={() => {
                  navigate("/notifications");
                  closeNotificationPopup();
                }}
              >
                Go to notifications
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
