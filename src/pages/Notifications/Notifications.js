import React, { useState, useEffect } from "react";
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
  const [notifications, setNotifications] = useState({});
  const [readStatus, setReadStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Initialize notifications with read/unread status
  useEffect(() => {
    const initializeNotifications = () => {
      setIsLoading(true);

      // Filter transaction alerts to only include those with valid transaction IDs
      const allTransactionAlerts = generateTransactionAlerts(
        crossSwitchDashboardData,
        peachDashboardData,
        ozowDashboardData
      );

      const transactionAlerts = allTransactionAlerts
        .filter((alert) => alert.transactionId && alert.gateway) // Only keep alerts with transaction ID and gateway
        .map((alert) => ({ ...alert, id: `ta_${alert.id}`, read: false }));

      // Filter system notifications to only include those with valid transaction IDs
      const allSystemNotifications = generateSystemNotifications(
        crossSwitchDashboardData,
        peachDashboardData,
        ozowDashboardData
      );

      const systemNotifications = allSystemNotifications
        .filter(
          (notification) => notification.transactionId && notification.gateway
        ) // Only keep notifications with transaction ID and gateway
        .map((notification) => ({
          ...notification,
          id: `sn_${notification.id}`,
          read: false,
        }));

      // Filter reconciliation reports to only include those with valid transaction IDs
      const allReconciliationReports = getNotificationTypeData(
        "reconciliationReports"
      );
      const reconciliationReports = allReconciliationReports
        .filter((report) => report.transactionId && report.gateway) // Only keep reports with transaction ID and gateway
        .map((report) => ({ ...report, id: `rr_${report.id}`, read: false }));

      // Filter security alerts to only include those with valid transaction IDs
      const allSecurityAlerts = getNotificationTypeData("securityAlerts");
      const securityAlerts = allSecurityAlerts
        .filter((alert) => alert.transactionId && alert.gateway) // Only keep alerts with transaction ID and gateway
        .map((alert) => ({ ...alert, id: `sa_${alert.id}`, read: false }));

      const notificationsData = {
        transactionAlerts,
        systemNotifications,
        reconciliationReports,
        securityAlerts,
      };

      setNotifications(notificationsData);

      // Initialize read status for all notifications
      const initialReadStatus = {};
      [
        ...transactionAlerts,
        ...systemNotifications,
        ...reconciliationReports,
        ...securityAlerts,
      ].forEach((notification) => {
        initialReadStatus[notification.id] = false; // Set as unread by default
      });
      setReadStatus(initialReadStatus);

      setIsLoading(false);
    };

    initializeNotifications();
  }, []);

  // Show loading state while initializing
  if (isLoading) {
    return (
      <div className="notifications-container">
        <div className="notifications-header">
          <h1 className="notifications-title">
            <span className="title-orange">Notifications</span>{" "}
            <span className="title-green">Center</span>
          </h1>
          <p className="notifications-subtitle">Loading notifications...</p>
        </div>
      </div>
    );
  }

  // Calculate dynamic counts with null checks
  const getUnreadCount = (category) => {
    if (!notifications[category] || !Array.isArray(notifications[category]))
      return 0;
    return notifications[category].filter((n) => !readStatus[n.id]).length;
  };

  const getTotalUnreadCount = () => {
    if (!notifications || Object.keys(notifications).length === 0) return 0;
    return Object.keys(notifications).reduce((total, category) => {
      return total + getUnreadCount(category);
    }, 0);
  };

  const getTotalNotificationsCount = () => {
    if (!notifications || Object.keys(notifications).length === 0) return 0;
    return Object.keys(notifications).reduce((total, category) => {
      return total + (notifications[category]?.length || 0);
    }, 0);
  };

  const getActionRequiredCount = () => {
    if (!notifications || Object.keys(notifications).length === 0) return 0;
    return Object.keys(notifications).reduce((total, category) => {
      return (
        total +
        (notifications[category]?.filter(
          (n) => n.actionRequired && !readStatus[n.id]
        ).length || 0)
      );
    }, 0);
  };

  const getHighPriorityCount = () => {
    if (!notifications || Object.keys(notifications).length === 0) return 0;
    return Object.keys(notifications).reduce((total, category) => {
      return (
        total +
        (notifications[category]?.filter(
          (n) => n.type === "error" && !readStatus[n.id]
        ).length || 0)
      );
    }, 0);
  };

  const handleCategoryClick = (categoryType) => {
    setSelectedCategory(categoryType);
    setShowDetailedView(true);

    // Mark all notifications in this category as read when viewed
    if (
      notifications &&
      notifications[categoryType] &&
      Array.isArray(notifications[categoryType])
    ) {
      const newReadStatus = { ...readStatus };
      notifications[categoryType].forEach((notification) => {
        newReadStatus[notification.id] = true;
      });
      setReadStatus(newReadStatus);
    }
  };

  const handleBackClick = () => {
    setShowDetailedView(false);
    setSelectedCategory(null);
  };

  // Mark individual notification as read
  const markAsRead = (notificationId) => {
    setReadStatus((prev) => ({
      ...prev,
      [notificationId]: true,
    }));
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    const newReadStatus = {};
    Object.keys(notifications).forEach((category) => {
      notifications[category].forEach((notification) => {
        newReadStatus[notification.id] = true;
      });
    });
    setReadStatus(newReadStatus);
  };

  // Handle action button clicks to navigate to specific transactions
  const handleActionButtonClick = (notification) => {
    // Mark as read when action is taken
    markAsRead(notification.id);

    // Only navigate if we have valid transaction data
    if (notification.transactionId && notification.gateway) {
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
    } else {
      console.warn(
        "Notification missing required transaction data:",
        notification
      );
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
    // Get notifications for the selected category safely
    const categoryNotifications = notifications[selectedCategory] || [];
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
              {categoryTitle} ({categoryNotifications.length})
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
          {categoryNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.type} ${
                notification.actionRequired ? "action-required" : ""
              }`}
            >
              <div className="notification-icon">
                {getStatusIcon(notification.type)}
              </div>
              <div className="notification-details">
                <div className="notification-title">{notification.title}</div>
                <div className="notification-description">
                  {notification.description}
                </div>
                <div className="notification-meta">
                  <span className="notification-timestamp">
                    {notification.timestamp}
                  </span>
                  {notification.transactionId && notification.gateway && (
                    <span className="transaction-info">
                      {notification.transactionId} • {notification.gateway}
                    </span>
                  )}
                </div>
              </div>
              {notification.actionRequired &&
                notification.transactionId &&
                notification.gateway && (
                  <button
                    className="action-button"
                    onClick={() => handleActionButtonClick(notification)}
                  >
                    {notification.actionButton || "Investigate"}
                  </button>
                )}
              {!notification.transactionId || !notification.gateway ? (
                <span className="info-only-badge">Info Only</span>
              ) : null}
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
            <div className="card-count">{getTotalNotificationsCount()}</div>
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
            <div className="card-count">{getTotalUnreadCount()}</div>
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
            <div className="card-count">{getActionRequiredCount()}</div>
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
            <div className="card-count">{getHighPriorityCount()}</div>
            <div className="card-label">High Priority</div>
          </div>
        </div>
      </div>

      {/* All Notifications Section */}
      <div className="all-notifications-section">
        <div className="all-notifications-header">
          <div className="header-left">
            <h2 className="all-notifications-title">All Notifications</h2>
            <span className="unread-badge">{getTotalUnreadCount()} Unread</span>
          </div>
          <button className="mark-all-read-btn" onClick={markAllAsRead}>
            Mark All as Read
          </button>
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
                <span className="category-count">
                  ({getUnreadCount("transactionAlerts")})
                </span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">
                {getUnreadCount("transactionAlerts")}
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
                <span className="category-count">
                  ({getUnreadCount("systemNotifications")})
                </span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">
                {getUnreadCount("systemNotifications")}
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
                <span className="category-count">
                  ({getUnreadCount("reconciliationReports")})
                </span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">
                {getUnreadCount("reconciliationReports")}
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
                  ({getUnreadCount("securityAlerts")})
                </span>
              </div>
            </div>
            <div className="category-right">
              <span className="category-unread">
                {getUnreadCount("securityAlerts")}
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
