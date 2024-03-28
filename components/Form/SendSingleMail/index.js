import styles from './SendSingleMail.module.css';
import { React, useState } from 'react'

const SendSingleMail = () => {
    const [mail_subject, setMailSubject] = useState('');
    const [mail_content, setMailContent] = useState('');
    
    const [mail_file, setMailFile] = useState('');
    const [mediaFileName, setMediaFileName] = useState('');
    return (
        <form>

                <input
                    type="text"
                    placeholder="Mail Subject"
                    value={mail_subject}
                    onChange={(e) => setMailSubject(e.target.value)}
                    className={styles.input}
                /><br />
                <textarea className={styles.input} placeholder='Type your message here...'
                    onChange={(e) => setMailContent(e.target.value)}
                    value={mail_content}></textarea><br />
                
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
                        onChange={(e) => {
                            setReportMedia(e.target.files[0]);
                            // Update the selected file name
                            const fileName = e.target.files[0] ? e.target.files[0].name : '';
                            setMediaFileName(fileName);
                        }}
                    />
                </div>
                <br />


                <button type="submit" className={styles.submitButton}>Send Mail</button>


        </form>
    );
}


export default SendSingleMail;