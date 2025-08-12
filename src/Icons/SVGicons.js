// User Icon (for email field)
export function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// Lock Icon (for password field)
export function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

// Eye Icon (for show/hide password)
export function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// Eye Slash Icon (for hidden password state)
export function EyeSlashIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

// Home Icon
export function HomeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 9.5L12 2l9 7.5v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

// Reports Icon (Chart/Bar Graph)
export function ReportsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

// Notifications Icon (Bell)
export function NotificationsIcon({ hasNotification = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      {hasNotification && (
        <circle
          cx="18"
          cy="6"
          r="3"
          fill="#ff6b35"
          stroke="#fff"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

// Logout Icon
export function LogoutIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16,17 21,12 16,7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

// Calendar Plus Icon
export function CalendarPlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="10" y1="14" x2="14" y2="14" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
}

// Document Exclamation Icon
export function DocumentExclamationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14,2 14,8 20,8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10,9 9,9 8,9" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

// Users Icon
export function UsersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Download Icon
export function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

// Bar Chart Icon
export function BarChartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

// Envelope Icon
export function EnvelopeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer rectangle */}
      <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
      {/* Envelope flap */}
      <path d="M4 6l8 6 8-6" />
    </svg>
  );
}

// Bell Icon (for separate notifications tab)
export function BellIcon({ hasNotification = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      {hasNotification && (
        <circle
          cx="18"
          cy="6"
          r="3"
          fill="#ff6b35"
          stroke="#fff"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}



//new icons:
// Modern SVG Icons for CrossSwitch Notification System
// Clean, minimal design with consistent styling

const NotificationIcons = {
  // Transaction Alerts Icon
  transactionAlerts: (size = 24, color = "#10B981") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="${color}"/>
      <path d="M21 9V7L18.5 9.5C17.79 8.89 16.79 8.5 15.5 8.5H14.5C14.22 7.09 12.86 6 11.25 6S8.28 7.09 8 8.5H7.5C5.01 8.5 3 10.51 3 13V16C3 18.49 5.01 20.5 7.5 20.5H16.5C18.99 20.5 21 18.49 21 16V13C21 11.71 20.61 10.71 20 10L21 9Z" fill="${color}" opacity="0.7"/>
      <circle cx="9" cy="13" r="1.5" fill="white"/>
      <circle cx="15" cy="13" r="1.5" fill="white"/>
      <path d="M7 17.5H17" stroke="white" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // System Notifications Icon
  systemNotifications: (size = 24, color = "#3B82F6") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="${color}"/>
      <path d="M2 17L12 22L22 17" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
      <path d="M2 12L12 17L22 12" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
    </svg>
  `,

  // Reconciliation Reports Icon
  reconciliationReports: (size = 24, color = "#8B5CF6") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="16" rx="2" fill="${color}" opacity="0.1"/>
      <path d="M7 8H17M7 12H17M7 16H13" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
      <circle cx="17" cy="6" r="3" fill="${color}"/>
      <path d="M15.5 6L16.5 7L18.5 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  // Action Required Icon
  actionRequired: (size = 24, color = "#F59E0B") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L21.5 21H2.5L12 2Z" fill="${color}"/>
      <path d="M12 8V13" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="12" cy="17" r="1.2" fill="white"/>
    </svg>
  `,

  // High Priority Icon
  highPriority: (size = 24, color = "#EF4444") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="${color}"/>
      <path d="M12 6V13" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <circle cx="12" cy="17.5" r="1.5" fill="white"/>
    </svg>
  `,

  // General Notification Bell
  notificationBell: (size = 24, color = "#6B7280") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" fill="${color}"/>
      <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,

  // Unread Badge
  unreadBadge: (size = 24, color = "#EF4444") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" fill="${color}"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
    </svg>
  `,

  // Mark as Read Checkmark
  markAsRead: (size = 24, color = "#10B981") => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="${color}"/>
      <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `
};

// Usage Examples:

// React Component Usage
const IconComponent = ({ type, size = 24, color }) => {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: NotificationIcons[type](size, color) 
      }} 
    />
  );
};

// Direct HTML Usage
const createIcon = (type, size = 24, color) => {
  const iconElement = document.createElement('div');
  iconElement.innerHTML = NotificationIcons[type](size, color);
  return iconElement.firstChild;
};

// CSS Classes for consistent styling
const iconStyles = `
.notification-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.notification-icon:hover {
  transform: scale(1.1);
}

.notification-icon-container {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.notification-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #EF4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
}
`;

// Export for ES6 modules
export { NotificationIcons, IconComponent, createIcon, iconStyles };

// For CommonJS
// module.exports = { NotificationIcons, IconComponent, createIcon, iconStyles };