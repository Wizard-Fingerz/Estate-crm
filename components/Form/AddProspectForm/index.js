import { BiColor } from 'react-icons/bi';
import styles from './AddProspect.module.css';
import { React, useState, useEffect } from 'react'
import { API_BASE_URL } from '@/pages/constants';

function AddProspectForm() {
    const [prospect_prefix, setProspectPrefix] = useState('');
    const [prospect_name, setProspectName] = useState('');
    const [prospect_address, setProspectAddress] = useState('');
    const [prospect_email, setProspectEmail] = useState('');
    const [prospect_phone_number1, setProspectPhoneNumber1] = useState('');
    const [prospect_phone_number2, setProspectPhoneNumber2] = useState('');
    const [prospect_whatsapp_phone_number, setProspectWhatsAppPhoneNumber] = useState('');
    const [prospect_facebook_username, setProspectFacebookUsername] = useState('');
    const [prospect_twitter_username, setProspectTwitterUsername] = useState('');
    const [prospect_instagram_username, setProspectInstagramUsername] = useState('');
    const [prospect_contact_source, setProspectContactSource] = useState('');
    const [planned_commitment_date, setPlannedCommitmentDate] = useState('');
    const [area_of_interest, setAreaOfInterest] = useState('');
    const [property, setProperty] = useState('');
    const [marketer, setMarketer] = useState('');
    const [properties, setProperties] = useState([]);
    const [followupMarketers, setFollowupMarketers] = useState([]);


    useEffect(() => {
        // Fetch properties and follow-up marketers from the backend
        fetchProperties();
        fetchFollowupMarketers();
    }, []);

    const fetchProperties = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/property/properties/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProperties(data);
            } else {
                console.error('Failed to fetch properties');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };


    const fetchFollowupMarketers = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/property/marketers/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setFollowupMarketers(data);
            } else {
                console.error('Failed to fetch marketers');
            }
        } catch (error) {
            console.error('Network error:', error);
        }

    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('prospect_prefix', prospect_prefix);
        formData.append('prospect_name', prospect_name);
        formData.append('prospect_address', prospect_address);
        formData.append('prospect_email', prospect_email);
        formData.append('prospect_phone_number1', prospect_phone_number1);
        formData.append('prospect_phone_number2', prospect_phone_number2);
        formData.append('prospect_whatsapp_phone_number', prospect_whatsapp_phone_number);
        formData.append('prospect_facebook_username', prospect_facebook_username);
        formData.append('prospect_twitter_username', prospect_twitter_username);
        formData.append('prospect_instagram_username', prospect_instagram_username);
        formData.append('prospect_contact_source', prospect_contact_source);
        formData.append('planned_commitment_date', planned_commitment_date);
        formData.append('area_of_interest', area_of_interest);
        formData.append('property', property);
        formData.append('marketer', marketer);


        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/property/create_prospect/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Prospect created successfully!');
                // Handle success, redirect or show a success message

                // Display alert on successful submission
                alert('Prospect submitted successfully!');

            } else {
                console.error('Failed to create prospect');
                // Handle error, show an error message

                // Display alert on failed submission
                alert('Failed to create prospect!');

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
                    placeholder="Prefix"
                    value={prospect_prefix}
                    onChange={(e) => setProspectPrefix(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={prospect_name}
                    onChange={(e) => setProspectName(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Address"
                    value={prospect_address}
                    onChange={(e) => setProspectAddress(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="email"
                    placeholder="Email"
                    value={prospect_email}
                    onChange={(e) => setProspectEmail(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Phone Number 1"
                    value={prospect_phone_number1}
                    onChange={(e) => setProspectPhoneNumber1(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Phone Number 2"
                    value={prospect_phone_number2}
                    onChange={(e) => setProspectPhoneNumber2(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="WhatsApp Number"
                    value={prospect_whatsapp_phone_number}
                    onChange={(e) => setProspectWhatsAppPhoneNumber(e.target.value)}
                    className={styles.input}
                /><br />

                <select

                    value={area_of_interest}
                    onChange={(e) => setAreaOfInterest(e.target.value)}
                    className={styles.input}
                >
                    <option>Area of Interest</option>
                    <option>Land</option>
                    <option>Housing</option>
                    <option>Membership</option>
                    <option>Partnership</option>
                </select><br/>




            </div>
            <div className={styles.secondForm}>

                <input
                    type="text"
                    placeholder="Facebook Username"
                    value={prospect_facebook_username}
                    onChange={(e) => setProspectFacebookUsername(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Twitter Username"
                    value={prospect_twitter_username}
                    onChange={(e) => setProspectTwitterUsername(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Instagram Username"
                    value={prospect_instagram_username}
                    onChange={(e) => setProspectInstagramUsername(e.target.value)}
                    className={styles.input}
                /><br />
                <textarea className={styles.input} placeholder='Contact Source'
                    onChange={(e) => setProspectContactSource(e.target.value)}
                    value={prospect_contact_source}></textarea><br />
                <select
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                    className={styles.input}
                >
                    <option>Select Property</option>
                    {properties.map((property) => (
                        <option key={property.id} value={property.id}>
                            {property.name} {/* Use the actual property name or identifier */}
                        </option>
                    ))}
                </select>
                <br />
                <select
                    value={marketer}
                    onChange={(e) => setMarketer(e.target.value)}
                    className={styles.input}
                >
                    <option>Assign Followup Marketer</option>
                    {followupMarketers.map((marketer) => (
                        <option key={marketer.id} value={marketer.id}>
                            {marketer.username} {/* Use the actual property name or identifier */}
                        </option>
                    ))}
                </select>
                <br />

                <input
                    type="date"
                    placeholder="Planned Commitment Date"
                    value={planned_commitment_date}
                    onChange={(e) => setPlannedCommitmentDate(e.target.value)}
                    className={styles.input}
                /><br />






                <button type="submit" className={styles.submitButton}>Create Prospect</button>
            </div>
        </form>

    )
}

export default AddProspectForm;