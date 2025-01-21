import React from 'react';
import { FaSearch } from 'react-icons/fa'; // FontAwesome React icon library
import styles from './Dashboard.module.css';
import { NotificationIcon } from '../index';

// DateBar component directly embedded with styles
const DateBar = () => {
  return (
    <div className={styles.dateBar}>
      <span className={styles.currentDate}>Friday, November 18, 2022</span>
      <button className={styles.createBookingButton}>Create booking</button>
    </div>
  );
};

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        {/* Embedded SearchBar using existing CSS styles */}
        <div className={styles.searchBarContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Search for rooms and offers"
            className={styles.searchInput}
            aria-label="Search for rooms and offers"
          />
        </div>

        <div className={styles.headerActions}>
          <button aria-label="Notifications" className={styles.notificationButton}>
            <NotificationIcon />
          </button>
          {/* Add your image */}
          <img src="/.jpg" alt="User profile" className={styles.userAvatar} />
        </div>
      </div>

      {/* DateBar positioned below Header */}
      <DateBar />
    </header>
  );
};

