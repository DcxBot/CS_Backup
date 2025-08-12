# Transaction Navigation Feature

## Overview

The notification system now includes a powerful feature that allows users to click on 'Investigate' or 'Review' buttons in alerts and be taken directly to the specific transaction mentioned in the alert. This creates a seamless workflow from alert to action.

## How It Works

### 1. Alert Button Functionality

- **Investigate Button**: For flagged/suspicious transactions
- **Review Button**: For unmatched transactions requiring reconciliation
- **Action Required**: All buttons require user action and navigate to specific transactions

### 2. Navigation Flow

1. User sees alert in Notifications page
2. User clicks 'Investigate' or 'Review' button
3. System automatically navigates to the appropriate dashboard
4. Dashboard filters to show only the specific transaction
5. Transaction row is highlighted for easy identification
6. URL parameter is cleared after processing

### 3. Dashboard Integration

- **CrossSwitch Dashboard**: `/crossswitch?transactionId=CS001237`
- **Peach Payment Dashboard**: `/peach?transactionId=CS001235`
- **Ozow Dashboard**: `/ozow?transactionId=OZ001237`

## Technical Implementation

### Notifications Component

- Added `useNavigate` hook for programmatic navigation
- `handleActionButtonClick` function processes button clicks
- Determines correct dashboard based on gateway type
- Appends transaction ID as URL parameter

### Dashboard Components

- Added `useSearchParams` hook to read URL parameters
- Automatic filtering when transaction ID is present
- Transaction highlighting with visual indicators
- URL parameter cleanup after processing

### Transaction Tables

- Added `highlightedTransaction` prop
- Dynamic row class names for highlighting
- Visual feedback for identified transactions

## Visual Enhancements

### Highlighted Rows

- **Background Color**: Light yellow (#fef3c7)
- **Left Border**: Orange accent (#f59e0b)
- **Animation**: Subtle pulse effect for 2 seconds
- **Hover State**: Enhanced highlighting on mouse over

### CSS Animations

```css
@keyframes highlightPulse {
  0% {
    background-color: #fef3c7;
    transform: scale(1);
  }
  50% {
    background-color: #fbbf24;
    transform: scale(1.02);
  }
  100% {
    background-color: #fef3c7;
    transform: scale(1);
  }
}
```

## User Experience Benefits

### 1. **Seamless Workflow**

- No need to manually search for transactions
- Direct path from problem identification to resolution
- Reduced time to action

### 2. **Clear Visual Feedback**

- Highlighted transactions are immediately visible
- Automatic filtering reduces cognitive load
- Consistent highlighting across all dashboards

### 3. **Improved Efficiency**

- Eliminates manual transaction lookup
- Reduces navigation steps
- Faster incident response times

## Supported Alert Types

### Transaction Alerts

- **Flagged Transactions**: Navigate to suspicious activity
- **Unmatched Transactions**: Navigate to reconciliation issues
- **Large Amount Transactions**: Navigate to high-value transactions

### System Notifications

- **Reconciliation Alerts**: Navigate to specific gateway issues
- **Exception Reports**: Navigate to exception details

## Error Handling

### Invalid Transaction IDs

- Graceful fallback if transaction not found
- No navigation if transaction ID is invalid
- Console logging for debugging

### Missing Gateway Information

- Default navigation to home page
- Fallback handling for unknown gateways

## Future Enhancements

### 1. **Enhanced Navigation**

- Breadcrumb navigation showing alert → transaction path
- Back button to return to notifications
- Transaction history tracking

### 2. **Advanced Filtering**

- Pre-populate additional filters based on alert context
- Smart filtering suggestions
- Related transaction highlighting

### 3. **User Preferences**

- Configurable highlighting colors
- Customizable animation durations
- User-defined navigation shortcuts

## Testing Scenarios

### 1. **Valid Navigation**

- Click 'Investigate' on flagged transaction alert
- Verify navigation to correct dashboard
- Confirm transaction is highlighted and filtered

### 2. **Invalid Navigation**

- Test with non-existent transaction ID
- Verify graceful error handling
- Check console logging

### 3. **Cross-Gateway Navigation**

- Test navigation between different payment gateways
- Verify correct dashboard routing
- Confirm proper transaction identification

## Conclusion

The transaction navigation feature significantly improves the user experience by creating a direct path from alert to action. Users can now:

- **Click and Go**: Navigate directly to problematic transactions
- **See Clearly**: Identify transactions with visual highlighting
- **Act Quickly**: Reduce time from alert to resolution
- **Work Efficiently**: Eliminate manual transaction search

This feature transforms the notification system from a passive information display into an active workflow tool that drives user action and improves operational efficiency.
