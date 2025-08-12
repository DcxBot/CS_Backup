// Mock data for ABSA Dashboard
export const absaDashboardData = {
  // Summary statistics
  summary: {
    totalTransactions: 18643,
    matchedPercentage: 92.1,
    unmatched: 1401,
    exceptions: 75,
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
      id: "ABS001234",
      date: "2025-01-15",
      amount: 2150.0,
      currency: "ZAR",
      status: "Matched",
      source: "Card",
      flag: false,
      merchantName: "TechStore Online",
      merchantGroup: "Technology",
      reference: "ABS001234",
      comment: "Payment processed successfully",
    },
    {
      id: "ABS001235",
      date: "2025-01-15",
      amount: 125.5,
      currency: "ZAR",
      status: "Unmatched",
      source: "EFT",
      flag: true,
      merchantName: "Coffee Corner",
      merchantGroup: "Food & Beverage",
      reference: "ABS001235",
      comment: "Amount discrepancy detected",
    },
    {
      id: "ABS001236",
      date: "2025-01-14",
      amount: 875.25,
      currency: "ZAR",
      status: "Matched",
      source: "Digital Wallet",
      flag: false,
      merchantName: "Fashion Boutique",
      merchantGroup: "Retail",
      reference: "ABS001236",
      comment: "Standard transaction",
    },
    {
      id: "ABS001237",
      date: "2025-01-14",
      amount: 3200.0,
      currency: "ZAR",
      status: "Flagged",
      source: "Wire Transfer",
      flag: true,
      merchantName: "Service Pro",
      merchantGroup: "Services",
      reference: "ABS001237",
      comment: "Suspicious activity detected",
    },
    {
      id: "ABS001238",
      date: "2025-01-13",
      amount: 45.99,
      currency: "ZAR",
      status: "Matched",
      source: "Card",
      flag: false,
      merchantName: "Electronics Hub",
      merchantGroup: "Technology",
      reference: "ABS001238",
      comment: "Standard transaction",
    },
    {
      id: "ABS001239",
      date: "2025-01-13",
      amount: 1850.75,
      currency: "ZAR",
      status: "Unmatched",
      source: "EFT",
      flag: false,
      merchantName: "Fashion Boutique",
      merchantGroup: "Retail",
      reference: "ABS001239",
      comment: "Amount discrepancy detected",
    },
    {
      id: "ABS001240",
      date: "2025-01-12",
      amount: 525.0,
      currency: "ZAR",
      status: "Matched",
      source: "Card",
      flag: true,
      merchantName: "Service Pro",
      merchantGroup: "Services",
      reference: "ABS001240",
      comment: "Standard transaction",
    },
    {
      id: "ABS001241",
      date: "2025-01-12",
      amount: 2475.5,
      currency: "ZAR",
      status: "Matched",
      source: "Digital Wallet",
      flag: false,
      merchantName: "TechStore Online",
      merchantGroup: "Technology",
      reference: "ABS001241",
      comment: "Payment processed successfully",
    },
    {
      id: "ABS001242",
      date: "2025-01-11",
      amount: 99.99,
      currency: "ZAR",
      status: "Unmatched",
      source: "EFT",
      flag: true,
      merchantName: "Coffee Corner",
      merchantGroup: "Food & Beverage",
      reference: "ABS001242",
      comment: "Amount discrepancy detected",
    },
    {
      id: "ABS001243",
      date: "2025-01-11",
      amount: 750.25,
      currency: "ZAR",
      status: "Matched",
      source: "Card",
      flag: false,
      merchantName: "Fashion Boutique",
      merchantGroup: "Retail",
      reference: "ABS001243",
      comment: "Standard transaction",
    },
  ],
};

// Filter transactions based on applied filters
export const getFilteredTransactions = (transactions, filters) => {
  return transactions.filter((transaction) => {
    // Date range filter
    if (filters.dateRange.start && filters.dateRange.end) {
      const transactionDate = new Date(transaction.date);
      const startDate = new Date(filters.dateRange.start);
      const endDate = new Date(filters.dateRange.end);

      if (transactionDate < startDate || transactionDate > endDate) {
        return false;
      }
    }

    // Payment type filter
    if (filters.paymentType && transaction.source !== filters.paymentType) {
      return false;
    }

    // Status filter
    if (filters.status && transaction.status !== filters.status) {
      return false;
    }

    // Reference/CS+ ID filter
    if (
      filters.reference &&
      !transaction.reference
        .toLowerCase()
        .includes(filters.reference.toLowerCase())
    ) {
      return false;
    }

    // Amount range filters
    if (
      filters.amountMin &&
      transaction.amount < parseFloat(filters.amountMin)
    ) {
      return false;
    }
    if (
      filters.amountMax &&
      transaction.amount > parseFloat(filters.amountMax)
    ) {
      return false;
    }

    // Merchant group filter
    if (
      filters.merchantGroup &&
      transaction.merchantGroup !== filters.merchantGroup
    ) {
      return false;
    }

    // Merchant name filter
    if (
      filters.merchantName &&
      !transaction.merchantName
        .toLowerCase()
        .includes(filters.merchantName.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
};

// Export transactions to CSV
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
    "Comment",
  ];

  const csvContent = [
    headers.join(","),
    ...transactions.map((transaction) =>
      [
        transaction.reference,
        transaction.date,
        transaction.amount,
        transaction.currency,
        transaction.status,
        transaction.source,
        transaction.flag ? "YES" : "NO",
        transaction.merchantName,
        transaction.merchantGroup,
        transaction.comment,
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "absa_transactions.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
