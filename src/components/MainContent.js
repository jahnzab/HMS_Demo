import React from 'react';
import { Header } from './Header';
import { Statistics } from './Statistics';
import { RoomOverview } from './RoomOverview';
import {RoomStatus} from './RoomStatus'
import {FloorStatus} from './FloorStatus';
import { OccupancyChart } from './OccupancyChart';
import { FeedbackSection } from './FeedbackSection';
import styles from './Dashboard.module.css';

export const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <Header />
      <Statistics />
      <RoomOverview />
      <div className={styles.gridContainer}>
        <div className={styles.statusSection}>
              <RoomStatus />
             <FloorStatus /> 
            
        </div>
        <OccupancyChart />
        <FeedbackSection />
      </div>
    </main>
  );
};
