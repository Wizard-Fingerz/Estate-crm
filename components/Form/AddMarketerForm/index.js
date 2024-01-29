import { BiColor } from 'react-icons/bi';
import ProspectCard from "../../sample_components/ui-components/ProspectCard";
import ActionButton from "../../sample_components/ui-components/ActionButton";
import styles from './AddMarketerForm.module.css';
import { React, useState, useEffect } from 'react'

function AddMarketerForm() {
    const [full_name, setMarketerFullName] = useState('');
    const [username, setMarketerUsername] = useState('');
    const [email, setMarketerEmail] = useState('');
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


    const handleSelectUser = (userId) => {
        // Logic to handle user selection
        console.log(`Selected user with ID ${userId}`);
    };

    const handleUnselectUser = (userId) => {
        // Logic to handle user unselection
        console.log(`Unselected user with ID ${userId}`);
    };

    return (
        <form className={styles.form}>
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
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setMarketerUsername(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setMarketerEmail(e.target.value)}
                    className={styles.input}
                /><br />

                <input
                    type="file"
                    placeholder="Marketer Image"
                    value={Marketer_value}
                    onChange={(e) => setMarketerValue(e.target.value)}
                    className={styles.input}
                /><br />




            </div>
            <div className={styles.secondForm}>
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


            </div>
        </form>

    )
}

export default AddMarketerForm