// Mock data for Peach Dashboard
export const peachDashboardData = {
  // Summary statistics
  summary: {
    totalTransactions: 15420,
    matchedPercentage: 94.2,
    unmatched: 894,
    exceptions: 12,
  },

  // Filter options
  filterOptions: {
    paymentTypes: [
      { value: "", label: "All Types" },
      { value: "Card", label: "Card" },
      { value: "EFT", label: "EFT" },
      { value: "Digital Wallet", label: "Digital Wallet" },
      { value: "Wire Transfer", label: "Wire Transfer" },
    ],
    statuses: [
      { value: "", label: "All Statuses" },
      { value: "Matched", label: "Matched" },
      { value: "Unmatched", label: "Unmatched" },
      { value: "Flagged", label: "Flagged" },
    ],
    merchantGroups: [
      { value: "", label: "All Groups" },
      { value: "Retail", label: "Retail" },
      { value: "E-commerce", label: "E-commerce" },
      { value: "Food & Beverage", label: "Food & Beverage" },
      { value: "Services", label: "Services" },
      { value: "Technology", label: "Technology" },
    ],
  },

  // Sample transactions data
  transactions: [
    {
      id: "CS001234",
      date: "2025-01-15",
      amount: 1250.75,
      currency: "ZAR",
      status: "Matched",
      source: "Card",
      flag: false,
      merchantName: "TechStore Online",
      merchantGroup: "Technology",
      reference: "TXN-2025-001",
      comment: "Payment processed successfully",
    },
    {
      id: "CS001235",
      date: "2025-01-15",
      amount: 89.99,
      currency: "ZAR",
      status: "Unmatched",
      source: "EFT",
      flag: true,
      merchantName: "Coffee Corner",
      merchantGroup: "Food & Beverage",
      reference: "CC-2025-002",
      comment: "Amount discrepancy detected",
    },
    {
      id: "CS001236",
      date: "2025-01-14",
      amount: 450.0,
      currency: "ZAR",
      status: "Matched",
      source: "Digital Wallet",
      flag: false,
      merchantName: "Fashion Boutique",
      merchantGroup: "Retail",
      reference: "FB-2025-003",
      comment: "Standard transaction",
    },
    {
      id: "CS001237",
      date: "2025-01-14",
      amount: 125.5,
      currency: "ZAR",
      status: "Flagged",
      source: "Card",
      flag: true,
      merchantName: "Service Pro",
      merchantGroup: "Services",
      reference: "SP-2025-004",
      comment: "Suspicious activity detected",
    },
    {
      id: "CS001238",
      date: "2025-01-13",
      amount: 2999.99,
      currency: "ZAR",
      status: "Matched",
      source: "Wire Transfer",
      flag: false,
      merchantName: "Electronics Hub",
      merchantGroup: "Technology",
      reference: "EH-2025-005",
      comment: "Large purchase verified",
    },
    {
      id: "CS001239",
      date: "2025-01-13",
      amount: 75.25,
      currency: "ZAR",
      status: "Unmatched",
      source: "Card",
      flag: false,
      merchantName: "Quick Mart",
      merchantGroup: "Retail",
      reference: "QM-2025-006",
      comment: "Receipt not found",
    },
    {
      id: "CS001240",
      date: "2025-01-12",
      amount: 1500.0,
      currency: "ZAR",
      status: "Matched",
      source: "EFT",
      flag: false,
      merchantName: "Consulting Corp",
      merchantGroup: "Services",
      reference: "CC-2025-007",
      comment: "Professional services payment",
    },
    {
      id: "CS001241",
      date: "2025-01-12",
      amount: 45.8,
      currency: "ZAR",
      status: "Matched",
      source: "Digital Wallet",
      flag: false,
      merchantName: "Food Express",
      merchantGroup: "Food & Beverage",
      reference: "FE-2025-008",
      comment: "Food delivery payment",
    },
    {
      id: "CS001242",
      date: "2025-01-11",
      amount: 899.99,
      currency: "ZAR",
      status: "Flagged",
      source: "Card",
      flag: true,
      merchantName: "Online Shop",
      merchantGroup: "E-commerce",
      reference: "OS-2025-009",
      comment: "Multiple failed attempts",
    },
    {
      id: "CS001243",
      date: "2025-01-11",
      amount: 320.5,
      currency: "ZAR",
      status: "Matched",
      source: "EFT",
      flag: false,
      merchantName: "Health Clinic",
      merchantGroup: "Services",
      reference: "HC-2025-010",
      comment: "Medical consultation fee",
    },
  ],

  // Additional sample data for testing
  additionalTransactions: [
    {
      id: "CS001244",
      date: "2025-01-10",
      amount: 199.99,
      currency: "ZAR",
      status: "Matched",
      source: "Card",
      flag: false,
      merchantName: "Book Store",
      merchantGroup: "Retail",
      reference: "BS-2025-011",
      comment: "Book purchase",
    },
    {
      id: "CS001245",
      date: "2025-01-10",
      amount: 750.0,
      currency: "ZAR",
      status: "Unmatched",
      source: "Digital Wallet",
      flag: true,
      merchantName: "Gym Membership",
      merchantGroup: "Services",
      reference: "GM-2025-012",
      comment: "Payment verification needed",
    },
  ],
};

