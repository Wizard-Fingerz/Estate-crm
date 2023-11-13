import styles from './DataCard.module.css';

const DataCard = ({label, value}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{value}</h1>
            <div>
                <div></div>
                <h3 className={styles.h3}>{label}</h3>
            </div>
        </div>

    );
};

export default DataCard;
