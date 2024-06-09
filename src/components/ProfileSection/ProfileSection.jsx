import styles from './ProfileSection.module.css';
import profileSectionStyles from '../ProfileSection/ProfileSection.module.css';

export default function ProfileSection ({ label, value, type, dotCircle }) {
    return (
        <div className={styles['profile-section']}>
            <div className={profileSectionStyles['label']}>
                {dotCircle ? (
                    <div>
                        <div className={profileSectionStyles['dot-circle-square']}></div>
                        {label}
                    </div>
                ) : (
                    label
                )}
            </div>
            <span className={styles.value}>{value}</span>
            <span className={styles.type}>{type}</span>
        </div>
    );
};
