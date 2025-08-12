import React from "react";
import {
  DownloadIcon,
  MessageSquareIcon,
} from "../../Icons/PeachDashboardIcons";
import StatusBadge from "./StatusBadge";
import "../../styles/TransactionsTable.css";

const TransactionsTable = ({
  transactions,
  totalCount,
  filteredCount,
  onCommentClick,
  onExportCSV,
  highlightedTransaction,
}) => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderFlagBadge = (flag) => {
    return (
      <span className={`flag-badge ${flag ? "true" : "false"}`}>
        {flag ? "Yes" : "No"}
      </span>
    );
  };

  const getRowClassName = (transaction) => {
    let className = "table-row";
    if (
      highlightedTransaction &&
      transaction.reference === highlightedTransaction
    ) {
      className += " highlighted-row";
    }
    return className;
  };

  if (transactions.length === 0) {
    return (
      <div className="table-container">
        <div className="table-header">
          <div>
            <h2>Transactions</h2>
            <p>No transactions found</p>
          </div>
          <button className="export-btn" onClick={onExportCSV}>
            <DownloadIcon width={16} height={16} color="#FFFFFF" />
            <span>Export CSV</span>
          </button>
        </div>
        <div className="empty-state">
          <h3>No transactions found</h3>
          <p>Try adjusting your filter criteria to see more results</p>
        </div>
      </div>
    );
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <div>
          <h2>Transactions</h2>
          <p>
            Showing {filteredCount} of {totalCount} transactions
          </p>
        </div>
        <button className="export-btn" onClick={onExportCSV}>
          <DownloadIcon width={16} height={16} color="#FFFFFF" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="table-wrapper">
        <table className="transactions-table">
          <thead className="table-head">
            <tr>
              <th className="table-header-cell">CS+ ID</th>
              <th className="table-header-cell">Date</th>
              <th className="table-header-cell">Amount</th>
              <th className="table-header-cell">Currency</th>
              <th className="table-header-cell">Status</th>
              <th className="table-header-cell">Source</th>
              <th className="table-header-cell">Flag</th>
              <th className="table-header-cell">Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className={getRowClassName(transaction)}>
                <td className="table-cell">
                  <div className="cell-content">
                    <span className="transaction-id">{transaction.id}</span>
                    <span className="transaction-reference">
                      {transaction.reference}
                    </span>
                  </div>
                </td>
                <td className="table-cell">{formatDate(transaction.date)}</td>
                <td className="table-cell">
                  <span className="amount-value">
                    {formatAmount(transaction.amount)}
                  </span>
                </td>
                <td className="table-cell">{transaction.currency}</td>
                <td className="table-cell">
                  <StatusBadge
                    type={transaction.status.toLowerCase()}
                    text={transaction.status}
                  />
                </td>
                <td className="table-cell">{transaction.source}</td>
                <td className="table-cell">
                  {renderFlagBadge(transaction.flag)}
                </td>
                <td className="table-cell">
                  <button
                    className="action-btn"
                    onClick={() => onCommentClick(transaction)}
                    title="View/Edit Comment"
                  >
                    <MessageSquareIcon width={16} height={16} color="#2D6A5A" />
                    <span>Comment</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
