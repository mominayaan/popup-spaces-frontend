// BusinessModal.tsx
import React from 'react';
import styles from './BusinessModal.module.css';

interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessData: {
    id: number;
    name: string;
    rating: number;
    distance: string;
    footTraffic: number;
    availableSpace: number;
  };
}

const BusinessModal: React.FC<BusinessModalProps> = ({ isOpen, onClose, businessData }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{businessData.name}</h2>
        <div>Rating: {businessData.rating}</div>
        <div>Distance: {businessData.distance}</div>
        <div>Foot Traffic: {businessData.footTraffic}</div>
        <div>Available Space: {businessData.availableSpace} ft²</div>
        {/* Add more detailed information here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BusinessModal;
