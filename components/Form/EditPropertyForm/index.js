import { BiColor } from 'react-icons/bi';
import styles from './EditPropertyForm.module.css';
import { React, useState } from 'react'

function EditPropertyForm() {
    const [property_name, setPropertyName] = useState('');
    const [property_address, setPropertyAddress] = useState('');
    const [property_description, setPropertyDescription] = useState('');
    const [property_value, setPropertyValue] = useState('');

    return (
        <form className={styles.form}>
            <div className={styles.firstForm}>
                <input
                    type="text"
                    placeholder="Property name"
                    value={property_name}
                    onChange={(e) => setPropertyName(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Property Address"
                    value={property_address}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Property Description"
                    value={property_description}
                    onChange={(e) => setPropertyDescription(e.target.value)}
                    className={styles.input}
                /><br />



                <select
                    className={styles.input}
                >
                    <option>Select Property Type</option>
                    <option>Land</option>
                    <option>House</option>
                    <option>Others</option>
                </select>

                <p className = {styles.text}>If others, enter the other property type</p>
                <input
                    type="text"
                    placeholder="Property Type"
                    value={property_value}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className={styles.input}
                /><br />

            </div>
            <div className={styles.secondForm}>
                <input
                    type="text"
                    placeholder="Property Value"
                    value={property_value}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="file"
                    placeholder="Property Image"
                    value={property_value}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="file"
                    placeholder="Property Image"
                    value={property_value}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="file"
                    placeholder="Property Image"
                    value={property_value}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="file"
                    placeholder="Property Image"
                    value={property_value}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className={styles.input}
                /><br />
            </div>
        </form>

    )
}

export default EditPropertyForm;