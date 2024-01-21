import { BiColor } from 'react-icons/bi';
import ProspectCard from "../../sample_components/ui-components/ProspectCard";
import ActionButton from "../../sample_components/ui-components/ActionButton";
import styles from './EditMarketerForm.module.css';
import { React, useState } from 'react'

function EditMarketerForm() {
    const [full_name, setMarketerFullName] = useState('');
    const [username, setMarketerUsername] = useState('');
    const [email, setMarketerEmail] = useState('');
    const [Marketer_value, setMarketerValue] = useState('');

    const users = [
        { id: 1, prospect: 'John Doe', property: 'Four Plot of Land in Lekki' },
        { id: 2, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 3, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 4, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 5, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 6, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 7, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 8, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 9, prospect: 'Jane Doe', property: '456 Oak St' },
        { id: 10, prospect: 'Jane Doe', property: '456 Oak St' },
        // Add more users as needed
    ];

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

export default EditMarketerForm;