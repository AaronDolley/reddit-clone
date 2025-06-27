import React, { useState, useRef, useEffect } from "react";
import defaultProfileImage from '../assets/default-profile-image.jpeg';
import './profile.css';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    const fileInputRef = useRef();
    const menuRef = useRef();

    //close menu with outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    //Handle  file selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-menu" ref={menuRef}>
            <div className="profile-trigger" onClick={() => setIsOpen(!isOpen)}>
                <img src={profileImage} alt="Profile" className="profile-pic"/>
                {isOpen &&<span className="username">username</span>}
            </div>

            {isOpen && (
                <ul className="dropdown">
                    <li>View Profile</li>
                    <li>Dark Mode</li>
                    <li>Log Out</li>
                    <li>Settings</li>
                </ul>
            )}

            <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{display: "none"}}
            onChange={handleImageChange}/>
        </div>
    );
};

export default Profile;