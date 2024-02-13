// components/EventModal.tsx

import React from 'react';
import styles from './EventModal.module.css';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventData: {
    businessName: string;
    coverPhoto: string; // URL to the cover photo (will be fetched from API)
    address: string;
    startTime: string;
    endTime: string;
    dayOfWeek: string;
    date: string;
    profileName: string;
  };
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, eventData }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <h2>{eventData.businessName}</h2>
          <div className={styles.coverPhoto}>Photo here</div>
          <div>{eventData.address}</div>
          <div>{eventData.startTime} - {eventData.endTime}</div>
          <div>{eventData.dayOfWeek}, {eventData.date}</div>
          <div>{eventData.profileName}</div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