// Helper function to get filtered transactions
export const getFilteredTransactions = (transactions, filters) => {
  return transactions.filter((transaction) => {
    // Date range filter
    if (filters.dateRange && filters.dateRange.start && filters.dateRange.end) {
      const transactionDate = new Date(transaction.date);
      const startDate = new Date(filters.dateRange.start);
      const endDate = new Date(filters.dateRange.end);

      if (transactionDate < startDate || transactionDate > endDate) {
        return false;
      }
    }

    // Payment type filter
    if (filters.paymentType && filters.paymentType !== "") {
      if (transaction.source !== filters.paymentType) {
        return false;
      }
    }

    // Status filter
    if (filters.status && filters.status !== "") {
      if (transaction.status !== filters.status) {
        return false;
      }
    }

    // Reference/CS+ ID filter
    if (filters.reference && filters.reference !== "") {
      if (
        !transaction.id
          .toLowerCase()
          .includes(filters.reference.toLowerCase()) &&
        !transaction.reference
          .toLowerCase()
          .includes(filters.reference.toLowerCase())
      ) {
        return false;
      }
    }

    // Amount range filter
    if (filters.amountMin && filters.amountMin !== "") {
      if (transaction.amount < parseFloat(filters.amountMin)) {
        return false;
      }
    }

    if (filters.amountMax && filters.amountMax !== "") {
      if (transaction.amount > parseFloat(filters.amountMax)) {
        return false;
      }
    }

    // Merchant group filter
    if (filters.merchantGroup && filters.merchantGroup !== "") {
      if (transaction.merchantGroup !== filters.merchantGroup) {
        return false;
      }
    }

    // Merchant name filter
    if (filters.merchantName && filters.merchantName !== "") {
      if (
        !transaction.merchantName
          .toLowerCase()
          .includes(filters.merchantName.toLowerCase())
      ) {
        return false;
      }
    }

    return true;
  });
};

// Helper function to export transactions to CSV
export const exportToCSV = (transactions) => {
  const headers = [
    "CS+ ID",
    "Date",
    "Amount",
    "Currency",
    "Status",
    "Source",
    "Flag",
    "Merchant Name",
    "Merchant Group",
    "Reference",
    "Comment",
  ];

  const csvContent = [
    headers.join(","),
    ...transactions.map((transaction) =>
      [
        transaction.id,
        transaction.date,
        transaction.amount,
        transaction.currency,
        transaction.status,
        transaction.source,
        transaction.flag ? "Yes" : "No",
        `"${transaction.merchantName}"`,
        transaction.merchantGroup,
        transaction.reference,
        `"${transaction.comment}"`,
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `peach-transactions-${new Date().toISOString().split("T")[0]}.csv`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
