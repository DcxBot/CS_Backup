import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SummaryCard from "../PeachDashboard/SummaryCard";
import FilterPanel from "../PeachDashboard/FilterPanel";
import TransactionsTable from "../PeachDashboard/TransactionsTable";
import CommentModal from "../PeachDashboard/CommentModal";
import {
  absaDashboardData,
  getFilteredTransactions,
  exportToCSV,
} from "../../mockData/absaDashboardData";
import "../../styles/ABSADashboard.css";

const ABSADashboard = () => {
  // State management
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filters, setFilters] = useState({
    dateRange: { start: "", end: "" },
    paymentType: "",
    status: "",
    reference: "",
    amountMin: "",
    amountMax: "",
    merchantGroup: "",
    merchantName: "",
  });
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [highlightedTransaction, setHighlightedTransaction] = useState(null);

  // Initialize data
  useEffect(() => {
    setTransactions(absaDashboardData.transactions);
    setFilteredTransactions(absaDashboardData.transactions);
  }, []);

  // Handle transaction ID from URL parameters (navigation from notifications)
  useEffect(() => {
    const transactionId = searchParams.get("transactionId");
    if (transactionId) {
      // Find the specific transaction
      const targetTransaction = transactions.find(
        (t) => t.reference === transactionId
      );
      if (targetTransaction) {
        // Set filters to show only this transaction
        setFilters({
          dateRange: { start: "", end: "" },
          paymentType: "",
          status: "",
          reference: transactionId,
          amountMin: "",
          amountMax: "",
          merchantGroup: "",
          merchantName: "",
        });

        // Highlight the transaction
        setHighlightedTransaction(transactionId);

        // Clear the URL parameter after processing
        setSearchParams({});
      }
    }
  }, [transactions, searchParams, setSearchParams]);

  // Apply filters when filters change
  useEffect(() => {
    const filtered = getFilteredTransactions(transactions, filters);
    setFilteredTransactions(filtered);
  }, [filters, transactions]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      dateRange: { start: "", end: "" },
      paymentType: "",
      status: "",
      reference: "",
      amountMin: "",
      amountMax: "",
      merchantGroup: "",
      merchantName: "",
    });
  };

  // Handle comment modal
  const handleCommentClick = (transaction) => {
    setSelectedTransaction(transaction);
    setCommentText(transaction.comment || "");
    setShowCommentModal(true);
  };

  // Save comment
  const handleCommentSave = () => {
    if (selectedTransaction) {
      const updatedTransactions = transactions.map((t) =>
        t.id === selectedTransaction.id ? { ...t, comment: commentText } : t
      );
      setTransactions(updatedTransactions);

      // Update filtered transactions if needed
      const updatedFiltered = getFilteredTransactions(
        updatedTransactions,
        filters
      );
      setFilteredTransactions(updatedFiltered);
    }

    setShowCommentModal(false);
    setSelectedTransaction(null);
    setCommentText("");
  };

  // Export to CSV
  const handleExportCSV = () => {
    exportToCSV(filteredTransactions);
  };

  return (
    <div className="dashboard-container absa-dashboard">
      {/* Background Decorative Shapes */}
      <div className="bg-shape-1"></div>
      <div className="bg-shape-2"></div>

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1 className="main-title">
          ABSA <span className="title-emphasis">Dashboard</span>
        </h1>
        <p className="subtitle">
          Detailed reconciliation view for{" "}
          <span className="subtitle-emphasis">ABSA</span> transactions
        </p>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <SummaryCard
          id="total-transactions"
          title="Total Transactions"
          value={absaDashboardData.summary.totalTransactions.toLocaleString()}
          iconColor="#2d6a5a"
          className="summary-card total-card"
        />
        <SummaryCard
          id="matched-percentage"
          title="% Matched"
          value={`${absaDashboardData.summary.matchedPercentage}%`}
          icon="CheckCircle"
          iconColor="#16A34A"
          valueColor="#15803D"
          backgroundColor="#DCFCE7"
          className="summary-card matched-card"
        />
        <SummaryCard
          id="unmatched"
          title="Unmatched"
          value={absaDashboardData.summary.unmatched.toLocaleString()}
          icon="AlertTriangle"
          iconColor="#DC2626"
          valueColor="#B91C1C"
          backgroundColor="#FEE2E2"
          className="summary-card unmatched-card"
        />
        <SummaryCard
          id="exceptions"
          title="Exceptions"
          value={absaDashboardData.summary.exceptions.toLocaleString()}
          icon="TrendingUp"
          iconColor="#EA580C"
          valueColor="#C2410C"
          backgroundColor="#FED7AA"
          className="summary-card exceptions-card"
        />
      </div>

      {/* Filter Panel */}
      <FilterPanel
        filters={filters}
        filterOptions={absaDashboardData.filterOptions}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* Transactions Table */}
      <TransactionsTable
        transactions={filteredTransactions}
        totalCount={transactions.length}
        filteredCount={filteredTransactions.length}
        onCommentClick={handleCommentClick}
        onExportCSV={handleExportCSV}
        highlightedTransaction={highlightedTransaction}
      />

      {/* Comment Modal */}
      {showCommentModal && (
        <CommentModal
          transaction={selectedTransaction}
          commentText={commentText}
          onCommentChange={setCommentText}
          onSave={handleCommentSave}
          onCancel={() => {
            setShowCommentModal(false);
            setSelectedTransaction(null);
            setCommentText("");
          }}
        />
      )}
    </div>
  );
};

export default ABSADashboard;
