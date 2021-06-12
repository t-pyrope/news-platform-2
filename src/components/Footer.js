import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='mainFooter'>
            <Link className='mainFooter__link' to='/'>
                News platform
            </Link>
            <Link className='mainFooter__link' to='/news'>
                News
            </Link>
            <Link className='mainFooter__link' to='/profile'>
                Profile
            </Link>
        </footer>
    );
};

export default Footer;
