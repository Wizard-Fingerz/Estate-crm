import { BiColor } from 'react-icons/bi';
import styles from './AddProspect.module.css';
import { React, useState } from 'react'

function AddProspectForm() {
    const [prospect_prefix, setProspectPrefix] = useState('');
    const [prospect_name, setProspectName] = useState('');
    const [prospect_address, setProspectAddress] = useState('');
    const [prospect_email, setProspectEmail] = useState('');
    const [prospect_phone_number, setProspectPhoneNumber] = useState('');
    const [prospect_whatsapp_phone_number, setProspectWhatsAppPhoneNumber] = useState('');

    return (
        <form className={styles.form}>
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
                    placeholder="Phone Number"
                    value={prospect_phone_number}
                    onChange={(e) => setProspectPhoneNumber(e.target.value)}
                    className={styles.input}
                /><br />
                <input
                    type="text"
                    placeholder="WhatsApp Number"
                    value={prospect_whatsapp_phone_number}
                    onChange={(e) => setProspectWhatsAppPhoneNumber(e.target.value)}
                    className={styles.input}
                /><br />




            </div>
            <div className={styles.secondForm}>
                <select


                    className={styles.input}
                >
                    <option>Select Property</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br />

                <select
                    className={styles.input}
                >
                    <option>Assign Followup Marketer</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>

            </div>
        </form>

    )
}

export default AddProspectForm;