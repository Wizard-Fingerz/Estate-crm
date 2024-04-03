import styles from './viewProspectDetails.module.css'

function ViewProspectDetails({ prospectData }) {
    console.log(prospectData.full_name);
    console.log('view hello');
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    <h3>First Name</h3>
                    <p>{prospectData.prefix} {prospectData.full_name}</p>
                </div>
                <div>
                    <h3>Address</h3>
                    <p>{prospectData.address}</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>{prospectData.email}</p>
                </div>
                <div>
                    <h3>Phone Number</h3>
                    <p>{prospectData.phone_number}</p>
                </div>
                <div>
                    <h3>Phone Number2</h3>
                    <p>{prospectData.phone_number2}</p>
                </div>
                <div>
                    <h3>WhatsApp Number</h3>
                    <p>{prospectData.whatsapp}</p>
                </div>
            </div>
            <div className={styles.right}>
                <div>
                    <h3>Instagram</h3>
                    <p>{prospectData.instagram_username}</p>
                </div>
                <div>
                    <h3>Facebook</h3>
                    <p>{prospectData.facebook_username}</p>
                </div>
                <div>
                    <h3>Twitter</h3>
                    <p>{prospectData.twitter_username}</p>
                </div>
                <div>
                    <h3>Property</h3>
                    <p>{prospectData.property.name}, {prospectData.property.address}</p>
                </div>
                <div>
                    <h3>Status</h3>
                    <p>{prospectData.status}</p>
                </div>
                <div>
                    <h3>Assigned Marketer</h3>
                    <p>{prospectData.follow_up_marketer.first_name} {prospectData.follow_up_marketer.last_name}</p>
                </div>

            </div>

        </div>
    );
}

export default ViewProspectDetails;