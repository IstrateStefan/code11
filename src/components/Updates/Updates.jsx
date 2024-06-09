import React from "react";
import icon from '../../assets/update-icon-1.svg';
import icon1 from '../../assets/update-icon-2.svg';
import icon2 from '../../assets/update-icon-3.svg';
import icon3 from '../../assets/update-icon-4.svg'
import styles from './Updates.module.css';
import UpdateItem from '../UpdateItem/UpdateItem';

export default function Updates() {
    const updates = [
        {
          icon: icon,
          title: "SANCTION + SIP found",
          content: "Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.",
          time: "11 Apr 2023 12:02PM - Source name",
          additionalClass: "",
          showSquare: true,
        },
        {
          icon: icon1,
          title: "SSN update",
          content: "Lorem ipsum dolor sit amet consectetur.",
          time: "11 Apr 2023 12:02PM - Source name",
          additionalClass: "",
          showSquare: true,
        },
        {
          icon: icon1,
          title: "New address",
          content: "Lorem ipsum dolor sit amet consectetur.",
          time: "11 Apr 2023 12:02PM - Source name",
          additionalClass: "",
          showSquare: true,
        },
        {
          icon: icon2,
          title: "IKEA - new company",
          content: "Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.",
          time: "11 Apr 2023 12:02PM - Source name",
          additionalClass: styles['million-grey'],
          showSquare: true,
        },
        {
          icon: icon3,
          title: "Screening monitor enabled",
          content: "Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.",
          time: "11 Apr 2023 12:02PM - Source name",
          additionalClass: styles['million-grey'],
          showSquare: false,
        }
    ];

    return (
        <div className={styles['updates-section']}>
            {updates.map((update, index) => (
                <UpdateItem
                    key={index}
                    icon={update.icon}
                    title={update.title}
                    content={update.content}
                    time={update.time}
                    additionalClass={update.additionalClass}
                    showSquare={update.showSquare}
                />
            ))}
        </div>
  );
}
