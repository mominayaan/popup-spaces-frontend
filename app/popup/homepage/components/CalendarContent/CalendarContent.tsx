import React, { useState } from 'react';
import Event from './Event'; // Ensure the path to your Event component is correct
import EventModal from './EventModal'; // Ensure the path to your EventModal component is correct
import styles from './CalendarContent.module.css'; // Ensure the path to your CSS module is correct

interface EventData {
  id: number;
  title: string;
  start: Date;
  end: Date;
  businessName: string;
  address: string;
  profile: string; // Add profile field to EventData
  color: string; // Add color field to EventData
}

// Define predefined colors for profiles
const profileColors = [
  'hsl(210, 70%, 70%)', // Light blue
  'hsl(120, 70%, 70%)', // Light green
];

// Function to generate a color based on the profile number
const getColorForProfile = (profileNumber: number) => {
  const colorIndex = profileNumber % profileColors.length;
  return profileColors[colorIndex];
};

const CalendarContent: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([
    // Sample events with profile information
    { id: 1, title: 'Meeting', start: new Date(2024, 1, 12, 10, 0), end: new Date(2024, 1, 12, 11, 0), businessName: 'Business 1', address: '123 Main St, City, Country', profile: 'PopUp Soda', color: getColorForProfile(0) },
    { id: 2, title: 'Lunch', start: new Date(2024, 1, 12, 12, 0), end: new Date(2024, 1, 12, 13, 0), businessName: 'Business 2', address: '456 Elm St, City, Country', profile: 'PopUp Tshirts', color: getColorForProfile(1) },
    { id: 3, title: 'Presentation', start: new Date(2024, 1, 13, 14, 0), end: new Date(2024, 1, 13, 15, 0), businessName: 'Business 3', address: '789 Oak St, City, Country', profile: 'PopUp Soda', color: getColorForProfile(0) },
  ]);

  const [selectedProfiles, setSelectedProfiles] = useState<string[]>(events.map(event => event.profile));

  // New State: Current Week Start
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event: EventData) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleProfileChange = (profile: string) => {
    if (selectedProfiles.includes(profile)) {
      setSelectedProfiles(selectedProfiles.filter(p => p !== profile));
    } else {
      setSelectedProfiles([...selectedProfiles, profile]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null); // Clear selected event when modal closes
  };

  // New Function: Change Week
  const changeWeek = (amount: number) => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() + 7 * amount);
    setCurrentWeekStart(newWeekStart);
  };

  const renderEvents = (day: Date) => {
    const dayEvents = events.filter(event => {
      return selectedProfiles.includes(event.profile) && event.start.getDate() === day.getDate();
    });
    return dayEvents.map(event => (
      <Event key={event.id} event={event} onClick={() => handleEventClick(event)} />
    ));
  };

  const renderWeek = () => {
    const weekStart = new Date(currentWeekStart);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay()); // Adjust to the start of the week
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);

      days.push(
        <div key={i} className={styles.day}>
          <div className={styles.dayHeader}>
            <div>{day.toLocaleDateString('en-US', { weekday: 'short' })}</div>
            <div>{day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
          </div>
          <div className={styles.events}>{renderEvents(day)}</div>
        </div>
      );
    }

    return days;
  };

  const profiles = ['PopUp Soda', 'PopUp Tshirts'];

  return (
    <div className={styles.container}>
      <div className={styles.profilesMenuContainer}>
        <div className={styles.profilesMenu}>
          {profiles.map((profile, index) => (
            <div key={profile} className={styles.profileCheckbox} style={{ backgroundColor: profileColors[index] }}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProfiles.includes(profile)}
                  onChange={() => handleProfileChange(profile)}
                />
                {profile}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.calendar}>
        {/* Week Navigation Buttons */}
        <div className={styles.navigationContainer}>
          <div className={styles.weekNavigation}>
            <button onClick={() => changeWeek(-1)}>&lt;</button>
            <button onClick={() => changeWeek(1)}>&gt;</button>
          </div>
        </div>
        <div className={styles.week}>{renderWeek()}</div>
      </div>

      

      {selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={closeModal}
          eventData={{
            businessName: selectedEvent.businessName,
            coverPhoto: '', // Placeholder for cover photo
            address: selectedEvent.address,
            startTime: selectedEvent.start.toLocaleTimeString(),
            endTime: selectedEvent.end.toLocaleTimeString(),
            dayOfWeek: selectedEvent.start.toLocaleDateString('en-US', { weekday: 'long' }),
            date: selectedEvent.start.toLocaleDateString('en-US'),
            profileName: selectedEvent.profile,
          }}
        />
      )}
    </div>
  );
};

export default CalendarContent;
