import group from '../../assets/group.svg';
import settings from '../../assets/settings.svg';
import styles from './HeaderDetails.module.css';
import HeaderDetailsItem from '../HeaderDetailsItem/HeaderDetailsItem';

const detailsData = [
  { title: "Date of birth", value: "1975-01-01" },
  { title: "SSN", value: "19221332212212" },
  {
    title: "Companies", value: "4", children: (
      <img className={styles['companies-icon']} src={group} alt="companies-icon" height={12} width={12} />
    )
  },
  { title: "ID Control", value: "Partial match on name and date of birth" },
  {
    title: "Screening", value: "Sanction + SIP found", children: (
      <div className={styles['screening-square']}></div>
    ), additionalClass: true,
  },
  { title: "Screening monitor", value: "Active", isLast: true }
];

export default function HeaderDetails() {
    return (
        <div className={styles.details}>
            <div className={styles['details-container']}>
                {detailsData.map((detail, index) => (
                <HeaderDetailsItem 
                    key={index}
                    title={detail.title}
                    value={detail.value}
                    isLast={detail.isLast}
                    additionalClass={detail.additionalClass}
                >
                    {detail.children}
                </HeaderDetailsItem>
                ))}
                <div className={styles.settings}>
                    <img src={settings} alt="settings-icon" width={18} />
                </div>
            </div>
        </div>
    );
}
