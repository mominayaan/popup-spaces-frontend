import React from 'react';
import styles from './BusinessCard.module.css'; // Adjust the import path as necessary

interface BusinessCardProps {
  name: string;
  imageSrc: string;
  area: string;
  traffic: string;
  address: string;
  onClick: () => void; // Assuming a click handler for 'Learn More' button
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, imageSrc, area, traffic, address, onClick }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={name} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{name}</h3>
      <div className={styles.cardInfo}>
        <span className={styles.cardArea}>{area}</span>
        <span className={styles.cardTraffic}>{traffic}</span>
      </div>
      <div className={styles.cardAddress}>
        <span>{address}</span>
      </div>
      <button className={styles.learnMoreButton} onClick={onClick}>Learn More</button>
    </div>
  );
};

export default BusinessCard;
