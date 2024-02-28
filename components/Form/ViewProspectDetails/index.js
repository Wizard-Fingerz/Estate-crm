import styles from './viewProspectDetails.module.css'

function ViewProspectDetail({prospectData}) {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>First Name</h1>
                <p>`{prospectData.prefix}`</p>

            </div>
            <div className={stylesright}></div>

        </div>
    );
}

export default ViewProspectDetail;