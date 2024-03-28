import styles from './viewProspectDetails.module.css'

function ViewProspectDetails({prospectData}) {
    console.log(prospectData.full_name);
    console.log('view hello');
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>First Name</h1>
                <p>`{prospectData.prefix}`</p>

            </div>
            <div className={styles.right}></div>

        </div>
    );
}

export default ViewProspectDetails;