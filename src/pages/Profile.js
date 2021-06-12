import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Profile = () => {
    const { username } = useSelector((state) => state.user);
    const history = useHistory();
    useEffect(() => {
        if (!username) history.push('/login');
    }, [history, username]);

    return (
        <main>
            <h1>Welcome to your profile</h1>
            <p>{Date().toLocaleString()}</p>
        </main>
    );
};

export default Profile;
