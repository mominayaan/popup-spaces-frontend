// ExploreContent.tsx
import React, { useState } from 'react';
import BusinessCard from '../../../common/components/BusinessCard'; // Adjust the import path as necessary
import BusinessModal from '../../../common/components/BusinessModal'; // Adjust the import path as necessary
import styles from './ExploreContent.module.css'; // Assuming you have a CSS module for ExploreContent styles

const ExploreContent = () => {
  // State for filter criteria
  const [minStars, setMinStars] = useState<number>(0);
  const [maxDistance, setMaxDistance] = useState<number>(50); // Set default max distance to 50
  const [minAvailableSpace, setMinAvailableSpace] = useState<number>(0);
  const [minFootTraffic, setMinFootTraffic] = useState<number>(0); // New filter for minimum foot traffic

  // State for modal
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null);

  // Function to handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'minStars':
        setMinStars(Number(value));
        break;
      case 'maxDistance':
        setMaxDistance(Number(value));
        break;
      case 'minAvailableSpace':
        setMinAvailableSpace(Number(value));
        break;
      case 'minFootTraffic':
        setMinFootTraffic(Number(value)); // Handle minimum foot traffic filter
        break;
      default:
        break;
    }
  };

  // Function to handle business card click
  const handleBusinessClick = (businessData: any) => {
    setSelectedBusiness(businessData);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedBusiness(null);
  };

  // Generate an array of 75 business card IDs
  const businessCardIds = Array.from({ length: 75 }, (_, index) => index + 1);

  // Filter business cards based on all criteria
  const filteredBusinessCards = businessCardIds.filter(businessId => {
    // Apply filter logic here
    // For demonstration purposes, let's assume we're filtering based on all criteria
    return (
      businessId >= minStars &&
      businessId <= maxDistance &&
      businessId >= minAvailableSpace &&
      businessId >= minFootTraffic
    );
  });

  return (
    <div className={styles.exploreContent}>
      <div className={styles.filterMenu}>
        <h3>Filters</h3>
        <div className={styles.filterItem}>
          <label htmlFor="minStars">Minimum Stars:</label>
          <input
            type="number"
            id="minStars"
            name="minStars"
            value={minStars}
            onChange={handleFilterChange}
          />
        </div>
        <div className={styles.filterItem}>
          <label htmlFor="maxDistance">Maximum Distance (miles):</label>
          <input
            type="number"
            id="maxDistance"
            name="maxDistance"
            value={maxDistance}
            onChange={handleFilterChange}
          />
        </div>
        <div className={styles.filterItem}>
          <label htmlFor="minAvailableSpace">Minimum Available Space (ft²):</label>
          <input
            type="number"
            id="minAvailableSpace"
            name="minAvailableSpace"
            value={minAvailableSpace}
            onChange={handleFilterChange}
          />
        </div>
        <div className={styles.filterItem}>
          <label htmlFor="minFootTraffic">Minimum Foot Traffic:</label>
          <input
            type="number"
            id="minFootTraffic"
            name="minFootTraffic"
            value={minFootTraffic}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className={styles.businessCards}>
        <div className={styles.businessCardGrid}>
          {filteredBusinessCards.map((businessId) => (
            <BusinessCard key={businessId} businessId={businessId} onClick={() => handleBusinessClick(businessId)} />
          ))}
        </div>
      </div>

      {/* Render BusinessModal if selectedBusiness is not null */}
      <BusinessModal isOpen={selectedBusiness !== null} onClose={handleCloseModal} businessData={selectedBusiness} />
    </div>
  );
};

export default ExploreContent;
