import HeaderDetails from "../HeaderDetails/HeaderDetails";
import arrow from '../../assets/icon-arrow-right.svg';
import userIcon from '../../assets/user-icon.svg';
import download from '../../assets/download.svg';
import dotsHorizontal from '../../assets/dots-horizontal.svg';
import plus from '../../assets/plus.svg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles['header-left']}>
                    <div className={styles.arrow}>
                        <img src={arrow} alt="arrow-left" />
                    </div>
                    <img className={styles['profile-icon']} src={userIcon} alt="profile-icon" />
                    <h1>Alia Bhatt</h1>
                    <span className={styles.updates}>
                        <div className={styles.square}></div>
                        4 updates
                    </span>
                </div>
                <div className={styles['header-right']}>
                    <div className={styles.circle}>
                        <img src={plus} alt="plus-sign" />
                    </div>
                    <div className={styles['generate-report-container']}>
                        <button className={styles['generate-report']}>
                            <img src={download} alt="download" />
                            Generate report
                        </button>
                    </div>
                    <div className={styles['menu-button-container']}>
                        <button className={styles['menu-button']}>
                            <img src={dotsHorizontal} alt="horizontal-dots" />
                        </button>
                    </div>
                </div>
            </header>
            <HeaderDetails />
        </>
    );
}
