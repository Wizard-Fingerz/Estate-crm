import { BiColor } from 'react-icons/bi';
import styles from './AddPropertyList.module.css';
import { React, useState } from 'react'

function AddPropertyForm() {
    const [property_name, setPropertyName] = useState('');
    const [property_address, setPropertyAddress] = useState('');
    const [property_description, setPropertyDescription] = useState('');
    const [property_value, setPropertyValue] = useState('');
    const [property_type, setPropertyType] = useState('');
    const [property_other_type, setOtherPropertyType] = useState('');
    const [property_media1, setPropertyMedia1] = useState('');
    const [property_media2, setPropertyMedia2] = useState('');
    const [property_media3, setPropertyMedia3] = useState('');
    const [property_media4, setPropertyMedia4] = useState('');
    const [media1FileName, setMedia1FileName] = useState('');
    const [media2FileName, setMedia2FileName] = useState('');
    const [media3FileName, setMedia3FileName] = useState('');
    const [media4FileName, setMedia4FileName] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('property_name', property_name);
        formData.append('property_address', property_address);
        formData.append('property_description', property_description);
        formData.append('property_value', property_value);
        formData.append('property_type', property_type);
        formData.append('property_other_type', property_other_type);

        if (property_media1 instanceof File) {
            console.log('Property Media 1:', property_media1);

            formData.append('property_media1', property_media1, property_media1.name);
        }
        if (property_media2 instanceof File) {
            console.log('Property Media 2:', property_media2);
            formData.append('property_media2', property_media2, property_media2.name);
        }
        if (property_media3 instanceof File) {
            console.log('Property Media 3:', property_media3);
            formData.append('property_media3', property_media3, property_media3.name);
        }
        if (property_media4 instanceof File) {
            console.log('Property Media 4:', property_media4);
            formData.append('property_media4', property_media4, property_media4.name);
        }

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        console.log(token);
        console.log(formData);

        try {
            const response = await fetch('${API_BASE_URL}/property/create_property/', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Property created successfully!');
                // Handle success, redirect or show a success message

                // Display alert on successful submission
                alert('Property submitted successfully!');

            } else {
                console.error('Failed to create property');
                // Handle error, show an error message

                // Display alert on failed submission
                alert('Failed to create property!');

            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network error

        }
    };


    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
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
                    value={property_type}
                    onChange={(e) => setPropertyType(e.target.value)}
                >
                    <option>Select Property Type</option>
                    <option>Land</option>
                    <option>House</option>
                    <option>Others</option>
                </select>

                <p className={styles.text}>If others, enter the other property type</p>
                <input
                    type="text"
                    placeholder="Property Type"
                    value={property_other_type}
                    onChange={(e) => setOtherPropertyType(e.target.value)}
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

                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('propertyMedia1').click()}>
                        Choose File
                    </button>
                    <label htmlFor="propertyMedia1" className={styles.fileInputLabel}>
                        {media1FileName || 'Select Property Image'}
                    </label>
                    <input
                        type="file"
                        id="propertyMedia1"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setPropertyMedia1(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMedia1FileName(fileName);
                        }}
                    />
                </div>
                <br />

                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('propertyMedia2').click()}>
                        Choose File
                    </button>
                    <label htmlFor="propertyMedia2" className={styles.fileInputLabel}>
                        {media2FileName || 'Select Property Image'}
                    </label>
                    <input
                        type="file"
                        id="propertyMedia2"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setPropertyMedia2(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMedia2FileName(fileName);
                        }}
                    />
                </div>
                <br />


                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('propertyMedia3').click()}>
                        Choose File
                    </button>
                    <label htmlFor="propertyMedia3" className={styles.fileInputLabel}>
                        {media3FileName || 'Select Property Image'}
                    </label>
                    <input
                        type="file"
                        id="propertyMedia3"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setPropertyMedia3(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMedia3FileName(fileName);
                        }}
                    />
                </div>
                <br />
                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('propertyMedia4').click()}>
                        Choose File
                    </button>
                    <label htmlFor="propertyMedia4" className={styles.fileInputLabel}>
                        {media4FileName || 'Select Property Image'}
                    </label>
                    <input
                        type="file"
                        id="propertyMedia4"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setPropertyMedia4(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMedia4FileName(fileName);
                        }}
                    />
                </div>
                <br />

                <button type="submit" className={styles.submitButton}>Create Property</button>

            </div>
        </form>

    )
}

export default AddPropertyForm;