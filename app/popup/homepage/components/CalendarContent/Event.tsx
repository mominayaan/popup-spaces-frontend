import React from 'react';
import styles from './Event.module.css'; // Ensure the path to your CSS module is correct

interface EventProps {
  event: {
    id: number;
    start: Date;
    end: Date;
    businessName: string;
    address: string;
    color: string;
  };
  onClick: () => void; // Function to handle click event
}

const Event: React.FC<EventProps> = ({ event, onClick }) => {
  const { start, end, businessName, address, color } = event;
  const startTime = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endTime = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={styles.event} style={{ backgroundColor: color }} onClick={onClick}>
      <div className={styles.eventContent}>
        <div className={styles.eventDetails}>
          <div>{startTime} - {endTime}</div>
          <div>{businessName}</div>
          <div>{address}</div>
        </div>
      </div>
    </div>
  );
};

export default Event;
