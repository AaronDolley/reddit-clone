import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'
import SearchBar from './searchBar';
import Profile from './profile';

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                <img src={logo} alt='App Logo' className='logo'/>
                <h1>redlit</h1>
            </div>
            <div className='center'>
                <SearchBar className={'search'}/>
            </div>
            <div className='right'>
                <Link to="/create"><h3>+ Create</h3></Link>
                <Profile className={'profile'}/>
            </div>
        </div>
    )
}

export default Header;