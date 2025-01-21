import React from 'react';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';
import styles from './Dashboard.module.css';

export const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};