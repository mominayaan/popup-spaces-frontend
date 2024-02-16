import React, { useState } from 'react';
import BusinessCard from '../../../common/components/BusinessCard'; // Corrected import path
import BusinessModal from '../../../common/components/BusinessModal'; // Corrected import path
import styles from './ExploreContent.module.css'; // Ensure this is the correct path for your CSS module

// Temporary function to generate random business data
const generateBusinessData = () => {
  const businesses = [];
  for (let i = 1; i <= 10; i++) {
    businesses.push({
      id: i,
      name: `Business ${i}`,
      imageSrc: `https://via.placeholder.com/300x200?text=Business+${i}`, // Placeholder image
      area: `${(i * 10) + 30} sqft`,
      traffic: i % 2 === 0 ? 'High Foot-traffic' : 'Low Foot-traffic',
      address: `#${100 + i} Example Street`,
      description: 'A short description of the business.',
      images: [
        `https://via.placeholder.com/400x300?text=Image+1`,
        `https://via.placeholder.com/400x300?text=Image+2`
      ],
      priceEstimate: `$${i * 5}/hr`,
    });
  }
  return businesses;
};

const ExploreContent = () => {
  const [businessListings, setBusinessListings] = useState(generateBusinessData());
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [footTraffic, setFootTraffic] = useState('Low');
  const [spaceSize, setSpaceSize] = useState(35);
  const [zipcode, setZipcode] = useState('90210');
  const [radius, setRadius] = useState(10);

  const handleFootTrafficChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFootTraffic(event.target.value);
  };

  const handleLearnMoreClick = (business) => {
    setSelectedBusiness(business);
  };

  const handleSearch = () => {
    // Placeholder for search functionality
    console.log('Search with these params:', { searchQuery, footTraffic, spaceSize, zipcode, radius });
  };

  const handleCloseModal = () => {
    setSelectedBusiness(null);
  };

  return (
    <div className={styles.explorePage}>
      <aside className={styles.filtersSection}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h3>FILTERS</h3>
        <div className={styles.footTrafficFilter}>
            {['Low', 'Medium', 'High', 'Very High'].map((level) => (
                <div key={level} className={styles.filterOption}>
                <input
                    type="radio"
                    id={`foot-traffic-${level}`}
                    name="foot-traffic"
                    value={level}
                    onChange={handleFootTrafficChange} // Implement this handler
                    checked={footTraffic === level}
                />
                <label htmlFor={`foot-traffic-${level}`}>{level}</label>
                </div>
            ))}
            </div>
        <div className={styles.filterItem}>
          <label>Space size</label>
          <input
            type="number"
            placeholder="35 sqft"
            value={spaceSize}
            onChange={(e) => setSpaceSize(Number(e.target.value))}
          />
        </div>
        <div className={styles.filterItem}>
          <label>Zipcode</label>
          <input
            type="text"
            placeholder="90210"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div className={styles.filterItem}>
          <label>Radius</label>
          <input
            type="number"
            placeholder="10 miles"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
          />
        </div>
        <button className={styles.searchButton}>Search</button>
      </aside>
      <section className={styles.businessListingsSection}>
        {businessListings.map((business) => (
          <BusinessCard
            key={business.id}
            name={business.name}
            imageSrc={business.imageSrc}
            area={business.area}
            traffic={business.traffic}
            address={business.address}
            onClick={() => handleLearnMoreClick(business)}
          />
        ))}
      </section>

      {selectedBusiness && (
        <BusinessModal
          isOpen={Boolean(selectedBusiness)}
          onClose={handleCloseModal}
          businessData={selectedBusiness}
        />
      )}
    </div>
  );
};

export default ExploreContent;
