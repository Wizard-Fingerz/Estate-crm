import { BiColor } from 'react-icons/bi';
import ProspectCard from "../../sample_components/ui-components/ProspectCard";
import ActionButton from "../../sample_components/ui-components/ActionButton";
import styles from './AddMarketerForm.module.css';
import { React, useState, useEffect } from 'react'

function AddMarketerForm() {
    const [full_name, setMarketerFullName] = useState('');
    const [first_name, last_name] = full_name.split(' ');
    const [username, setMarketerUsername] = useState('');
    const [email, setMarketerEmail] = useState('');
    const [contact, setMarketerContact] = useState('');
    const [marketer_media1, setMarketerMedia1] = useState('');
    const [marketer_media2, setMarketerMedia2] = useState('');
    const [media1FileName, setMedia1FileName] = useState('');
    const [media2FileName, setMedia2FileName] = useState('');
    const [Marketer_value, setMarketerValue] = useState('');
    const [users, setUsers] = useState([]); // Initialize as an empty array

    useEffect(() => {
        // Fetch users from your backend API
        const fetchUsers = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/property/prospects/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                }); // Replace with your actual API endpoint
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    console.log('Users:', users); // Add this line for debugging


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('contact', contact);

        if (marketer_media1 instanceof File) {
            console.log('Markter Media 1:', marketer_media1);

            formData.append('cover_picture', marketer_media1, marketer_media1.name);
        }

        if (marketer_media2 instanceof File) {
            console.log('Markter Media 2:', marketer_media2);

            formData.append('profile_picture', marketer_media2, marketer_media2.name);
        }

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/create_marketer/', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Marketer created successfully!');
                // Handle success, redirect or show a success message

                // Display alert on successful submission
                alert('Marketer submitted successfully!');

            } else {
                console.error('Failed to create Marketer');
                // Handle error, show an error message
                const errorResponse = await response.json();
                console.log(errorResponse);
                const errorMessage = errorResponse.detail || 'Unknown error';
    
                // Display alert with the error message
                alert(`Failed to create Marketer! Error: ${errorMessage}`);

            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network error

        }
    };


    const handleSelectUser = (userId) => {
        // Logic to handle user selection
        console.log(`Selected user with ID ${userId}`);
    };

    const handleUnselectUser = (userId) => {
        // Logic to handle user unselection
        console.log(`Unselected user with ID ${userId}`);
    };

    return (
        <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.firstForm}>
                <input
                    type="text"
                    placeholder="Full name"
                    value={full_name}
                    onChange={(e) => setMarketerFullName(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="Staff Id"
                    value={username}
                    onChange={(e) => setMarketerUsername(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="tel"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => setMarketerContact(e.target.value)}
                    className={styles.input}
                /><br/>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setMarketerEmail(e.target.value)}
                    className={styles.input}
                />


                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('propertyMedia1').click()}>
                        Choose File
                    </button>
                    <label htmlFor="propertyMedia1" className={styles.fileInputLabel}>
                        {media1FileName || 'Select Marketer Cover Image'}
                    </label>
                    <input
                        type="file"
                        id="propertyMedia1"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setMarketerMedia1(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMedia1FileName(fileName);
                        }}
                    />
                </div>
                <br />

                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('marketerMedia2').click()}>
                        Choose File
                    </button>
                    <label htmlFor="marketerMedia2" className={styles.fileInputLabel}>
                        {media2FileName || 'Select Marketer Profile Image'}
                    </label>
                    <input
                        type="file"
                        id="marketerMedia2"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setMarketerMedia2(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMedia2FileName(fileName);
                        }}
                    />
                </div>
                <br />


                <button type="submit" className={styles.submitButton}>Create Marketer</button>

            </div>
            {/* <div className={styles.secondForm}>
                <div className={styles.buttons}>
                    <ActionButton
                        label="Assign to Customer"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }} />

                    <ActionButton
                        label="Auto Assign"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }} />
                </div>
                <div className={styles.prospect}>
                    {users.map((user) => (
                        <ProspectCard
                            key={user.id}
                            user={user}
                            onSelect={handleSelectUser}
                            onUnselect={handleUnselectUser}
                        />
                    ))}
                </div>


            </div> */}
        </form>

    )
}

export default AddMarketerForm