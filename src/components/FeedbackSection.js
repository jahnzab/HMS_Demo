import React from 'react';
import styles from './Dashboard.module.css';
import {MoreIcon} from '../index';

const feedbacks = [
  { name: "Mark", message: "Food could be better.", roomNumber: "A201" },
  { name: "Christian", message: "Facilities are not enough for amount paid.", roomNumber: "A101" },
  { name: "Alexander", message: "Room cleaning could be better.", roomNumber: "A301" }
];

export const FeedbackSection = () => {
  return (
    <section className={styles.feedbackSection} aria-label="Customer Feedback">
      <div className={styles.feedbackHeader}>
        <h2 className={styles.feedbackTitle}>Customers feedback</h2>
        <button aria-label="More options" className={styles.moreOptions}>
          <MoreIcon />
        </button>
      </div>
      <div className={styles.feedbackList}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className={styles.feedbackItem}>
            <div>
              <div className={styles.guestName}>{feedback.name}</div>
              <div className={styles.feedbackMessage}>{feedback.message}</div>
            </div>
            <div className={styles.roomNumber}>{feedback.roomNumber}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

