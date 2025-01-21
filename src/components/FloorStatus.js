import React from 'react';
import styles from './Dashboard.module.css';

import ApexCharts from './ApexCharts'


export const FloorStatus = () => {
  return (
    <div className={styles.floorStatus}>
      <h3>Floor status</h3>
      <div className={styles.floorStats}>
      <ApexCharts/>
      </div>
      <div className={styles.floorStatsLegend}>
        <div className={styles.legendItem}>
          <div className={styles.completedIndicator}></div>
          <span>Completed</span>
        </div>
        <div className={styles.legendItem}>
          <div className={styles.pendingIndicator}></div>
          <span>Yet to Complete jfufuk</span>
        </div>
      </div>
    </div>
  );
};

