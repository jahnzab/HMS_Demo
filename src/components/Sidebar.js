import React from 'react';
import styles from './Dashboard.module.css';
import floorImage from './logo.png';

const sidebarItems = [
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e686add4bbf0f5075db7ffa88f75f8971e8dd6ae57a537437fdde57287661f80?placeholderIfAbsent=true&apiKey=523321ab982f4052b2a9d502d3cf6935", 
    label: "Dashboard", 
    isActive: true, 
    handleOnClick: () => console.log("Dashboard clicked") 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/00bf524ff1fe1df4483175003393b68ee2d3758371673d55d73a5ab684e2a2f7?placeholderIfAbsent=true&apiKey=523321ab982f4052b2a9d502d3cf6935", 
    label: "Front desk", 
    handleOnClick: () => console.log("Front desk clicked") 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fee6f4df07e00aa4f15982d377f328be105882d2c30f0866d5f4f1e346b2b00?placeholderIfAbsent=true&apiKey=523321ab982f4052b2a9d502d3cf6935", 
    label: "Guest",
    handleOnClick: () => console.log("Guest clicked") 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/614d92eac39744040c581dc04243130228e6f20dbed31d1b84678c1653e086af?placeholderIfAbsent=true&apiKey=523321ab982f4052b2a9d502d3cf6935", 
    label: "Rooms", 
    handleOnClick: () => console.log("Rooms clicked") 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a1601f63e80a05be0ffe952e8de43acae882f7084e14855b1f60fe4c5d7cd33?placeholderIfAbsent=true&apiKey=523321ab982f4052b2a9d502d3cf6935", 
    label: "Deal", 
    handleOnClick: () => console.log("Deal clicked") 
  },
  { 
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/636479936def771473df83fc7339f5453cbac0ac824fd7a190cb4aed639c3b03?placeholderIfAbsent=true&apiKey=523321ab982f4052b2a9d502d3cf6935", 
    label: "Rate", 
    handleOnClick: () => console.log("Rate clicked") 
  }
];

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img
          src={floorImage}
          alt="Novotel Logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>Novotel</span>
      </div>
      <nav className={styles.navigation}>
        {sidebarItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.sidebarItem} ${item.isActive ? styles.sidebarItemActive : ''}`} 
            onClick={item.handleOnClick} // Handle the onClick event
          >
            <img src={item.icon} alt={`${item.label} icon`} className={styles.sidebarIcon} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};
