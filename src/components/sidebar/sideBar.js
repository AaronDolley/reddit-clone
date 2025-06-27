import React, {useState} from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';
import CustomFeeds from './customFeeds';
import CreateCommunity from './createCommunity';
import './sideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [isCustomFeedOpen, setIsCustomFeedOpen] = useState(false);
    const [isCreateCommunityOpen, setIsCreateCommunityOpen] = useState(false);

    const navigate = useNavigate();
    const goHome = () => {
        navigate("/");
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-section'>
                <button onClick={goHome} className='home-btn'><h4 className='sidebar-heading'><FaHome />Home</h4></button>
            </div>
            <div className='sidebar-section'>
                <h4 className="sidebar-heading">Custom Feeds</h4>
                <span onClick={() => setIsCustomFeedOpen(true)} style={{ cursor: 'pointer' }} className='sidebar-action'>
                <FaPlus /> Create a custom feed
                </span>
                <CustomFeeds isOpen={isCustomFeedOpen} onClose={() => setIsCustomFeedOpen(false)}/>
            </div>
            <div className='sidebar-section'>
                <h4 className='sidebar-heading'>Communities</h4>
                <span onClick={() => setIsCreateCommunityOpen(true)} style={{ cursor: 'pointer' }} className='sidebar-action'>
                    <FaPlus /> Create a community
                </span>
                <CreateCommunity isOpen={isCreateCommunityOpen} onClose={() => setIsCreateCommunityOpen(false)}/>
            </div>
        </div>
    )
};

export default SideBar;