import React, { useState } from "react";
import "./Reports.css";
import {
  CalendarPlusIcon,
  DocumentExclamationIcon,
  UsersIcon,
  DownloadIcon,
  BarChartIcon,
} from "../../Icons/SVGicons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Reports = () => {
  const [activeTab, setActiveTab] = useState("reports");

  const reportCards = [
    {
      id: 1,
      icon: <CalendarPlusIcon />,
      title: "Daily Reconciliation Report",
      description:
        "Complete daily reconciliation summary across all payment sources",
      lastGenerated: "2025-01-15 09:30 AM",
      fileFormat: "CSV",
      buttonColor: "#166534",
      accentColor: "#dcfce7",
      textColor: "#166534",
    },
    {
      id: 2,
      icon: <DocumentExclamationIcon />,
      title: "Exception Report",
      description: "Detailed report of all flagged transactions and anomalies",
      lastGenerated: "2025-01-15 09:30 AM",
      fileFormat: "CSV",
      buttonColor: "#ea580c",
      accentColor: "#fed7aa",
      textColor: "#ea580c",
    },
    {
      id: 3,
      icon: <UsersIcon />,
      title: "Merchant Summary",
      description: "Comprehensive merchant performance and transaction summary",
      lastGenerated: "2025-01-15 09:30 AM",
      fileFormat: "CSV",
      buttonColor: "#166534",
      accentColor: "#dcfce7",
      textColor: "#166534",
    },
  ];

  // Daily TPV Bar Chart Data
  const dailyTpvData = {
    labels: [
      "Jun 10, 2025",
      "Jun 12, 2025",
      "Jun 14, 2025",
      "Jun 16, 2025",
      "Jun 18, 2025",
      "Jun 20, 2025",
      "Jun 22, 2025",
      "Jun 24, 2025",
      "Jun 26, 2025",
      "Jun 28, 2025",
      "Jun 30, 2025",
      "Jul 2, 2025",
      "Jul 4, 2025",
      "Jul 6, 2025",
      "Jul 8, 2025",
    ],
    datasets: [
      {
        label: "Daily TPV",
        data: [0, 0, 0, 0, 0, 140, 120, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#2cb1bc",
        borderColor: "#2cb1bc",
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const dailyTpvOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "#2cb1bc",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#d3d3d3",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#64748b",
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        grid: {
          color: "#d3d3d3",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#64748b",
          stepSize: 35,
        },
        beginAtZero: true,
        max: 140,
      },
    },
  };

  // Transaction State Pie Chart Data
  const transactionStateData = {
    labels: ["Approved", "Declined", "Error", "Expired"],
    datasets: [
      {
        data: [65, 20, 10, 5],
        backgroundColor: [
          "#a8e6a1", // Light green
          "#ffb6b6", // Light pink
          "#084c61", // Dark teal
          "#5bc0de", // Light blue
        ],
        borderColor: ["#a8e6a1", "#ffb6b6", "#084c61", "#5bc0de"],
        borderWidth: 2,
        cutout: "60%",
      },
    ],
  };

  const transactionStateOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "rect",
          font: {
            size: 12,
          },
          color: "#64748b",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  // Daily TPV Comparison to Previous Week Bar Chart Data
  const tpvComparisonData = {
    labels: ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Current Week",
        data: [1.2, 3.1, 1.0, 12.0, 2.2, 3.1],
        backgroundColor: "#ff69b4", // Pink
        borderColor: "#ff69b4",
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
      {
        label: "Previous Week",
        data: [0.8, 2.8, 0.7, 1.1, 0.9, 0.8],
        backgroundColor: "#87ceeb", // Light blue
        borderColor: "#87ceeb",
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const tpvComparisonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "rect",
          font: {
            size: 12,
          },
          color: "#64748b",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "#ff69b4",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#d3d3d3",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#64748b",
        },
      },
      y: {
        grid: {
          color: "#d3d3d3",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#64748b",
          stepSize: 4,
        },
        beginAtZero: true,
        max: 16,
      },
    },
  };

  // Conversion Rate by Card Brand Data
  const conversionRateData = {
    labels: ["Visa", "Mastercard"],
    datasets: [
      {
        label: "Conversion Rate",
        data: [68, 72],
        backgroundColor: ["#3b82f6", "#ef4444"], // Blue for Visa, Red for Mastercard
        borderColor: ["#3b82f6", "#ef4444"],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const conversionRateOptions = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "white",
        bodyColor: "white",
        callbacks: {
          label: function (context) {
            return `Conversion Rate: ${context.parsed}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#d3d3d3",
          borderDash: [5, 5],
        },
        ticks: {
          color: "#64748b",
          callback: function (value) {
            return value + "%";
          },
        },
        beginAtZero: true,
        max: 100,
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#64748b",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="reports-container">
      {/* Reports Header */}
      <div className="reports-header">
        <h1 className="reports-title">
          <span className="reports-part">Reports &</span>{" "}
          <span className="analytics-part">Analytics</span>
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#64748b",
            margin: "0",
            lineHeight: "1.6",
            maxWidth: "600px",
            marginBottom: "20px",
          }}
        >
          Comprehensive insights into your payment processing performance
        </p>

        {/* Navigation Tabs */}
        <div className="reports-tabs">
          <button
            className={`tab ${activeTab === "reports" ? "active" : ""}`}
            onClick={() => setActiveTab("reports")}
          >
            <DownloadIcon />
            Report Downloads
          </button>
          <button
            className={`tab ${activeTab === "analytics" ? "active" : ""}`}
            onClick={() => setActiveTab("analytics")}
          >
            <BarChartIcon />
            Analytics Dashboard
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="reports-content">
        {activeTab === "reports" && (
          <div className="report-cards">
            {reportCards.map((card) => (
              <div
                key={card.id}
                className="report-card"
                style={{ borderColor: card.accentColor }}
              >
                <div className="card-icon" style={{ color: card.textColor }}>
                  {card.icon}
                </div>
                <h3 className="card-title" style={{ color: card.textColor }}>
                  {card.title}
                </h3>
                <p className="card-description">{card.description}</p>
                <div className="card-details">
                  <div className="detail-item">
                    <span className="detail-label">Last Generated:</span>
                    <span className="detail-value">{card.lastGenerated}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">File Format:</span>
                    <span className="detail-value">{card.fileFormat}</span>
                  </div>
                </div>
                <button
                  className="download-button"
                  style={{
                    backgroundColor: card.buttonColor,
                    borderColor: card.accentColor,
                  }}
                >
                  <DownloadIcon />
                  Download Report
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "analytics" && (
          <>
            {/* Charts Section - Keep original grid layout */}
            <div className="analytics-dashboard">
              <div className="chart-card">
                <h3 className="chart-title">Daily TPV</h3>
                <div className="chart-container">
                  <Bar data={dailyTpvData} options={dailyTpvOptions} />
                </div>
              </div>

              <div className="chart-card">
                <h3 className="chart-title">Transaction State</h3>
                <div className="chart-container">
                  <Doughnut
                    data={transactionStateData}
                    options={transactionStateOptions}
                  />
                </div>
              </div>

              <div className="chart-card">
                <h3 className="chart-title">Daily TPV Comparison</h3>
                <div className="chart-container">
                  <Bar
                    data={tpvComparisonData}
                    options={tpvComparisonOptions}
                  />
                </div>
              </div>

              <div className="chart-card">
                <h3 className="chart-title">Conversion Rate by Card Brand</h3>
                <p className="chart-subtitle">
                  Success rate of payment transactions
                </p>

                {/* Visa Section */}
                <div className="card-brand-section">
                  <div className="brand-stats">
                    <div className="brand-header">
                      <span className="brand-name">Visa</span>
                      <div className="brand-legend">
                        <span className="legend-dot visa-dot"></span>
                      </div>
                    </div>
                    <div className="conversion-rate">
                      <span className="rate-number">68%</span>
                      <span className="rate-change positive">+2.3%</span>
                    </div>
                    <div className="transaction-details">
                      <p>10,486 of 15,420</p>
                      <p className="avg-value">$1,250.45 Avg. Value</p>
                    </div>
                  </div>
                  <div className="brand-chart">
                    <Bar
                      data={conversionRateData}
                      options={conversionRateOptions}
                    />
                  </div>
                </div>

                {/* Mastercard Section */}
                <div className="card-brand-section">
                  <div className="brand-stats">
                    <div className="brand-header">
                      <span className="brand-name">Mastercard</span>
                      <div className="brand-legend">
                        <span className="legend-dot mastercard-dot"></span>
                      </div>
                    </div>
                    <div className="conversion-rate">
                      <span className="rate-number">72%</span>
                      <span className="rate-change positive">+1.8%</span>
                    </div>
                    <div className="transaction-details">
                      <p>9,252 of 12,850</p>
                      <p className="avg-value">$1,342.80 Avg. Value</p>
                    </div>
                  </div>
                  <div className="brand-chart">
                    <Bar
                      data={conversionRateData}
                      options={conversionRateOptions}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tables Section - Completely separate from charts */}
            <div className="tables-section">
              {/* TPV by Merchant Table */}
              <div className="table-card">
                <h3 className="table-title">TPV by Merchant</h3>
                <div className="table-container">
                  <table className="merchant-table">
                    <thead>
                      <tr>
                        <th>GROUP</th>
                        <th>MERCHANT</th>
                        <th>TPV</th>
                        <th>% OF TOTAL</th>
                        <th>TRANSACTION COUNT</th>
                        <th>AVERAGE AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* DirectMerchants Group */}
                      <tr className="group-header">
                        <td colSpan="6">DirectMerchants</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>MERChiropracticConsultingInc</td>
                        <td>51,972.40</td>
                        <td>0.19</td>
                        <td>13</td>
                        <td>3,997.88</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Paysoft</td>
                        <td>133,020.00</td>
                        <td>0.49</td>
                        <td>2</td>
                        <td>66,510.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Pitstop</td>
                        <td>0.50</td>
                        <td>0.00</td>
                        <td>1</td>
                        <td>0.50</td>
                      </tr>
                      <tr className="subtotal-row">
                        <td></td>
                        <td>
                          <strong>Subtotal (DirectMerchants)</strong>
                        </td>
                        <td>
                          <strong>184,992.90</strong>
                        </td>
                        <td>
                          <strong>0.69</strong>
                        </td>
                        <td>
                          <strong>16</strong>
                        </td>
                        <td>
                          <strong>11,562.06</strong>
                        </td>
                      </tr>

                      {/* PaysoftImpact Group */}
                      <tr className="group-header">
                        <td colSpan="6">PaysoftImpact</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>DignitySA</td>
                        <td>32,420.00</td>
                        <td>0.12</td>
                        <td>8</td>
                        <td>4,052.50</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>FriendsofKDH</td>
                        <td>2,822.00</td>
                        <td>0.01</td>
                        <td>19</td>
                        <td>148.53</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>MdzanandaAnimalClinic</td>
                        <td>30,790.00</td>
                        <td>0.11</td>
                        <td>28</td>
                        <td>1,099.64</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>SAUbuntu</td>
                        <td>25.00</td>
                        <td>0.00</td>
                        <td>1</td>
                        <td>25.00</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>WildTomorrowFund</td>
                        <td>18,411.00</td>
                        <td>0.07</td>
                        <td>35</td>
                        <td>526.03</td>
                      </tr>
                      <tr className="subtotal-row">
                        <td></td>
                        <td>
                          <strong>Subtotal (PaysoftImpact)</strong>
                        </td>
                        <td>
                          <strong>84,468.00</strong>
                        </td>
                        <td>
                          <strong>0.31</strong>
                        </td>
                        <td>
                          <strong>91</strong>
                        </td>
                        <td>
                          <strong>928.22</strong>
                        </td>
                      </tr>

                      {/* Grand Total */}
                      <tr className="total-row">
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td>
                          <strong>269,460.90</strong>
                        </td>
                        <td>
                          <strong>1.00</strong>
                        </td>
                        <td>
                          <strong>107</strong>
                        </td>
                        <td>
                          <strong>2,518.33</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TPV by Gateway Table */}
              <div className="table-card">
                <h3 className="table-title">TPV by Gateway</h3>
                <div className="table-container">
                  <table className="gateway-table">
                    <thead>
                      <tr>
                        <th>MERCHANT</th>
                        <th colSpan="2">PEACHPAYMENT</th>
                        <th>IPAY</th>
                      </tr>
                      <tr>
                        <th></th>
                        <th>COUNT</th>
                        <th>TPV</th>
                        <th>TPV</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DignitySA</td>
                        <td>10</td>
                        <td>32,420</td>
                        <td>391</td>
                      </tr>
                      <tr>
                        <td>FriendsofKDH</td>
                        <td>21</td>
                        <td>2,431</td>
                        <td>391</td>
                      </tr>
                      <tr>
                        <td>GentiumGroup</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>MERChiropracticConsultingInc</td>
                        <td>18</td>
                        <td>51,952.4</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>MdzanandaAnimalClinic</td>
                        <td>35</td>
                        <td>30,790</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>PaysoftImpactDemo</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Paysoft</td>
                        <td>5</td>
                        <td>133,020</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Pitstop</td>
                        <td>1</td>
                        <td>0.5</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>SAUbuntu</td>
                        <td>1</td>
                        <td>25</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>WildTomorrowFund</td>
                        <td>35</td>
                        <td>17,686</td>
                        <td>725</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Transaction Activity Table */}
              <div className="table-card">
                <h3 className="table-title">Transaction Activity</h3>
                <div className="table-container">
                  <table className="transaction-activity-table">
                    <thead>
                      <tr>
                        <th>GATEWAY RESPONSE</th>
                        <th>EXTERNAL KEY</th>
                        <th>PURCHASE DATE</th>
                        <th>GATEWAY ID</th>
                        <th>SPACE NAME</th>
                        <th>GROUP NAME</th>
                        <th>MERCHANT ACCOUNT</th>
                        <th>TYPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="gateway-response">69546911</td>
                        <td>cs_58b2e3ea245b-4c0e-a671-9fd8c7559bab</td>
                        <td>2025-06-27 07:27:28.521000</td>
                        <td>8ac94a397ab6b5c01979b04204146b7</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>MdzanandaAnimalClinic</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">68730065</td>
                        <td>cs_7f9a1b2c3d4e-5f6g-7h8i-9j0k1l2m3n4o5p</td>
                        <td>2025-06-27 06:15:42.123000</td>
                        <td>9bd05b408bc7c6d02a8ac15315257c8</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>WildTomorrowFund</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">68755734</td>
                        <td>cs_1a2b3c4d5e6f-7g8h-9i0j-1k2l3m4n5o6p7q</td>
                        <td>2025-06-27 05:33:15.789000</td>
                        <td>7ce16c519cd8d7e13b9bd26426368d9</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>DignitySA</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">56822270</td>
                        <td>cs_9p8o7i6u5y4t-3r2e-1w0q-9p8o7i6u5y4t3r2e</td>
                        <td>2025-06-27 04:22:08.456000</td>
                        <td>6df27d62aef9f0e25c0ce37537479e0</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>FriendsofKDH</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">69615206</td>
                        <td>cs_2e3r4t5y6u7i-8o9p-0q1w-2e3r4t5y6u7i8o9p</td>
                        <td>2025-06-27 03:11:35.234000</td>
                        <td>5eg38e73bf0a0f136d1df48648580f1</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>MERChiropracticConsultingInc</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">69546912</td>
                        <td>cs_3r4t5y6u7i8o-9p0q-1w2e-3r4t5y6u7i8o9p0q</td>
                        <td>2025-06-27 02:45:12.987000</td>
                        <td>4fh49f84cg1b1g247e2eg597596g2</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>Paysoft</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">68730066</td>
                        <td>cs_4t5y6u7i8o9p-0q1w-2e3r-4t5y6u7i8o9p0q1w</td>
                        <td>2025-06-27 01:28:45.654000</td>
                        <td>3gi50g95dh2c2h358f3fh608607h3</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>Pitstop</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="gateway-response">68755735</td>
                        <td>cs_5y6u7i8o9p0q-1w2e-3r4t-5y6u7i8o9p0q1w2e</td>
                        <td>2025-06-27 00:15:22.321000</td>
                        <td>2hj61h06ei3d3i469g4gi719718i4</td>
                        <td>CrossSwitchSA</td>
                        <td>PaysoftImpact</td>
                        <td>SAUbuntu</td>
                        <td>
                          <span className="type-badge charge">CHARGE</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Remove the tables from here - they're now inside the analytics tab */}
      </div>

      {/* Decorative Elements */}
      <div className="decorative-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Reports;
