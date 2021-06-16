import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../actions/loginAction';
const Header = () => {
    const dispatch = useDispatch();
    const { isLogged } = useSelector((state) => state.user);

    const logOutHandler = () => {
        dispatch(logOut());
    };

    return (
        <header className='mainHeader'>
            <h1>
                <Link to='/' className='mainHeader__logo'>
                    News Platform II
                </Link>
            </h1>
            <nav className='mainHeader__nav'>
                <Link to='/news' className='mainHeader__link'>
                    News
                </Link>
                <Link to='/profile' className='mainHeader__link'>
                    Profile
                </Link>
                {isLogged ? (
                    <button
                        className='button button_link mainHeader__link'
                        type='button'
                        onClick={() => logOutHandler()}
                    >
                        Log out
                    </button>
                ) : (
                    <Link to='/login' className='mainHeader__link'>
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
