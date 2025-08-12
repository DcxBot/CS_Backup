# Peach Dashboard

A comprehensive reconciliation dashboard for Peach transactions built with React.

## Features

- **Summary Cards**: Overview of total transactions, matched percentage, unmatched count, and exceptions
- **Advanced Filtering**: Filter by date range, payment type, status, reference, amount, and merchant details
- **Transactions Table**: Detailed view of all transactions with sorting and filtering capabilities
- **Comment System**: Add and edit comments for individual transactions
- **Export Functionality**: Export filtered transactions to CSV
- **Responsive Design**: Mobile-friendly interface with modern UI

## Navigation

- **Main Dashboard**: Click the "View Dashboard" button on the Peach card
- **Back Navigation**: Use the "← Back to Dashboard" button to return to the main dashboard

## Components

### SummaryCard

Displays key metrics with icons and color-coded backgrounds:

- Total Transactions (Teal)
- % Matched (Green)
- Unmatched (Red)
- Exceptions (Orange)

### FilterPanel

Comprehensive filtering options:

- Date Range
- Payment Type
- Status
- Reference/CS+ ID
- Amount Range
- Merchant Group
- Merchant Name

### TransactionsTable

Detailed transaction view with:

- CS+ ID and Reference
- Date and Amount
- Status badges (Matched/Unmatched/Flagged)
- Source and Flag information
- Comment actions

### CommentModal

Add or edit transaction comments with:

- Transaction ID display
- Textarea for comments
- Save/Cancel functionality

### StatusBadge

Visual status indicators with appropriate colors:

- Matched: Green
- Unmatched: Red
- Flagged: Orange

## Styling

All styles are organized in the `src/styles/` folder:

- `PeachDashboard.css` - Main dashboard layout and background shapes
- `SummaryCard.css` - Summary card styling and hover effects
- `FilterPanel.css` - Filter panel layout and input styling
- `TransactionsTable.css` - Table styling and responsive design
- `CommentModal.css` - Modal overlay and form styling
- `StatusBadge.css` - Status badge colors and animations

## Data Structure

Mock data is located in `src/mockData/peachDashboardData.js` and includes:

- Transaction records with all necessary fields
- Filter options for dropdowns
- Summary statistics
- Helper functions for filtering and export

## Color Palette

The dashboard uses a consistent color scheme:

- Primary: #2D6A5A (Dark Teal)
- Accent: #FF6B35 (Orange)
- Success: #22C55E (Green)
- Warning: #F59E0B (Amber)
- Danger: #EF4444 (Red)
- Neutral grays for text and borders

## Responsive Design

The dashboard is fully responsive with:

- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly buttons and inputs
- Optimized table display for small screens

## Getting Started

1. Navigate to the main dashboard
2. Click "View Dashboard" on the Peach card
3. Use filters to narrow down transactions
4. Click on transaction rows to add/edit comments
5. Export filtered results to CSV as needed
6. Use the back button to return to the main dashboard
