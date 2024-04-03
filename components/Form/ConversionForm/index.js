import { React, useState, useEffect } from 'react'
import styles from './ConversionForm.module.css';
import { API_BASE_URL } from '@/pages/constants';



function ConversionForm() {
    const [prospectId, setProspectId] = useState(''); // Initialize with an empty string

    const [prospect, setProspect] = useState([]);

    const [amount, setAmount] = useState('');
    const [prospect_media, setProspectMedia] = useState('');
    const [payment_status, setPaymentStatus] = useState('');
    const [prospect_other_media, setProspectOtherMedia] = useState('');
    const [followup_description, setFollowupDescription] = useState('');
    const [prospects, setProspects] = useState([]);
    const [mediaFileName, setMediaFileName] = useState('');
    const [mediaFileName1, setMediaFileName1] = useState('');


    useEffect(() => {
        fetchProspect();
    }, []);


    const fetchProspect = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/property/prospects/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProspects(data);
                console.log(data)
            } else {
                console.error('Failed to fetch prospects');
            }
        } catch (error) {
            console.error('Network error:', error);
        }

    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('prospect_id', prospectId);
            formData.append('amount', amount);
            formData.append('payment_status', payment_status);
            formData.append('follow_up_description', followup_description);
            formData.append('receipt', prospect_media); // Append file data
            formData.append('other_files', prospect_other_media); // Append file data

            const response = await fetch(`${API_BASE_URL}/property/convert-prospect-to-customer/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: formData,
            });


            if (response.ok) {
                // Prospect successfully converted to customer
                console.log('Prospect converted to customer');
            } else {
                console.error('Failed to convert prospect to customer');
            }
        } catch (error) {
            console.error('Error converting prospect to customer:', error);
        }
    };


    return (


        <form className={styles.form} onSubmit={handleFormSubmit}>

            <div className={styles.firstForm}>
                <select
                    value={prospectId}
                    onChange={(e) => setProspectId(e.target.value)}
                    className={styles.input}
                >
                    <option value="">Select Prospect</option>
                    {prospects.map((Prospect) => (
                        <option key={Prospect.id} value={Prospect.id}>
                            {Prospect.full_name}
                        </option>
                    ))}
                </select>

                <br />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={styles.input}
                /><br />

                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('prospectMedia').click()}>
                        Choose File
                    </button>
                    <label htmlFor="prospectMedia" className={styles.fileInputLabel}>
                        {mediaFileName || 'Upload file'}
                    </label>
                    <input
                        type="file"
                        id="prospectMedia"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setProspectMedia(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMediaFileName(fileName);
                        }}
                    />
                </div>

                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('prospectMedia1').click()}>
                        Choose File
                    </button>
                    <label htmlFor="prospectMedia1" className={styles.fileInputLabel}>
                        {mediaFileName1 || 'Upload other file'}
                    </label>
                    <input
                        type="file"
                        id="prospectMedia1"
                        style={{ display: 'none' }}
                        onChange={(e) => {
                            setProspectOtherMedia(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMediaFileName1(fileName);
                        }}
                    />
                </div>

            </div>

            <div className={styles.secondForm}>
                <select

                    value={payment_status}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    className={styles.input}
                >
                    <option>Payment Status</option>
                    <option>Completed</option>
                    <option>Incompleted</option>

                </select><br />

                <textarea className={styles.input} placeholder='Write the followup description in details'
                    onChange={(e) => setFollowupDescription(e.target.value)}
                    value={followup_description}></textarea><br />
                <br />
                <button type="submit" className={styles.submitButton}>Convert Prospect</button>

            </div>

        </form>

    );
}

export default ConversionForm;