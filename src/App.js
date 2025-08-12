import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import HelloWorld from "./pages/Home/Home";
import PeachDashboard from "./components/PeachDashboard/PeachDashboard";
import OzowDashboard from "./components/OzowDashboard/OzowDashboard";
import CrossSwitchDashboard from "./components/CrossSwitchDashboard/CrossSwitchDashboard";
import Navbar from "./components/Navbar/Navbar";
import Reports from "./pages/Reports/Reports";
import Notifications from "./pages/Notifications/Notifications";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Wrapper component to add navbar to authenticated pages
  const AuthenticatedPage = ({ children, activePage }) => (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      <Navbar onLogout={handleLogout} activePage={activePage} />
      <div style={{ minHeight: "calc(100vh - 64px)" }}>{children}</div>
    </div>
  );

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <Routes>
            <Route
              path="/"
              element={
                <AuthenticatedPage activePage="home">
                  <HelloWorld onLogout={handleLogout} />
                </AuthenticatedPage>
              }
            />
            <Route
              path="/peach"
              element={
                <AuthenticatedPage activePage="peach">
                  <PeachDashboard />
                </AuthenticatedPage>
              }
            />
            <Route
              path="/ozow"
              element={
                <AuthenticatedPage activePage="ozow">
                  <OzowDashboard />
                </AuthenticatedPage>
              }
            />
            <Route
              path="/crossswitch"
              element={
                <AuthenticatedPage activePage="crossswitch">
                  <CrossSwitchDashboard />
                </AuthenticatedPage>
              }
            />
            <Route
              path="/reports"
              element={
                <AuthenticatedPage activePage="reports">
                  <Reports />
                </AuthenticatedPage>
              }
            />
            <Route
              path="/notifications"
              element={
                <AuthenticatedPage activePage="notifications">
                  <Notifications />
                </AuthenticatedPage>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </Router>
    </div>
  );
}

export default App;
