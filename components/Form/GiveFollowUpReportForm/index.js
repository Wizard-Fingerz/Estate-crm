import styles from './GiveFollowUpReportForm.module.css';
import { React, useState } from 'react'
import { API_BASE_URL } from '@/pages/constants';


const GiveFollowUpReportForm = ({ prospectData }) => {
    const [followup_means, setFollowUpMeans] = useState('');
    const [other_means, setOtherFollowUpMeans] = useState('');
    const [description, setFollowUpDescription] = useState('');
    const [prospect_status, setProspectStatus] = useState('');
    const [additional_comment, setAdditionalComment] = useState('');
    const [customer_feedback, setCustomerFeedback] = useState('');
    const [action_plan, setActionPlan] = useState('');
    const [followup_time, setFollowUpTime] = useState('');
    const [followup_date, setFollowUpDate] = useState('');
    const [reportMedia, setReportMedia] = useState('');
    const [mediaFileName, setMediaFileName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        // Create form data object
        const formData = new FormData();
        formData.append('followup_means', followup_means);
        formData.append('other_means', other_means);
        formData.append('description', description);
        formData.append('prospect_status', prospect_status);
        formData.append('additional_comment', additional_comment);
        formData.append('customer_feedback', customer_feedback);
        formData.append('action_plan', action_plan);
        formData.append('followup_time', followup_time);
        formData.append('followup_date', followup_date);
        formData.append('reportMedia', reportMedia);

        try {
            const response = await fetch(`${API_BASE_URL}/property/follow-up/${prospectData.id}/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: formData
            });

            if (response.ok) {

                // Display alert on successful submission
                alert('Report submitted successfully!');

            } else {

                // Display alert on failed submission
                alert('Failed to submit report!');

            }
            // Handle success or navigate to a different page
        } catch (error) {
            console.error('Error creating follow-up report:', error);
            // Handle error
        }
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.firstForm}>


                {/* <textarea className={styles.input} placeholder='Follow-up Means'
                    onChange={(e) => setFollowUpMeans(e.target.value)}
                    value={followup_means}></textarea><br /> */}

                <select className={styles.input}
                    value={followup_means}
                    onChange={(e) => setFollowUpMeans(e.target.value)}

                >
                    <option>Select Follow-Up Means</option>
                    <option>WhatsApp</option>
                    <option>Phone call</option>
                    <option>Email</option>
                    <option>Physical Visitation</option>
                    <option>Chat</option>
                    <option>Others</option>
                </select>
                <br />

                <input
                    type="text"
                    placeholder="Other Means"
                    value={other_means}
                    onChange={(e) => setOtherFollowUpMeans(e.target.value)}
                    className={styles.input}
                /><br />

                <textarea className={styles.input} placeholder='Description'
                    onChange={(e) => setFollowUpDescription(e.target.value)}
                    value={description}></textarea><br />


                <select className={styles.input}
                    value={prospect_status}
                    onChange={(e) => setProspectStatus(e.target.value)}

                >
                    <option>Prospect Status</option>
                    <option>Prospect</option>
                    <option>Open</option>
                    <option>Working</option>
                    <option>Meeting Set</option>
                    <option>Opportunity</option>
                    <option>Opportunity Lost</option>
                    <option>Customer</option>
                    <option>Closed won</option>
                    <option>Closed Lost</option>
                    <option>In Progress</option>
                    <option>Under Review</option>
                    <option>Pending Approval</option>
                    <option>Awaiting Feedback</option>
                    <option>Contract Attempted</option>
                    <option>Contract Sent</option>
                    <option>Contract Signed</option>
                    <option>Negotiation</option>
                    <option>Contract Sent</option>
                    <option>Pending Payment</option>
                    <option>Completed</option>
                    <option>Archived</option>
                    <option>Cancelled</option>
                    <option>On Hold</option>
                    <option>Pending Verification</option>
                    <option>Scheduled for Visit</option>
                    <option>Follow-up Needed</option>
                    <option>Others</option>
                </select>
                <br />
                <textarea className={styles.input} placeholder='Additional Comment'
                    onChange={(e) => setAdditionalComment(e.target.value)}
                    value={additional_comment}></textarea><br />


                <div className={styles.input}>
                    <button type="button" onClick={() => document.getElementById('reportMedia').click()}>
                        Choose File
                    </button>
                    <label htmlFor="reportMedia" className={styles.fileInputLabel}>
                        {mediaFileName || 'Select Media'}
                    </label>
                    <input
                        type="file"
                        id="reportMedia"
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
            </div>
            <div className={styles.secondForm}>
                <textarea className={styles.input} placeholder='Customer Feedback'
                    onChange={(e) => setCustomerFeedback(e.target.value)}
                    value={customer_feedback}></textarea><br />

                <textarea className={styles.input} placeholder='Action Plan'
                    onChange={(e) => setActionPlan(e.target.value)}
                    value={action_plan}></textarea><br />


                <p>Follow-Up Time</p>
                <input
                    type="time"
                    placeholder="FollowUp Time"
                    value={followup_time}
                    onChange={(e) => setFollowUpTime(e.target.value)}
                    className={styles.input}
                /><br />



                <p>Follow-Up Date</p>
                <input
                    type="date"
                    placeholder="FollowUp Date"
                    value={followup_date}
                    onChange={(e) => setFollowUpDate(e.target.value)}
                    className={styles.input}
                /><br />


                <button type="submit" className={styles.submitButton}>Send Report</button>

            </div>


        </form>
    )
}

export default GiveFollowUpReportForm;