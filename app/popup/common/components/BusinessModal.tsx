import React from 'react';
import styles from './BusinessModal.module.css'; // Adjust the import path as necessary

interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessData: {
    name: string;
    description: string;
    area: string;
    traffic: string;
    address: string;
    images: string[];
    priceEstimate: string;
    // Include any other relevant props for business data
  };
}

const BusinessModal: React.FC<BusinessModalProps> = ({ isOpen, onClose, businessData }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalHeader}>
          <h2>{businessData.name}</h2>
          <p>{businessData.description}</p>
          <div className={styles.modalInfo}>
            <span>{businessData.area}</span>
            <span>{businessData.traffic}</span>
          </div>
          <div className={styles.modalAddress}>
            <span>{businessData.address}</span>
          </div>
          <div className={styles.priceEstimate}>
            <span>{businessData.priceEstimate}</span>
          </div>
        </div>
        {/* Image carousel would go here */}
        {/* Booking form would go here */}
      </div>
    </div>
  );
};

export default BusinessModal;
