import React from "react";
import "./CircularProgress.css";

const CircularProgress = ({ percentage, color, strokeWidth = 8 }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg className="progress-svg" viewBox="0 0 120 120">
        {/* Background Circle */}
        <circle
          className="progress-bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          className="progress-fill"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={color}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage Text */}
      <div className="progress-text">{percentage.toFixed(1)}%</div>
    </div>
  );
};

export default CircularProgress;
