import React from "react";
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

  const handleHomeClick = () => {
    navigate("/");
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
            <div className="nav-item bell-item">
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
    </nav>
  );
};

export default Navbar;
