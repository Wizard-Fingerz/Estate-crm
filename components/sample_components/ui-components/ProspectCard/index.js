import React, { useState } from 'react';
import styles from './ProspectCard.module.css';

const ProspectCard = ({ user, onSelect, onUnselect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
    onSelect(user.id); // Assuming user has an 'id' property
  };

  const handleUnselect = () => {
    setIsSelected(false);
    onUnselect(user.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h3>{user.prospect}</h3>
        <p>{user.property}</p>
      </div><div className={styles.actionButtons}>
        {!isSelected ? (
          <button onClick={handleSelect}>Select</button>
        ) : (
          <button style={{
            backgroundColor: 'red',
            color: 'white',
          }} onClick={handleUnselect}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default ProspectCard;
