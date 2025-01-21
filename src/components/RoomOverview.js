import React from 'react';
import styles from './Dashboard.module.css';
import { MoreIcon } from '../index';

const rooms = [
  { type: "Single sharing", deals: 2, available: 2, total: 30, price: 568 },
  { type: "Double sharing", deals: 2, available: 2, total: 35, price: 1068 },
  { type: "Triple sharing", available: 2, total: 25, price: 1568 },
  { type: "VIP Suit", available: 4, total: 10, price: 2568 }
];

export const RoomOverview = () => {
  return (
    <section className={styles.roomOverview} aria-label="Room Overview">
      <h2 className={styles.sectionTitle}>Rooms</h2>
      <div className={styles.roomGrid}>
        {rooms.map((room, index) => (
          <div key={index} className={styles.roomCard}>
            <div className={styles.roomCardHeader}>
              {room.deals && <div className={styles.dealsBadge}>{room.deals} Deals</div>}
              <MoreIcon />
            </div>
            <div className={styles.roomType}>{room.type}</div>
            <div className={styles.roomAvailability}>
              {room.available}/{room.total}
            </div>
            <div className={styles.priceAmount}>${room.price}</div>
            <div className={styles.priceUnit}>/ day</div>
          </div>
        ))}
      </div>
    </section>
  );
};

