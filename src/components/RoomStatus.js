import React from 'react';
import styles from './Dashboard.module.css';

export const RoomStatus = () => {
  return (
    <div className={styles.roomStatus}>
      <h3>Room status</h3>
      <div className={styles.roomStatusDetails}>
        <div className={styles.detailRow}>
          <span>Occupied rooms</span>
          <span className={styles.occupiedValue}>104</span>
        </div>
        <div className={styles.detailRow}>
          <span>Clean</span>
          <span className={styles.cleanValue}>90</span>
        </div>
        <div className={styles.detailRow}>
          <span>Dirty</span>
          <span className={styles.dirtyValue}>4</span>
        </div>
        <div className={styles.detailRow}>
          <span>Inspected</span>
          <span className={styles.inspectedValue}>60</span>
        </div>
      </div>
    </div>
  );
};
