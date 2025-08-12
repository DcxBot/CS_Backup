import React from "react";
import "../../styles/CommentModal.css";

const CommentModal = ({
  transaction,
  commentText,
  onCommentChange,
  onSave,
  onCancel,
}) => {
  const hasComment =
    transaction && transaction.comment && transaction.comment.trim() !== "";

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">
          {hasComment ? "View/Edit Comment" : "Add Comment"}
        </h2>

        <p className="transaction-id">Transaction ID: {transaction?.id}</p>

        <textarea
          className="comment-textarea"
          placeholder="Enter your comment..."
          value={commentText}
          onChange={(e) => onCommentChange(e.target.value)}
          rows={6}
        />

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="save-btn" onClick={onSave}>
            Save Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
