import styles from './UpdateItem.module.css';

export default function UpdateItem ({ icon, title, content, time, additionalClass, showSquare }) {
    return (
        <div className={styles['update-item']}>
            <div className={styles['update-icon']}>
                <img src={icon} alt="update-icon" />
            </div>
            <div className={styles.content}>
                <div className={styles['update-title']}>
                    {title}
                    {showSquare && <div className={styles['updates-square']} />}
                </div>
                <div className={`${styles['update-content']} ${additionalClass}`}>
                    {content}
                </div>
                <div className={styles['update-time']}>{time}</div>
            </div>
        </div>
    );
};
