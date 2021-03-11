import React from 'react';
import './Header.css';
import image from '../../images/14059cabed5424a2eba4fd3d099ae543.jpg'

const Header = () => {
    return (
        <div className="header">
            <img src={image} alt=""/>
            <h2 className="title">Football Team Tracker</h2>
        </div>
    );
};

export default Header;