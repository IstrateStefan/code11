import React, { useState } from "react";
import profileIcon from '../../assets/profile-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import horizontalMenu from '../../assets/profile-dots-horizontal.svg';
import ProfileSection from "../ProfileSection/ProfileSection";
import EditProfileModal from "../EditModalProfile/EditModalProfile";
import profileStyles from './Profile.module.css';

export default function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profile, setProfile] = useState([
        { label: 'First name', value: 'Alia', type: 'Self-declaration' },
        { label: 'Last name', value: 'Bhatt', type: 'Self-declaration' },
        { label: 'Date of birth', value: '1975-01-01', type: 'Manual' },
        { label: 'SSN', value: '19221332212212', type: 'Manual input', dotCircle: true },
        { label: 'Email 1', value: 'aliabhatt@microsoft.com', type: 'Self-declaration' },
        { label: 'Email 2', value: 'aliabhatt@ikea.com', type: 'Self-declaration' },
        { label: 'Phone', value: '+22 299 229 222', type: 'Self-declaration' },
        { label: 'Nationality', value: 'Norwegian', type: 'Self-declaration' },
        { label: 'Nationality 2', value: 'German', type: 'Self-declaration' },
    ]);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const handleSave = (updatedProfile) => {
        setProfile(updatedProfile);
        setIsModalOpen(false);
    };

    return (
        <div className={profileStyles.profile}>
            <div className={profileStyles['profile-header']}>
                <div className={profileStyles['profile-left']}>
                    <div className={profileStyles['user-icon']}>
                        <img src={profileIcon} alt="profile-icon" />
                    </div>
                    <h2>Profile</h2>
                </div>
                <div className={profileStyles['profile-right']}>
                    <img onClick={handleEditClick} className={profileStyles['edit-icon']} src={editIcon} alt="edit-icon" />
                    <img src={horizontalMenu} alt="horizontal-menu" />
                </div>
            </div>
            <div className={profileStyles.row}>
                {profile.slice(0, 4).map((data, index) => (
                    <ProfileSection key={index} {...data} />
                ))}
            </div>
            <div className={profileStyles.row}>
                {profile.slice(4, 6).map((data, index) => (
                    <ProfileSection key={index} {...data} />
                ))}
            </div>
            <div className={profileStyles.row}>
                {profile.slice(6).map((data, index) => (
                    <ProfileSection key={index} {...data} />
                ))}
            </div>
            <EditProfileModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                profileData={profile} 
                onSave={handleSave} 
            />
        </div>
    );
}
