// Mock data for CrossSwitch Dashboard
export const crossSwitchDashboardData = {
  summary: {
    totalTransactions: 15680,
    matchedPercentage: 94.2,
    unmatched: 912,
    exceptions: 15,
  },
  transactions: [
    {
      id: 1,
      reference: "CS001234",
      date: "2024-01-15T09:30:00Z",
      amount: 1250.0,
      paymentType: "Card",
      source: "Card",
      merchantName: "TechStore Pro",
      merchantGroup: "Technology",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Transaction processed successfully",
    },
    {
      id: 2,
      reference: "CS001235",
      date: "2024-01-15T10:15:00Z",
      amount: 875.5,
      paymentType: "EFT",
      source: "EFT",
      merchantName: "FoodMart Express",
      merchantGroup: "Retail",
      status: "unmatched",
      currency: "ZAR",
      flag: true,
      comment: "Amount discrepancy detected",
    },
    {
      id: 3,
      reference: "CS001236",
      date: "2024-01-15T11:00:00Z",
      amount: 2100.0,
      paymentType: "Card",
      source: "Card",
      merchantName: "AutoParts Plus",
      merchantGroup: "Automotive",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Payment confirmed",
    },
    {
      id: 4,
      reference: "CS001237",
      date: "2024-01-15T11:45:00Z",
      amount: 450.75,
      paymentType: "EFT",
      source: "EFT",
      merchantName: "Pharmacy Care",
      merchantGroup: "Healthcare",
      status: "flagged",
      currency: "ZAR",
      flag: true,
      comment: "Suspicious activity detected",
    },
    {
      id: 5,
      reference: "CS001238",
      date: "2024-01-15T12:30:00Z",
      amount: 3200.0,
      paymentType: "Card",
      source: "Card",
      merchantName: "Furniture World",
      merchantGroup: "Home & Garden",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Large transaction approved",
    },
    {
      id: 6,
      reference: "CS001239",
      date: "2024-01-15T13:15:00Z",
      amount: 675.25,
      paymentType: "EFT",
      source: "EFT",
      merchantName: "Coffee Corner",
      merchantGroup: "Food & Beverage",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Daily transaction",
    },
    {
      id: 7,
      reference: "CS001240",
      date: "2024-01-15T14:00:00Z",
      amount: 1890.0,
      paymentType: "Card",
      source: "Card",
      merchantName: "Electronics Hub",
      merchantGroup: "Technology",
      status: "unmatched",
      currency: "ZAR",
      flag: true,
      comment: "Payment method mismatch",
    },
    {
      id: 8,
      reference: "CS001241",
      date: "2024-01-15T14:45:00Z",
      amount: 950.5,
      paymentType: "EFT",
      source: "EFT",
      merchantName: "Fitness First",
      merchantGroup: "Health & Fitness",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Membership renewal",
    },
    {
      id: 9,
      reference: "CS001242",
      date: "2024-01-15T15:30:00Z",
      amount: 2750.0,
      paymentType: "Card",
      source: "Card",
      merchantName: "Travel Agency Pro",
      merchantGroup: "Technology",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Booking confirmed",
    },
    {
      id: 10,
      reference: "CS001243",
      date: "2024-01-15T16:15:00Z",
      amount: 425.0,
      paymentType: "EFT",
      source: "EFT",
      merchantName: "Pet Supplies Plus",
      merchantGroup: "Pet Care",
      status: "matched",
      currency: "ZAR",
      flag: false,
      comment: "Regular purchase",
    },
  ],
  filterOptions: {
    sources: [
      { value: "", label: "All Sources" },
      { value: "Card", label: "Card" },
      { value: "EFT", label: "EFT" },
      { value: "Mobile Money", label: "Mobile Money" },
      { value: "Bank Transfer", label: "Bank Transfer" },
    ],
    statuses: [
      { value: "", label: "All Statuses" },
      { value: "matched", label: "Matched" },
      { value: "unmatched", label: "Unmatched" },
      { value: "flagged", label: "Flagged" },
    ],
    merchantGroups: [
      { value: "", label: "All Groups" },
      { value: "Technology", label: "Technology" },
      { value: "Retail", label: "Retail" },
      { value: "Automotive", label: "Automotive" },
      { value: "Healthcare", label: "Healthcare" },
      { value: "Home & Garden", label: "Home & Garden" },
      { value: "Food & Beverage", label: "Food & Beverage" },
      { value: "Health & Fitness", label: "Health & Fitness" },
      { value: "Travel", label: "Travel" },
      { value: "Pet Care", label: "Pet Care" },
      { value: "Entertainment", label: "Entertainment" },
    ],
  },
};

// Filter transactions based on criteria
export const getFilteredTransactions = (transactions, filters) => {
  return transactions.filter((transaction) => {
    // Date range filter
    if (
      filters.dateRange?.start &&
      new Date(transaction.date) < new Date(filters.dateRange.start)
    ) {
      return false;
    }
    if (
      filters.dateRange?.end &&
      new Date(transaction.date) > new Date(filters.dateRange.end)
    ) {
      return false;
    }

    // Source filter
    if (
      filters.source &&
      filters.source !== "all" &&
      transaction.source !== filters.source
    ) {
      return false;
    }

    // Status filter
    if (
      filters.status &&
      filters.status !== "all" &&
      transaction.status !== filters.status
    ) {
      return false;
    }

    // Reference filter
    if (
      filters.reference &&
      !transaction.reference
        .toLowerCase()
        .includes(filters.reference.toLowerCase())
    ) {
      return false;
    }

    // Amount range filter
    if (filters.amountMin && transaction.amount < filters.amountMin) {
      return false;
    }
    if (filters.amountMax && transaction.amount > filters.amountMax) {
      return false;
    }

    // Merchant group filter
    if (
      filters.merchantGroup &&
      filters.merchantGroup !== "all" &&
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
  if (transactions.length === 0) {
    alert("No transactions to export");
    return;
  }

  const headers = [
    "CS+ ID",
    "Reference",
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
        transaction.id,
        transaction.reference,
        new Date(transaction.date).toLocaleDateString(),
        transaction.amount.toFixed(2),
        transaction.currency,
        transaction.status,
        transaction.source,
        transaction.flag ? "Yes" : "No",
        transaction.merchantName,
        transaction.merchantGroup,
        transaction.comment || "",
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `crossswitch-transactions-${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
