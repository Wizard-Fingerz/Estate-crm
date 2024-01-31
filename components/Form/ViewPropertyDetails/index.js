import React from 'react';
import styles from './ViewPropertyDetails.module.css';

const ViewPropertyDetails = ({ propertyData }) => {
    console.log('Image 1 URL:', propertyData.media1);
    console.log('Image 2 URL:', propertyData.media2);
    console.log('Image 3 URL:', propertyData.media3);
    console.log('Image 4 URL:', propertyData.media4);

    return (
        <div className={styles.container}>
            <div className={styles.mediaContainer}>
                {propertyData.media1 && (
                    <img className={styles.media} src={propertyData.media1} alt="Property Image 1" onError={(e) => e.target.src = 'assets/bg_imG.png'} />
                )}
                {propertyData.media2 && (
                    <img className={styles.media} src={propertyData.media2} alt="Property Image 2" onError={(e) => e.target.src = 'assets/bg_imG.png'} />
                )}
                {propertyData.media3 && (
                    <img className={styles.media} src={propertyData.media3} alt="Property Image 3" onError={(e) => e.target.src = 'assets/bg_imG.png'} />
                )}
                {propertyData.media4 && (
                    <img className={styles.media} src={propertyData.media4} alt="Property Image 4" onError={(e) => e.target.src = 'assets/bg_imG.png'} />
                )}
            </div>
            <div className={styles.textContainer}>
                <div>
                    <h1>{propertyData.name}</h1>
                    <p>Property Address: {propertyData.address}</p>
                    <p>Property Description: {propertyData.description}</p>
                </div>
                <div>
                    <p>Property Status: {propertyData.status}</p>
                    <p>Property Value: {propertyData.value}</p>
                    <p>Property Type: {propertyData.type}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewPropertyDetails;
