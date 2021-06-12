import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='mainHeader'>
            <h1>
                <Link to='/' className='mainHeader__logo'>
                    News Platform
                </Link>
            </h1>
            <nav className='mainHeader__nav'>
                <Link to='/news' className='mainHeader__link'>
                    News
                </Link>
                <Link to='/profile' className='mainHeader__link'>
                    Profile
                </Link>
            </nav>
        </header>
    );
};

export default Header;
