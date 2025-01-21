import React from 'react';
import styles from './Dashboard.module.css';

// Data array for statistics
const stats = [
  { sublabel: "Today's", label: "Check-in", value: "23" },
  { sublabel: "Today's", label: "Check-out", value: "13" },
  { sublabel: "Total", label: "In hotel", value: "60" },
  { sublabel: "Total", label: "Available room", value: "10" },
  { sublabel: "Total", label: "Occupied room", value: "90" }
];

export const Statistics = () => {
  return (
    <section className={styles.statistics} aria-label="Hotel Statistics">
      {stats.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statLabel}>{stat.sublabel}</div>
          <div className={styles.statType}>{stat.label}</div>
          <div className={styles.statValue}>{stat.value}</div>
        </div>
      ))}
    </section>
  );
};

