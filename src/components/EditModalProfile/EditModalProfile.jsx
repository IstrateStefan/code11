import { useState, useEffect } from "react";
import styles from "./EditModalProfile.module.css";

export default function EditProfileModal({ isOpen, onClose, profileData, onSave }) {
    const [formData, setFormData] = useState(profileData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) =>
            prevFormData.map((item) =>
                item.label === name ? { ...item, value } : item
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles['modal-overlay']}>
            <div className={styles.modal}>
                <div className={styles['modal-header']}>
                    <h2>Edit Profile</h2>
                    <button onClick={onClose} className={styles['close-button']}>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                    {formData.map((profile, key) => (
                        <div className={styles['form-group']} key={key}>
                            <label>{profile.label}</label>
                            <input
                                type="text"
                                name={profile.label}
                                value={profile.value}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button type="submit" className={styles['save-button']}>Save</button>
                </form>
            </div>
        </div>
    );
}
