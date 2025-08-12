import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";
import {
  getNotificationTypeData,
  getNotificationTypeTitle,
  generateTransactionAlerts,
  generateSystemNotifications,
} from "../../mockData/notificationsData";
import { crossSwitchDashboardData } from "../../mockData/crossSwitchDashboardData";
import { peachDashboardData } from "../../mockData/peachDashboardData";
import { ozowDashboardData } from "../../mockData/ozowDashboardData";
import { NotificationIcons } from "../../Icons/SVGicons";
import { EnvelopeIcon } from "../../Icons/SVGicons";

function Notifications() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const navigate = useNavigate();

  // Generate dynamic alerts based on actual transaction data
  const dynamicTransactionAlerts = generateTransactionAlerts(
    crossSwitchDashboardData,
    peachDashboardData,
    ozowDashboardData
  );

  const dynamicSystemNotifications = generateSystemNotifications(
    crossSwitchDashboardData,
    peachDashboardData,
    ozowDashboardData
  );

  // Calculate total notifications count
  const totalNotifications =
    13 + // Transaction alerts (fixed count based on actual data)
    4 + // System notifications
    4 + // Reconciliation reports
    1; // Security alerts

  const handleCategoryClick = (categoryType) => {
    setSelectedCategory(categoryType);
    setShowDetailedView(true);
  };

  const handleBackClick = () => {
    setShowDetailedView(false);
    setSelectedCategory(null);
  };

  // Handle action button clicks to navigate to specific transactions
  const handleActionButtonClick = (notification) => {
    if (notification.transactionId) {
      // Determine which dashboard to navigate to based on gateway
      let dashboardPath = "/";
      let searchParams = "";

      switch (notification.gateway) {
        case "CrossSwitch":
          dashboardPath = "/crossswitch";
          searchParams = `?transactionId=${notification.transactionId}`;
          break;
        case "PeachPayment":
          dashboardPath = "/peach";
          searchParams = `?transactionId=${notification.transactionId}`;
          break;
        case "Ozow":
          dashboardPath = "/ozow";
          searchParams = `?transactionId=${notification.transactionId}`;
          break;
        default:
          dashboardPath = "/";
      }

      // Show success message
      console.log(
        `Navigating to ${notification.transactionId} in ${notification.gateway} dashboard`
      );

      // Navigate to the dashboard with the transaction ID
      navigate(`${dashboardPath}${searchParams}`);
    }
  };

  const getStatusIcon = (type) => {
    switch (type) {
      case "success":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#10b981" />
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      case "warning":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#f59e0b" />
            <path
              d="M12 9v3m0 3h.01"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      case "error":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#ef4444" />
            <path
              d="M12 9v3m0 3h.01"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      case "info":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#3b82f6" />
            <path
              d="M12 16v-4m0-4h.01"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusColor = (type) => {
    switch (type) {
      case "success":
        return "#f0fdf4";
      case "warning":
        return "#fefce8";
      case "error":
        return "#fef2f2";
      case "info":
        return "#eff6ff";
      default:
        return "#f8fafc";
    }
  };

  if (showDetailedView && selectedCategory) {
    const getNotifications = () => {
      if (!selectedCategory) return [];

      if (selectedCategory === "transactionAlerts") {
        return dynamicTransactionAlerts;
      } else if (selectedCategory === "systemNotifications") {
        return dynamicSystemNotifications;
      }

      return getNotificationTypeData(selectedCategory);
    };

    const notifications = getNotifications();
    const categoryTitle = getNotificationTypeTitle(selectedCategory);
    const categoryIcon =
      selectedCategory === "transactionAlerts" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            stroke="#0f5132"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ) : selectedCategory === "systemNotifications" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#0f5132"
          />
        </svg>
      ) : selectedCategory === "reconciliationReports" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 3v18h18" stroke="#0f5132" strokeWidth="2" fill="none" />
          <path d="M18 7v10" stroke="#0f5132" strokeWidth="2" fill="none" />
          <path d="M12 11v6" stroke="#0f5132" strokeWidth="2" fill="none" />
          <path d="M6 13v4" stroke="#0f5132" strokeWidth="2" fill="none" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            fill="#0f5132"
          />
          <line x1="12" y1="9" x2="12" y2="13" stroke="white" strokeWidth="2" />
          <line
            x1="12"
            y1="17"
            x2="12.01"
            y2="17"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      );

    return (
      <div className="notifications-container">
        <div className="detailed-notifications-header">
          <button className="back-button" onClick={handleBackClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                stroke="#0f5132"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            Back to Notifications
          </button>
          <div className="category-header">
            <div className="category-icon">{categoryIcon}</div>
            <h2 className="category-title">
              {categoryTitle} ({notifications.length})
            </h2>
          </div>
          <div className="header-chevron">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="#64748b"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="detailed-notifications-list">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="notification-item"
              style={{ backgroundColor: getStatusColor(notification.type) }}
            >
              <div className="notification-left">
                <div className="status-indicator">
                  {getStatusIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <h3 className="notification-title">{notification.title}</h3>
                  <p className="notification-description">
                    {notification.description}
                  </p>
                  <div className="notification-meta">
                    <span className="timestamp">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="#64748b"
                          strokeWidth="2"
                          fill="none"
                        />
                        <polyline
                          points="12,6 12,12 16,14"
                          stroke="#64748b"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                      {notification.timestamp}
                    </span>
                  </div>
                </div>
              </div>
              <div className="notification-right">
                <button
                  className="action-button primary"
                  onClick={() => handleActionButtonClick(notification)}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  {notification.actionButton}
                </button>
                {notification.actionRequired && (
                  <button className="action-button secondary">
                    Action Required
                  </button>
                )}
                <div className="item-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="#64748b"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="notifications-container">
      {/* Notifications Center Header */}
      <div className="notifications-header">
        <h1 className="notifications-title">
          <span className="title-orange">Notifications</span>{" "}
          <span className="title-green">Center</span>
        </h1>
        <p className="notifications-subtitle">
          Stay updated with transaction alerts, system notifications, and
          reconciliation reports
        </p>
      </div>

      {/* Notifications Summary Cards */}
      <div className="notifications-summary">
        <div className="notification-card">
          <div className="card-icon envelope-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect
                x="2"
                y="6"
                width="20"
                height="12"
                rx="2"
                ry="2"
                fill="#ff6b35"
                stroke="#ff6b35"
                strokeWidth="2"
              />
              <path
                d="M4 6l8 6 8-6"
                fill="white"
                stroke="#ff6b35"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="card-content">
            <div className="card-count">{totalNotifications}</div>
            <div className="card-label">Total Notifications</div>
          </div>
        </div>

        <div className="notification-card">
          <div className="card-icon eye-icon">
            <div
              dangerouslySetInnerHTML={{
                __html: NotificationIcons.unreadBadge(24, "#EF4444"),
              }}
            />
          </div>
          <div className="card-content">
            <div className="card-count">9</div>
            <div className="card-label">Unread</div>
          </div>
        </div>

        <div className="notification-card">
          <div className="card-icon warning-icon">
            <div
              dangerouslySetInnerHTML={{
                __html: NotificationIcons.actionRequired(24, "#F59E0B"),
              }}
            />
          </div>
          <div className="card-content">
            <div className="card-count">8</div>
            <div className="card-label">Action Required</div>
          </div>
        </div>

        <div className="notification-card">
          <div className="card-icon priority-icon">
            <div
              dangerouslySetInnerHTML={{
                __html: NotificationIcons.highPriority(24, "#EF4444"),
              }}
            />
          </div>
          <div className="card-content">
            <div className="card-count">3</div>
            <div className="card-label">High Priority</div>
          </div>
        </div>
      </div>

      {/* All Notifications Section */}
      <div className="all-notifications-section">
        <div className="all-notifications-header">
          <div className="header-left">
            <h2 className="all-notifications-title">All Notifications</h2>
            <span className="unread-badge">9 Unread</span>
          </div>
          <button className="mark-all-read-btn">Mark All as Read</button>
        </div>

        <div className="notification-categories">
          <div
            className="category-card"
            onClick={() => handleCategoryClick("transactionAlerts")}
          >
            <div className="category-left">
              <div className="category-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    stroke="#0f5132"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="category-info">
                <span className="category-name">Transaction Alerts</span>
                <span className="category-count">(13)</span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">13</span>
              <svg
                className="chevron-right"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryClick("systemNotifications")}
          >
            <div className="category-left">
              <div className="category-icon">
                <div
                  dangerouslySetInnerHTML={{
                    __html: NotificationIcons.systemNotifications(
                      20,
                      "#3B82F6"
                    ),
                  }}
                />
              </div>
              <div className="category-info">
                <span className="category-name">System Notifications</span>
                <span className="category-count">(4)</span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">4</span>
              <svg
                className="chevron-right"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryClick("reconciliationReports")}
          >
            <div className="category-left">
              <div className="category-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3v18h18"
                    stroke="#0f5132"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M18 7v10"
                    stroke="#0f5132"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 11v6"
                    stroke="#0f5132"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M6 13v4"
                    stroke="#0f5132"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="category-info">
                <span className="category-name">Reconciliation Reports</span>
                <span className="category-count">(4)</span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">4</span>
              <svg
                className="chevron-right"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div
            className="category-card"
            onClick={() => handleCategoryClick("securityAlerts")}
          >
            <div className="category-left">
              <div className="category-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    fill="#0f5132"
                  />
                  <line
                    x1="12"
                    y1="9"
                    x2="12"
                    y2="13"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12.01"
                    y2="17"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="category-info">
                <span className="category-name">Security & Pattern Alerts</span>
                <span className="category-count">
                  ({getNotificationTypeData("securityAlerts").length})
                </span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">
                {getNotificationTypeData("securityAlerts").length}
              </span>
              <svg
                className="chevron-right"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#64748b"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
