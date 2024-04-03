import styles from './SendBulkMail.module.css';
import React, { useState } from 'react';
import { API_BASE_URL } from '@/pages/constants';

const SendBulkMail = () => {
    const [mailSubject, setMailSubject] = useState('');
    const [mailContent, setMailContent] = useState('');
    const [mailFile, setMailFile] = useState(null);
    const [mediaFileName, setMediaFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setMailFile(file);
        setMediaFileName(file ? file.name : '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement your logic to send bulk mail with subject, content, and media file
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        const formData = new FormData();
        formData.append('subject', mailSubject);
        formData.append('message', mailContent);
        if (mailFile) {
            formData.append('media', mailFile);
        }

        try {
            const response = await fetch(`${API_BASE_URL}/property/prospects/send-bulk-email/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Error sending email');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Mail Subject"
                value={mailSubject}
                onChange={(e) => setMailSubject(e.target.value)}
                className={styles.input}
            /><br />
            <textarea
                className={styles.input}
                placeholder='Type your message here...'
                onChange={(e) => setMailContent(e.target.value)}
                value={mailContent}
            ></textarea><br />
            <div className={styles.input}>
                <button type="button" onClick={() => document.getElementById('mailMedia').click()}>
                    Choose File
                </button>
                <label htmlFor="mailMedia" className={styles.fileInputLabel}>
                    {mediaFileName || 'Attach File'}
                </label>
                <input
                    type="file"
                    id="mailMedia"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
            <br />
            <button type="submit" className={styles.submitButton}>Send Mail</button>
        </form>
    );
};

export default SendBulkMail;
