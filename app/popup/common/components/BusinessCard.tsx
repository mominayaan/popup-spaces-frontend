// BusinessCard.tsx
import React from 'react';
import styles from './BusinessCard.module.css';

interface BusinessCardProps {
  businessId: number;
  onClick: () => void; // Define a function to handle click event
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const BusinessCard: React.FC<BusinessCardProps> = ({ businessId, onClick }) => {
  // Generate random data for business card
  const randomRating = getRandomInt(3, 5) + Math.random().toFixed(1); // Generate rating between 3.0 and 5.0
  const randomFootTraffic = getRandomInt(50, 200);
  const randomAvailableSpace = getRandomInt(20, 100);

  const businessData = {
    id: businessId,
    name: `Business ${businessId}`,
    rating: randomRating,
    distance: `${(Math.random() * 10).toFixed(1)} miles`, // Generate random distance
    footTraffic: randomFootTraffic,
    availableSpace: randomAvailableSpace,
  };

  return (
    <div className={styles.businessCard} onClick={onClick}> {/* Add onClick event handler */}
      <div className={styles.businessInfo}>
        <h3>{businessData.name}</h3>
        <div className={styles.rating}>
          Rating: {businessData.rating}
        </div>
        <div className={styles.distance}>
          Distance: {businessData.distance}
        </div>
        <div className={styles.footTraffic}>
          Foot Traffic: {businessData.footTraffic}
        </div>
        <div className={styles.availableSpace}>
          Available Space: {businessData.availableSpace} ft²
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
