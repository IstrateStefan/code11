import React from "react";
import styles from './HeaderDetailsItem.module.css';

export default function HeaderDetailsItem({ title, value, children, additionalClass, isLast }) {
    return (
        <div className={`${styles['detail-item']} ${isLast ? styles['last-detail-item'] : ''}`}>
            <span className={styles['detail-title']}>{title}</span>
            <span className={`${styles['detail-value']} ${additionalClass ? styles['additional-flex-class'] : ''}`}>
                {value}
                {children}
            </span>
        </div>
    );
}
